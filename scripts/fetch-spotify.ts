#!/usr/bin/env node
/**
 * Fetch Eri Ife's discography from the Spotify Web API and write it to
 * src/data/spotify.generated.ts.
 *
 * Usage:
 *   pnpm fetch-spotify            # write generated file, print instructions
 *   pnpm fetch-spotify --apply    # also patch content.ts to use Spotify data
 *   pnpm fetch-spotify --revert   # revert content.ts back to static data
 *
 * Prerequisites:
 *   1. Copy .env.example → .env
 *   2. Fill in SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_ARTIST_ID
 *   3. Run this script
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');

// ─── Load .env ───────────────────────────────────────────────────────────────

function loadEnv() {
  const envPath = resolve(ROOT, '.env');
  if (!existsSync(envPath)) return;
  const raw = readFileSync(envPath, 'utf-8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([^#=][^=]*?)\s*=\s*(.*)$/);
    if (!m) continue;
    const val = m[2].trim().replace(/^(['"])(.*)\1$/, '$2');
    if (!process.env[m[1].trim()]) process.env[m[1].trim()] = val;
  }
}

// ─── Spotify auth ────────────────────────────────────────────────────────────

async function getToken(clientId: string, clientSecret: string): Promise<string> {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });
  if (!res.ok) throw new Error(`Spotify auth failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

// ─── Spotify response types ───────────────────────────────────────────────────

interface SpotifyImage {
  url: string;
  width: number;
  height: number;
}
interface SpotifyAlbum {
  id: string;
  name: string;
  album_type: string; // "album" | "single" | "compilation"
  release_date: string;
  total_tracks: number;
  images: SpotifyImage[];
}
interface SpotifyTrack {
  id: string;
  track_number: number;
  name: string;
  duration_ms: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function toDuration(ms: number) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * Best-effort mapping of Spotify's album_type → our Release type.
 * Spotify doesn't have a dedicated EP type; EPs are usually returned
 * as album_type="album" with ≤6 tracks, or album_type="single" with 2–6 tracks.
 */
function toReleaseType(albumType: string, totalTracks: number): string {
  if (albumType === 'single') return totalTracks === 1 ? 'single' : 'EP';
  if (albumType === 'album') return totalTracks <= 6 ? 'EP' : 'album';
  return 'album';
}

// ─── Fetch ────────────────────────────────────────────────────────────────────

async function fetchDiscography(artistId: string, token: string) {
  const h = { Authorization: `Bearer ${token}` };

  // Spotify paginates at 50; fetch all pages
  let url: string | null =
    `https://api.spotify.com/v1/artists/${artistId}/albums` +
    `?include_groups=album,single&limit=50&market=US`;

  const albums: SpotifyAlbum[] = [];
  while (url) {
    const res = await fetch(url, { headers: h });
    if (!res.ok) throw new Error(`Albums fetch failed: ${res.status}`);
    const page = (await res.json()) as { items: SpotifyAlbum[]; next: string | null };
    albums.push(...page.items);
    url = page.next;
  }

  const releases = [];

  for (const album of albums) {
    const type = toReleaseType(album.album_type, album.total_tracks);
    const icon = type === 'album' ? '💿' : type === 'EP' ? '📀' : '🎵';
    console.log(`  ${icon} ${album.name} (${type}, ${album.total_tracks} tracks)`);

    const tracksRes = await fetch(
      `https://api.spotify.com/v1/albums/${album.id}/tracks?limit=50`,
      { headers: h },
    );
    if (!tracksRes.ok) throw new Error(`Tracks fetch failed for ${album.name}: ${tracksRes.status}`);
    const { items: tracks } = (await tracksRes.json()) as { items: SpotifyTrack[] };

    // For single-track singles, embed by track ID for a compact player
    const isSingleTrack = type === 'single' && tracks.length === 1;
    const spotifyId = isSingleTrack ? tracks[0].id : album.id;
    const spotifyType = isSingleTrack ? 'track' : 'album';

    releases.push({
      slug: toSlug(album.name),
      title: album.name,
      type,
      year: parseInt(album.release_date.split('-')[0]),
      coverImage: album.images[0]?.url ?? '',
      description: '', // fill in manually in content.ts
      longDescription: '', // fill in manually in content.ts
      spotifyId,
      spotifyType,
      appleMusicUrl: '', // TODO
      youtubeId: '', // TODO
      tracks: tracks.map((t) => ({
        number: t.track_number,
        title: t.name,
        duration: toDuration(t.duration_ms),
      })),
      credits: [], // fill in manually in content.ts
    });
  }

  return releases;
}

