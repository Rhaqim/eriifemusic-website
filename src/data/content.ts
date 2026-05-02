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
} from "./types";

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
export { releases } from "./spotify.generated";
// SPOTIFY:END

// ------------------------------------------------------------
// SHOWS
// TODO: Replace ticketUrl values with real ticketing URLs.
// ------------------------------------------------------------

export const shows: Show[] = [
	{
		id: "show-2026-london-aug",
		title: "Love Is a Happy Place",
		date: "2026-08-23",
		city: "London",
		venue: "Colours Hoxton",
		venueMapUrl:
			"https://maps.google.com/?q=Colours+Hoxton,+54+Hoxton+Square,+London+N1+6PB",
		country: "United Kingdom",
		countryCode: "GB",
		ticketUrl:
			"https://dice.fm/event/dk2x66-love-is-a-happy-place-with-eri-ife-23rd-aug-colours-hoxton-london-tickets",
		status: "upcoming",
		doorsTime: "18:30",
		showTime: "19:00",
		priceRange: "£30",
	},
];

// ------------------------------------------------------------
// ------------------------------------------------------------
// FAN NOTES (approved / featured ones displayed on the site)
// ------------------------------------------------------------

export const fanNotes: FanNote[] = [
	{
		id: "1",
		message:
			"Little dreamer isn't little anymore. Lovely music always Eri Ife🎉",
		name: "Fidelis",
		city: "Lagos",
		country: "NG",
		date: "2026-04-20",
		status: "featured",
	},
	{
		id: "2",
		message: "Your music feels like a warm hug 💗💗",
		name: "Tani S",
		city: "London",
		country: "GB",
		date: "2026-04-18",
		status: "featured",
	},
	{
		id: "3",
		message:
			"These are such beautiful and heartwarming songs of worship. Thank you for sharing with us.",
		name: "Israel",
		city: "Ibadan",
		country: "NG",
		date: "2026-04-12",
		status: "approved",
	},
	{
		id: "4",
		message: "Bless up my G. We adore your talent.",
		name: "Qudus",
		city: "Lagos",
		country: "NG",
		date: "2024-01-15",
		status: "approved",
	},
];

// ------------------------------------------------------------
// PRESS
// ------------------------------------------------------------

export const pressBios: PressBio[] = [
	{
		length: "short",
		text: "Eri Ife is a Nigerian singer-songwriter whose music feels like reading letters from a close friend. Drawing from R&B, soul, and folk traditions, his songs explore love, faith, memory, and the tender parts of being human.",
	},
	{
		length: "medium",
		text: `Eri Ife is a Nigerian-born, UK-based artist whose music feels like a letter you weren’t expecting but needed. Blending Afro-soul, alternative R&B and soft, melodic storytelling, he writes with quiet honesty about love, faith and the inner life.

His work is intimate and reflective, drawing listeners in with emotion that feels thoughtful and sincere. Whether he’s singing to his God and Father, a partner, or reflecting on growth, each song carries a sense of being addressed to someone real.`,
	},
	{
		length: "long",
		text: `Eri Ife is a Nigerian-born, UK-based artist whose music is rooted in love & connection. Raised in Ibadan and now creating from the diaspora, he draws from Afro-soul, alternative R&B and a broader palette of contemporary African sound, shaping songs that feel thoughtful without losing their warmth.

His writing often centres on love, faith and the inner life. There’s a conversational tilt to his music, as though he’s speaking directly to someone rather than performing to them. That perspective has become a defining thread in his work, giving his songs a sense of closeness that listeners tend to hold onto.

Alongside his music, Eri Ife’s background as a lawyer adds another layer to how he sees the world and tells stories. There’s structure in his writing, a sense of care in how thoughts are formed and expressed. As his sound continues to evolve, that balance between intellect, faith and emotion remains at the centre of his work, shaping a catalogue that feels grounded, personal and quietly distinct.`,
	},
];

export const pressContacts: PressContact[] = [
	{ title: "Bookings", email: "eriifeesq@gmail.com" },
	{ title: "Press", email: "iconicstuffonly@gmail.com" },
	{ title: "General", email: "iconicstuffonly@gmail.com" },
];

// ------------------------------------------------------------
// SOCIAL & STREAMING
// TODO: Replace all placeholder URLs with real ones.
// ------------------------------------------------------------

export const socialLinks: SocialLink[] = [
	{
		platform: "instagram",
		url: "https://instagram.com/eriifemusic",
		handle: "@eriifemusic",
	},
	{
		platform: "twitter",
		url: "https://twitter.com/eriifemusic",
		handle: "@eriifemusic",
	},
	{
		platform: "youtube",
		url: "https://youtube.com/@eriifemusic",
		handle: "@eriifemusic",
	},
	{
		platform: "tiktok",
		url: "https://tiktok.com/@eriifemusic",
		handle: "@eriifemusic",
	},
];

export const streamingPlatforms: StreamingPlatform[] = [
	{
		id: "spotify",
		name: "Spotify",
		url: "https://open.spotify.com/artist/73HQr5WapR3nN1hP2ZTDJg",
	},
	{
		id: "apple-music",
		name: "Apple Music",
		url: "https://music.apple.com/ng/artist/eri-ife/1251159944",
	},
	{
		id: "youtube",
		name: "YouTube Music",
		url: "https://youtube.com/@eriifemusic",
	},
	{
		id: "audiomack",
		name: "Audiomack",
		url: "https://audiomack.com/eriifemusic",
	},
	// { id: 'boomplay', name: 'Boomplay', url: 'https://www.boomplay.com/artists/eriifemusic' },
];

// Derived convenience exports — single source of truth
export const spotifyUrl = streamingPlatforms.find(p => p.id === "spotify")!.url;
