import { useState } from 'react';
import { ReleaseCard } from '../components/ReleaseCard';

type ReleaseType = 'all' | 'album' | 'EP' | 'single' | 'live';

export function Music() {
  const [filter, setFilter] = useState<ReleaseType>('all');

  const releases = [
    { slug: 'tender-hearts', title: 'Tender Hearts', type: 'EP' as const, year: 2026, coverImage: '', description: 'Five songs about love, memory, and finding softness.' },
    { slug: 'quiet-devotion', title: 'Quiet Devotion', type: 'single' as const, year: 2026, coverImage: '', description: 'A meditation on faith and closeness.' },
    { slug: 'beloved', title: 'Beloved', type: 'single' as const, year: 2025, coverImage: '', description: 'An ode to the ones we carry with us.' },
    { slug: 'letters-home', title: 'Letters Home', type: 'album' as const, year: 2025, coverImage: '', description: 'Songs written during a season of reflection.' },
    { slug: 'morning-light', title: 'Morning Light', type: 'single' as const, year: 2025, coverImage: '', description: 'About hope arriving quietly, like dawn.' },
    { slug: 'live-at-terra', title: 'Live at Terra Kulture', type: 'live' as const, year: 2024, coverImage: '', description: 'An intimate evening of songs and stories.' }
  ];

  const filteredReleases = filter === 'all' ? releases : releases.filter(release => release.type === filter);

  const filters: { label: string; value: ReleaseType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Albums', value: 'album' },
    { label: 'EPs', value: 'EP' },
    { label: 'Singles', value: 'single' }
  ];

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
            Music
          </h1>
          <p className="text-xl text-parchment/80 max-w-2xl">
            A collection of songs written like letters—about love, faith, memory, and the tender parts of being human.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-4 py-2 rounded text-sm transition-colors uppercase tracking-wider ${
                  filter === value
                    ? 'bg-oxblood text-soft-ivory'
                    : 'bg-warm-charcoal text-parchment/70 hover:bg-cocoa-brown border border-border hover:border-burnished-bronze/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {filteredReleases.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReleases.map(release => (
                <ReleaseCard key={release.slug} {...release} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-parchment/60 text-lg mb-4">No {filter === 'all' ? 'releases' : filter + 's'} found.</p>
              {filter !== 'all' && (
                <button
                  onClick={() => setFilter('all')}
                  className="text-burnished-bronze hover:text-soft-ivory transition-colors"
                >
                  View all releases →
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
