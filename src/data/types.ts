// ============================================================
// Content types for Eri Ife website.
// All shapes are designed for easy migration to a REST / GraphQL
// backend (Cloudflare Workers + D1, or any headless CMS).
// ============================================================

export type ReleaseType = 'single' | 'EP' | 'album' | 'live';
export type ShowStatus = 'upcoming' | 'sold-out' | 'past' | 'cancelled';
export type LetterCategory = 'Reflections' | 'Behind the Songs' | 'Devotion' | 'Notes';
export type FanNoteStatus = 'pending' | 'approved' | 'featured';
export type BioLength = 'short' | 'medium' | 'long';
export type SupportedLocale = 'en' | 'fr' | 'yo';
export type SocialPlatform =
  | 'instagram'
  | 'twitter'
  | 'youtube'
  | 'tiktok'
  | 'facebook'
  | 'spotify'
  | 'soundcloud';

// ------------------------------------------------------------
// Music
// ------------------------------------------------------------

export interface Track {
  number: number;
  title: string;
  duration: string;
  /** Optional Spotify track ID for individual track embeds */
  spotifyTrackId?: string;
}

export interface Release {
  slug: string;
  title: string;
  type: ReleaseType;
  year: number;
  /** Path to cover image asset, or empty string while pending */
  coverImage: string;
  description: string;
  longDescription?: string;
  tracks?: Track[];
  credits?: string[];

  // Streaming IDs — replace with real values when available
  /** Spotify album or track ID, e.g. "4aawyAB9vmqN3uQ7FjRGTy" */
  spotifyId?: string;
  /** Whether the spotifyId refers to an album or a single track */
  spotifyType?: 'album' | 'track';
  appleMusicUrl?: string;
  /** YouTube video or playlist ID */
  youtubeId?: string;
  soundcloudUrl?: string;
}

// ------------------------------------------------------------
// Live shows
// ------------------------------------------------------------

export interface Show {
  id: string;
  /** ISO 8601 date: "YYYY-MM-DD" */
  date: string;
  city: string;
  venue: string;
  country: string;
  /** ISO 3166-1 alpha-2 country code, e.g. "NG", "GB" */
  countryCode: string;
  ticketUrl?: string;
  status: ShowStatus;
  /** Local 24-hour time the doors open, e.g. "19:00" */
  doorsTime?: string;
  /** Local 24-hour time the show starts, e.g. "20:00" */
  showTime?: string;
  supportAct?: string;
  priceRange?: string;
  notes?: string;
}

// ------------------------------------------------------------
// Letters (blog / essays)
// ------------------------------------------------------------

export interface Letter {
  slug: string;
  title: string;
  category: LetterCategory;
  /** ISO 8601 date: "YYYY-MM-DD" */
  date: string;
  excerpt: string;
  /** Markdown / rich text body — populated when reading individual letter */
  body?: string;
  readTime: number;
  coverImage?: string;
}

// ------------------------------------------------------------
// Fan notes
// ------------------------------------------------------------

export interface FanNote {
  id: string;
  message: string;
  name: string;
  city?: string;
  /** ISO 3166-1 alpha-2 */
  country?: string;
  /** ISO 8601 date */
  date: string;
  status: FanNoteStatus;
}

// ------------------------------------------------------------
// Press
// ------------------------------------------------------------

export interface PressBio {
  length: BioLength;
  text: string;
}

export interface PressContact {
  title: string;
  name?: string;
  email: string;
  phone?: string;
}

// ------------------------------------------------------------
// Social & Streaming
// ------------------------------------------------------------

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  handle?: string;
}

export interface StreamingPlatform {
  id: string;
  name: string;
  url: string;
}

// ============================================================
// API / Form submission payloads
// These define the shape sent to future backend endpoints.
// When connecting to a backend, create API functions that POST
// these payloads to your Cloudflare Worker / API route.
// ============================================================

export interface NewsletterPayload {
  email: string;
  name?: string;
  /** BCP 47 language tag, e.g. "en", "fr", "yo" */
  locale: SupportedLocale;
  /** Which section triggered the signup, e.g. "home-hero" */
  source?: string;
}

export interface FanNotePayload {
  /** Max 280 characters */
  message: string;
  name: string;
  city?: string;
  country?: string;
  locale: SupportedLocale;
}

export interface BookingPayload {
  name: string;
  email: string;
  organization?: string;
  /** e.g. "private event", "festival", "venue", "corporate" */
  eventType?: string;
  /** Rough ISO 8601 date or freeform text */
  eventDate?: string;
  location?: string;
  budget?: string;
  message: string;
  locale: SupportedLocale;
}

export interface PressPayload {
  name: string;
  email: string;
  publication?: string;
  message: string;
  locale: SupportedLocale;
}