// ─── Patch content.ts ─────────────────────────────────────────────────────────

const CONTENT_PATH = resolve(ROOT, 'src/data/content.ts');
const START_MARKER = '// SPOTIFY:START';
const END_MARKER = '// SPOTIFY:END';

function patchContentTs(mode: 'apply' | 'revert') {
  const content = readFileSync(CONTENT_PATH, 'utf-8');

  if (!content.includes(START_MARKER) || !content.includes(END_MARKER)) {
    console.error(
      '⚠️  Could not find // SPOTIFY:START / // SPOTIFY:END markers in content.ts.\n' +
        '   These markers should wrap the `export const releases` block.',
    );
    return;
  }

  const before = content.indexOf(START_MARKER);
  const after = content.indexOf(END_MARKER) + END_MARKER.length;
  const prefix = content.slice(0, before);
  const suffix = content.slice(after);

  let replacement: string;

  if (mode === 'apply') {
    replacement =
      `${START_MARKER}\n` +
      `// Using Spotify-fetched data. Run \`pnpm fetch-spotify --revert\` to go back to static.\n` +
      `export { releases } from './spotify.generated';\n` +
      `${END_MARKER}`;
  } else {
    // revert — read static block from spotify.generated.ts backup isn't needed;
    // just restore the marker with a note. The user should `git checkout` if needed.
    replacement =
      `${START_MARKER}\n` +
      `// Static fallback — run \`pnpm fetch-spotify --apply\` to use Spotify data.\n` +
      `export { releases as _unused } from './spotify.generated'; // keep TS happy\n` +
      `export const releases = staticReleases;\n` +
      `${END_MARKER}`;
    console.log(
      '⚠️  Revert wrote a stub. For a clean revert, run:\n' +
        '   git checkout src/data/content.ts',
    );
    return; // let user use git for clean revert
  }

  writeFileSync(CONTENT_PATH, prefix + replacement + suffix, 'utf-8');
  console.log(`✅ Patched src/data/content.ts → now uses Spotify data.`);
  console.log(`   To revert: git checkout src/data/content.ts`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const artistId = process.env.SPOTIFY_ARTIST_ID;
  const apply = process.argv.includes('--apply');
  const revert = process.argv.includes('--revert');

  if (revert) {
    patchContentTs('revert');
    return;
  }

  if (!clientId || !clientSecret || !artistId) {
    console.error(
      `❌  Missing environment variables. Copy .env.example → .env and fill in:

    SPOTIFY_CLIENT_ID=...
    SPOTIFY_CLIENT_SECRET=...
    SPOTIFY_ARTIST_ID=...    ← from open.spotify.com/artist/<ID>
`,
    );
    process.exit(1);
  }

  console.log('🔐 Authenticating with Spotify…');
  const token = await getToken(clientId, clientSecret);

  console.log(`🎵 Fetching discography for artist ${artistId}…`);
  const releases = await fetchDiscography(artistId, token);

  // ── Write generated file ────────────────────────────────────────────────────
  const outPath = resolve(ROOT, 'src/data/spotify.generated.ts');
  const output = [
    `// AUTO-GENERATED — do not edit manually.`,
    `// Run: pnpm fetch-spotify`,
    `// Last synced: ${new Date().toISOString()}`,
    ``,
    `import type { Release } from './types';`,
    ``,
    `export const releases: Release[] = ${JSON.stringify(releases, null, 2)};`,
    ``,
  ].join('\n');

  writeFileSync(outPath, output, 'utf-8');
  console.log(`\n✅ Written: src/data/spotify.generated.ts (${releases.length} releases)`);
  console.log(`   Note: fill in \`description\`, \`longDescription\`, and \`credits\` manually.`);

  // ── Optionally patch content.ts ─────────────────────────────────────────────
  if (apply) {
    patchContentTs('apply');
  } else {
    console.log(`
To activate Spotify data, run:
  pnpm fetch-spotify --apply

To revert to static data at any time:
  git checkout src/data/content.ts
`);
  }
}

main().catch((err) => {
  console.error('❌', err.message);
  process.exit(1);
});
