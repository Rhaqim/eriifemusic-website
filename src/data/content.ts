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
  Letter,
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
// ------------------------------------------------------------

export const releases: Release[] = [
  {
    slug: 'tender-hearts',
    title: 'Tender Hearts',
    type: 'EP',
    year: 2026,
    coverImage: '',
    description: 'Five songs about love, memory, and finding softness.',
    longDescription:
      'Written during a season of learning to hold tenderness and strength at the same time, Tender Hearts is a collection of five quiet confessions. Recorded in Lagos with afternoon light coming through the windows.',
    spotifyId: '', // TODO: replace with real Spotify album ID
    spotifyType: 'album',
    appleMusicUrl: '', // TODO: replace with Apple Music album URL
    youtubeId: '', // TODO: replace with YouTube playlist/video ID
    tracks: [
      { number: 1, title: 'Opening Prayer', duration: '2:34' },
      { number: 2, title: 'Tender Hearts', duration: '3:48' },
      { number: 3, title: 'Beloved', duration: '4:12' },
      { number: 4, title: 'Quiet Devotion', duration: '3:56' },
      { number: 5, title: 'Closing Words', duration: '3:02' },
    ],
    credits: [
      'Written and performed by Eri Ife',
      'Produced by Daniel Omolade',
      'Mixed by Sarah Chen',
      'Mastered by James Wright',
    ],
  },
  {
    slug: 'quiet-devotion',
    title: 'Quiet Devotion',
    type: 'single',
    year: 2026,
    coverImage: '',
    description: 'A meditation on faith and closeness.',
    spotifyId: '', // TODO
    spotifyType: 'track',
    tracks: [{ number: 1, title: 'Quiet Devotion', duration: '3:56' }],
  },
  {
    slug: 'beloved',
    title: 'Beloved',
    type: 'single',
    year: 2025,
    coverImage: '',
    description: 'An ode to the ones we carry with us.',
    spotifyId: '', // TODO
    spotifyType: 'track',
    tracks: [{ number: 1, title: 'Beloved', duration: '4:12' }],
  },
  {
    slug: 'letters-home',
    title: 'Letters Home',
    type: 'album',
    year: 2025,
    coverImage: '',
    description: 'Songs written during a season of reflection.',
    longDescription:
      'An eleven-song collection exploring the spaces between faith, love, and memory. Songs written like letters—for the people who shaped us and the places we return to.',
    spotifyId: '', // TODO
    spotifyType: 'album',
    tracks: [
      { number: 1, title: 'Homecoming', duration: '3:22' },
      { number: 2, title: 'Letters Home', duration: '4:05' },
      { number: 3, title: 'Mother Tongue', duration: '3:47' },
      { number: 4, title: 'River', duration: '4:31' },
      { number: 5, title: 'Sunday Morning', duration: '3:18' },
    ],
    credits: [
      'Written and performed by Eri Ife',
      'Produced by Tobi Adeyemi',
      'Mixed by Aisha Balogun',
      'Mastered by James Wright',
    ],
  },
  {
    slug: 'morning-light',
    title: 'Morning Light',
    type: 'single',
    year: 2025,
    coverImage: '',
    description: 'About hope arriving quietly, like dawn.',
    spotifyId: '', // TODO
    spotifyType: 'track',
    tracks: [{ number: 1, title: 'Morning Light', duration: '3:41' }],
  },
  {
    slug: 'live-at-terra',
    title: 'Live at Terra Kulture',
    type: 'live',
    year: 2024,
    coverImage: '',
    description: 'An intimate evening of songs and stories.',
    youtubeId: '', // TODO: replace with YouTube video/playlist ID
  },
];

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
// LETTERS
// ------------------------------------------------------------

export const letters: Letter[] = [
  {
    slug: 'on-writing-love-songs',
    title: 'On Writing Love Songs',
    category: 'Reflections',
    date: '2026-04-15',
    excerpt:
      'I used to think love songs had to be complicated. That they needed metaphors stacked on metaphors, hidden meanings, coded language. But the longer I write, the more I realize that simplicity holds more truth.',
    readTime: 4,
  },
  {
    slug: 'notes-from-the-studio',
    title: 'Notes from the Studio',
    category: 'Behind the Songs',
    date: '2026-04-01',
    excerpt:
      'We recorded Tender Hearts in a small room in Lagos, with afternoon light coming through the windows. There was something about the warmth of that space that shaped every note.',
    readTime: 3,
  },
  {
    slug: 'on-faith-and-softness',
    title: 'On Faith and Softness',
    category: 'Devotion',
    date: '2026-03-20',
    excerpt:
      'Softness is not weakness. This is something I keep coming back to—in my faith, in my music, in how I move through the world. Tenderness is an act of courage.',
    readTime: 5,
  },
  {
    slug: 'the-making-of-beloved',
    title: 'The Making of Beloved',
    category: 'Behind the Songs',
    date: '2026-02-14',
    excerpt:
      'This song started as a voice memo at 2am. I was thinking about the people we carry with us and the ones who shape us even when far away.',
    readTime: 3,
  },
];

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
  { title: 'Bookings', email: 'booking@eriife.com' },
  { title: 'Press', email: 'press@eriife.com' },
  { title: 'General', email: 'hello@eriife.com' },
];

// ------------------------------------------------------------
// SOCIAL & STREAMING
// TODO: Replace all placeholder URLs with real ones.
// ------------------------------------------------------------

export const socialLinks: SocialLink[] = [
  { platform: 'instagram', url: 'https://instagram.com/eriife', handle: '@eriife' },
  { platform: 'twitter', url: 'https://twitter.com/eriife', handle: '@eriife' },
  { platform: 'youtube', url: 'https://youtube.com/@eriife', handle: '@eriife' },
  { platform: 'tiktok', url: 'https://tiktok.com/@eriife', handle: '@eriife' },
];

export const streamingPlatforms: StreamingPlatform[] = [
  { id: 'spotify', name: 'Spotify', url: 'https://open.spotify.com/artist/REPLACE_ME' },
  { id: 'apple-music', name: 'Apple Music', url: 'https://music.apple.com/artist/REPLACE_ME' },
  { id: 'youtube', name: 'YouTube Music', url: 'https://youtube.com/@eriife' },
  { id: 'audiomack', name: 'Audiomack', url: 'https://audiomack.com/eriife' },
  { id: 'boomplay', name: 'Boomplay', url: 'https://www.boomplay.com/artists/REPLACE_ME' },
];
