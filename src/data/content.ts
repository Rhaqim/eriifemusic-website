// ============================================================
// Static content for Eri Ife website.
//
// When connecting to a backend:
// - Replace each exported const with an async fetch/API call
//   returning the same type shape.
// - Spotify/Apple Music/YouTube IDs are marked with TODO.
// ============================================================

import type {
  Release,
  Show,
  FanNote,
  PressBio,
  PressContact,
  SocialLink,
  StreamingPlatform,
} from './types';

// ------------------------------------------------------------
// RELEASES
// TODO: Replace spotifyId, appleMusicUrl, youtubeId, soundcloudUrl
//       with real platform IDs/URLs before launch.
//
// To auto-populate from Spotify:
//   1. Copy .env.example → .env and fill in credentials
//   2. pnpm fetch-spotify           ← generates src/data/spotify.generated.ts
//   3. pnpm fetch-spotify --apply   ← switches this block to use that file
//   To revert: git checkout src/data/content.ts
// ------------------------------------------------------------

// SPOTIFY:START
// Using Spotify-fetched data. Run `pnpm fetch-spotify --revert` to go back to static.
export { releases } from './spotify.generated';
// SPOTIFY:END

// ------------------------------------------------------------
// SHOWS
// TODO: Replace ticketUrl values with real ticketing URLs.
// ------------------------------------------------------------

export const shows: Show[] = [
  {
    id: 'show-2026-lagos-jun',
    date: '2026-06-15',
    city: 'Lagos',
    venue: 'Terra Kulture Arena',
    country: 'Nigeria',
    countryCode: 'NG',
    ticketUrl: '#', // TODO: replace with real ticket link
    status: 'upcoming',
    doorsTime: '18:30',
    showTime: '19:30',
    priceRange: '₦10,000 – ₦25,000',
  },
  {
    id: 'show-2026-london-jul',
    date: '2026-07-20',
    city: 'London',
    venue: 'The Jazz Café',
    country: 'United Kingdom',
    countryCode: 'GB',
    ticketUrl: '#', // TODO
    status: 'upcoming',
    doorsTime: '19:00',
    showTime: '20:00',
    priceRange: '£15 – £25',
  },
  {
    id: 'show-2026-accra-aug',
    date: '2026-08-10',
    city: 'Accra',
    venue: "Alliance Française d'Accra",
    country: 'Ghana',
    countryCode: 'GH',
    ticketUrl: '#', // TODO
    status: 'upcoming',
    priceRange: 'GH₵ 80 – 150',
  },
];

// ------------------------------------------------------------
// ------------------------------------------------------------
// FAN NOTES (approved / featured ones displayed on the site)
// ------------------------------------------------------------

export const fanNotes: FanNote[] = [
  {
    id: '1',
    message: 'Your songs found me in a quiet season and stayed.',
    name: 'Adanna',
    city: 'Abuja',
    country: 'NG',
    date: '2026-04-20',
    status: 'featured',
  },
  {
    id: '2',
    message: 'This music feels like a letter I did not know I needed.',
    name: 'Marcus',
    city: 'London',
    country: 'GB',
    date: '2026-04-18',
    status: 'featured',
  },
  {
    id: '3',
    message: 'Thank you for making softness feel strong.',
    name: 'Chiamaka',
    city: 'Lagos',
    country: 'NG',
    date: '2026-04-15',
    status: 'approved',
  },
  {
    id: '4',
    message: 'There is so much warmth in these songs.',
    name: 'Samuel',
    city: 'Accra',
    country: 'GH',
    date: '2026-04-12',
    status: 'approved',
  },
  {
    id: '5',
    message: 'Your music sounds like honesty.',
    name: 'Zara',
    city: 'Toronto',
    country: 'CA',
    date: '2026-04-10',
    status: 'approved',
  },
];

// ------------------------------------------------------------
// PRESS
// ------------------------------------------------------------

export const pressBios: PressBio[] = [
  {
    length: 'short',
    text: 'Eri Ife is a Nigerian singer-songwriter whose music feels like reading letters from a close friend. Drawing from R&B, soul, and folk traditions, his songs explore love, faith, memory, and the tender parts of being human.',
  },
  {
    length: 'medium',
    text: 'Eri Ife is a Nigerian singer-songwriter whose music feels like reading letters from a close friend—intimate, reflective, and achingly honest. Born and raised in Lagos, he began sharing his work in 2023, releasing a series of singles and EPs that quickly resonated with listeners seeking something warmer, quieter, and more emotionally grounded. His music has been described as "a softer place to return to" and "songs that feel like home."',
  },
  {
    length: 'long',
    text: `Eri Ife is a Nigerian singer-songwriter whose music feels like reading letters from a close friend—intimate, reflective, and achingly honest. Drawing from R&B, soul, and folk traditions, his songs explore love, faith, memory, and the tender parts of being human.

Born and raised in Lagos, Eri grew up in a household where music was constant—gospel on Sunday mornings, Afrobeat in the evenings, and his mother's old soul records filling the quiet in between. He started writing songs as a teenager, using music as a way to process what he could not say out loud.

After years of writing in private, he began sharing his work in 2023, releasing a series of singles and EPs that quickly resonated with listeners seeking something warmer, quieter, and more emotionally grounded. His music has been described as "a softer place to return to" and "songs that feel like home."

Today, Eri continues to write from Lagos, crafting songs that balance vulnerability with strength, romance with realism, and faith with honest questioning.`,
  },
];

export const pressContacts: PressContact[] = [
  { title: 'Bookings', email: 'eriife@iconicstuff.africa' },
  { title: 'Press', email: 'iconicstuffonly@gmail.com' },
  { title: 'General', email: 'iconicstuffonly@gmail.com' },
];

// ------------------------------------------------------------
// SOCIAL & STREAMING
// TODO: Replace all placeholder URLs with real ones.
// ------------------------------------------------------------

export const socialLinks: SocialLink[] = [
  { platform: 'instagram', url: 'https://instagram.com/eriifemusic', handle: '@eriifemusic' },
  { platform: 'twitter', url: 'https://twitter.com/eriifemusic', handle: '@eriifemusic' },
  { platform: 'youtube', url: 'https://youtube.com/@eriifemusic', handle: '@eriifemusic' },
  { platform: 'tiktok', url: 'https://tiktok.com/@eriifemusic', handle: '@eriifemusic' },
];

export const streamingPlatforms: StreamingPlatform[] = [
  { id: 'spotify', name: 'Spotify', url: 'https://open.spotify.com/artist/73HQr5WapR3nN1hP2ZTDJg' },
  { id: 'apple-music', name: 'Apple Music', url: 'https://music.apple.com/ng/artist/eri-ife/1251159944' },
  { id: 'youtube', name: 'YouTube Music', url: 'https://youtube.com/@eriifemusic' },
  { id: 'audiomack', name: 'Audiomack', url: 'https://audiomack.com/eriifemusic' },
  // { id: 'boomplay', name: 'Boomplay', url: 'https://www.boomplay.com/artists/eriifemusic' },
];
