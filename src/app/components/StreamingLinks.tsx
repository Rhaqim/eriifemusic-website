import { useTranslation } from 'react-i18next';
import { streamingPlatforms } from '../../data/content';

interface StreamingLinksProps {
  className?: string;
}

export function StreamingLinks({ className = '' }: StreamingLinksProps) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <p className="text-xs text-parchment/50 uppercase tracking-wider mb-3">
        {t('common.streaming_links')}
      </p>
      <div className="flex flex-wrap gap-2">
        {streamingPlatforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-warm-charcoal border border-border hover:border-burnished-bronze text-sm text-parchment hover:text-burnished-bronze transition-colors"
          >
            {platform.name}
          </a>
        ))}
      </div>
    </div>
  );
}

