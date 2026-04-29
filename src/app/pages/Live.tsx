import { ShowCard } from '../components/ShowCard';
import { NewsletterSignup } from '../components/NewsletterSignup';

export function Live() {
  const upcomingShows = [
    {
      date: '2026-06-15',
      city: 'Lagos',
      venue: 'Terra Kulture',
      country: 'Nigeria',
      ticketUrl: '#',
      status: 'upcoming' as const
    },
    {
      date: '2026-07-20',
      city: 'London',
      venue: 'The Jazz Café',
      country: 'UK',
      ticketUrl: '#',
      status: 'upcoming' as const
    }
  ];

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
            Live Shows
          </h1>
          <p className="text-xl text-parchment/80 max-w-2xl">
            Intimate evenings of songs, stories, and quiet moments together.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-8">
            Upcoming Shows
          </h2>
          {upcomingShows.length > 0 ? (
            <div className="max-w-3xl space-y-4 mb-12">
              {upcomingShows.map((show, index) => (
                <ShowCard key={index} {...show} />
              ))}
            </div>
          ) : (
            <div className="max-w-3xl text-center py-12 mb-12">
              <p className="text-parchment/60 text-lg">No upcoming shows at this time.</p>
              <p className="text-parchment/50 text-sm mt-2">Check back soon for new dates.</p>
            </div>
          )}

          <div className="max-w-3xl bg-warm-charcoal rounded p-8 border border-border">
            <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-3">
              Book Eri for a Performance
            </h3>
            <p className="text-parchment/80 mb-6">
              Interested in booking Eri Ife for a private event or intimate gathering?
            </p>
            <a href="mailto:booking@eriife.com" className="inline-block px-6 py-3 rounded bg-oxblood text-soft-ivory hover:bg-[#7D4744] transition-colors">
              Contact Booking
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
