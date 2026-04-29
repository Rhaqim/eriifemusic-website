import { Button } from './Button';

interface ShowCardProps {
  date: string;
  city: string;
  venue: string;
  country?: string;
  ticketUrl?: string;
  status?: 'upcoming' | 'sold-out';
}

export function ShowCard({ date, city, venue, country, ticketUrl, status = 'upcoming' }: ShowCardProps) {
  const showDate = new Date(date);
  const formattedDate = showDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="bg-warm-charcoal rounded p-6 border border-border hover:border-burnished-bronze/50 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <time className="text-sm text-burnished-bronze font-medium block mb-3 uppercase tracking-wider">{formattedDate}</time>
          <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-1">{venue}</h3>
          <p className="text-sm text-parchment/70">{city}{country && `, ${country}`}</p>
        </div>
        <div>
          {status === 'sold-out' ? (
            <span className="px-4 py-2 rounded bg-cocoa-brown text-parchment/60 text-sm">Sold Out</span>
          ) : ticketUrl ? (
            <Button variant="primary" size="md" onClick={() => window.open(ticketUrl, '_blank')}>
              Get Tickets
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
