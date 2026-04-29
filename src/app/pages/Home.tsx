import { Link } from 'react-router';
import { Button } from '../components/Button';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { ReleaseCard } from '../components/ReleaseCard';
import { LetterCard } from '../components/LetterCard';
import { ShowCard } from '../components/ShowCard';
import { StreamingLinks } from '../components/StreamingLinks';
import { FanNotesSection } from '../components/FanNotesSection';
import { Play } from 'lucide-react';

export function Home() {
  const releases = [
    { slug: 'tender-hearts', title: 'Tender Hearts', type: 'EP' as const, year: 2026, coverImage: '', description: 'Five songs about love, memory, and finding softness.' },
    { slug: 'quiet-devotion', title: 'Quiet Devotion', type: 'single' as const, year: 2026, coverImage: '', description: 'A meditation on faith and closeness.' },
    { slug: 'letters-home', title: 'Letters Home', type: 'album' as const, year: 2025, coverImage: '', description: 'Songs written during a season of reflection.' }
  ];

  const letters = [
    {
      slug: 'on-writing-love-songs',
      title: 'On Writing Love Songs',
      category: 'Reflections',
      date: '2026-04-15',
      excerpt: 'I used to think love songs had to be complicated. That they needed metaphors stacked on metaphors, hidden meanings, coded language. But the longer I write, the more I realize that simplicity holds more truth.',
      readTime: 4
    },
    {
      slug: 'notes-from-the-studio',
      title: 'Notes from the Studio',
      category: 'Behind the Songs',
      date: '2026-04-01',
      excerpt: 'We recorded Tender Hearts in a small room in Lagos, with afternoon light coming through the windows. There was something about the warmth of that space that shaped every note.',
      readTime: 3
    }
  ];

  const upcomingShows = [
    {
      date: '2026-06-15',
      city: 'Lagos',
      venue: 'Terra Kulture',
      country: 'Nigeria',
      ticketUrl: '#',
      status: 'upcoming' as const
    }
  ];

  const fanNotes = [
    {
      id: '1',
      message: 'Your songs found me in a quiet season and stayed.',
      name: 'Adanna',
      city: 'Abuja',
      date: '2026-04-20'
    },
    {
      id: '2',
      message: 'This music feels like a letter I did not know I needed.',
      name: 'Marcus',
      city: 'London',
      date: '2026-04-18'
    },
    {
      id: '3',
      message: 'Thank you for making softness feel strong.',
      name: 'Chiamaka',
      city: 'Lagos',
      date: '2026-04-15'
    },
    {
      id: '4',
      message: 'There is so much warmth in these songs.',
      name: 'Samuel',
      city: 'Accra',
      date: '2026-04-12'
    },
    {
      id: '5',
      message: 'Your music sounds like honesty.',
      name: 'Zara',
      city: 'Toronto',
      date: '2026-04-10'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-charcoal/40 via-transparent to-deep-espresso"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="font-['Crimson_Pro'] text-5xl md:text-7xl text-soft-ivory mb-6">
                Songs written like letters
              </h1>
              <p className="text-xl text-parchment/80 mb-10 leading-relaxed">
                Warm music for open hearts. Romantic, reflective songs about love, faith, memory, and becoming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button variant="primary" size="lg">
                  <Play size={20} fill="currentColor" />
                  Listen Now
                </Button>
                <Button variant="secondary" size="lg">
                  Read a Letter
                </Button>
              </div>
              <StreamingLinks />
            </div>

            <div className="aspect-[4/5] rounded bg-gradient-to-br from-cocoa-brown via-smoky-plum/50 to-oxblood/60 shadow-2xl"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory mb-8">
              A note from Eri
            </h2>
            <div className="text-lg text-parchment/80 space-y-6 leading-relaxed">
              <p>
                I've been thinking a lot about what it means to create music that feels like home. Not just something you listen to—but something you return to. A place where tenderness is welcome, where honesty matters more than hype, where the small moments get their space.
              </p>
              <p>
                These songs are written like letters. Some to people I love. Some to God. Some to versions of myself I'm still getting to know. I hope they meet you wherever you are.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-8 text-burnished-bronze hover:text-soft-ivory transition-colors">
              Read more about the music →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-deep-espresso">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory mb-2">
                Music
              </h2>
              <p className="text-parchment/70">A collection of songs, stories, and quiet moments.</p>
            </div>
            <Link to="/music" className="hidden md:block text-burnished-bronze hover:text-soft-ivory transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {releases.map(release => (
              <ReleaseCard key={release.slug} {...release} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory mb-2">
                Letters
              </h2>
              <p className="text-parchment/70">Thoughts, stories, and notes from the journey.</p>
            </div>
            <Link to="/letters" className="hidden md:block text-burnished-bronze hover:text-soft-ivory transition-colors">
              Read all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {letters.map(letter => (
              <LetterCard key={letter.slug} {...letter} />
            ))}
          </div>
        </div>
      </section>

      <FanNotesSection notes={fanNotes} />

      {upcomingShows.length > 0 && (
        <section className="py-24 bg-warm-charcoal">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory mb-12">
              Upcoming Shows
            </h2>
            <div className="max-w-3xl space-y-4">
              {upcomingShows.map((show, index) => (
                <ShowCard key={index} {...show} />
              ))}
            </div>
            <Link to="/live" className="inline-block mt-8 text-burnished-bronze hover:text-soft-ivory transition-colors">
              View all shows →
            </Link>
          </div>
        </section>
      )}

      <section className="py-24 bg-deep-espresso">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
