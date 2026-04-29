interface SpotifyEmbedProps {
  /** Spotify album or track ID */
  spotifyId: string;
  type?: 'album' | 'track';
  /** Height of the embed in pixels. Default: 352 for albums, 152 for tracks */
  height?: number;
  className?: string;
}

/**
 * Renders a Spotify embed iframe.
 * To show the dark theme, we pass `theme=0`.
 * The warm, dark palette of the Spotify embed blends with the site's espresso theme.
 */
export function SpotifyEmbed({
  spotifyId,
  type = 'album',
  height,
  className = '',
}: SpotifyEmbedProps) {
  if (!spotifyId) return null;

  const defaultHeight = type === 'album' ? 352 : 152;
  const embedHeight = height ?? defaultHeight;
  const src = `https://open.spotify.com/embed/${type}/${spotifyId}?utm_source=generator&theme=0`;

  return (
    <iframe
      src={src}
      width="100%"
      height={embedHeight}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify player"
      className={`rounded ${className}`}
    />
  );
}
