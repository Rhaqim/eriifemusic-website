import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import type { Show } from '../../data/types';

type ShowCardProps = Show;

export function ShowCard({
  date,
  city,
  venue,
  country,
  ticketUrl,
  status = 'upcoming',
  doorsTime,
  showTime,
  priceRange,
  supportAct,
}: ShowCardProps) {
  const { t, i18n } = useTranslation();

  const showDate = new Date(date);
  const formattedDate = showDate.toLocaleDateString(i18n.language, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-warm-charcoal rounded-lg p-6 border border-border hover:border-burnished-bronze/40 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <time className="text-sm text-burnished-bronze font-medium block mb-2 uppercase tracking-wider">
            {formattedDate}
          </time>
          <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-1">{venue}</h3>
          <p className="text-sm text-parchment/70">
            {city}{country && `, ${country}`}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
            {doorsTime && (
              <span className="text-xs text-parchment/50">
                {t('live.doors')} {doorsTime}
              </span>
            )}
            {showTime && (
              <span className="text-xs text-parchment/50">
                {t('live.show_starts')} {showTime}
              </span>
            )}
            {priceRange && (
              <span className="text-xs text-parchment/50">{priceRange}</span>
            )}
          </div>

          {supportAct && (
            <p className="text-xs text-parchment/40 mt-1">
              {t('live.support')} {supportAct}
            </p>
          )}
        </div>

        <div className="flex-shrink-0">
          {status === 'sold-out' ? (
            <span className="px-4 py-2 rounded bg-cocoa-brown text-parchment/60 text-sm">
              {t('live.sold_out')}
            </span>
          ) : status === 'cancelled' ? (
            <span className="px-4 py-2 rounded bg-cocoa-brown text-parchment/40 text-sm line-through">
              {t('live.cancelled')}
            </span>
          ) : ticketUrl && ticketUrl !== '#' ? (
            <Button
              variant="primary"
              size="md"
              onClick={() => window.open(ticketUrl, '_blank')}
            >
              {t('live.get_tickets')}
            </Button>
          ) : (
            <span className="px-4 py-2 rounded bg-warm-charcoal border border-border text-parchment/40 text-sm">
              {t('live.get_tickets')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

