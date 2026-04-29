interface StreamingLinksProps {
  className?: string;
}

export function StreamingLinks({ className = '' }: StreamingLinksProps) {
  const platforms = ['Spotify', 'Apple Music', 'YouTube', 'SoundCloud'];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {platforms.map((platform) => (
        <a
          key={platform}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-warm-charcoal border border-border hover:border-burnished-bronze text-sm text-parchment hover:text-burnished-bronze transition-colors"
        >
          {platform}
        </a>
      ))}
    </div>
  );
}
