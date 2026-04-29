import { useState } from 'react';
import { LetterCard } from '../components/LetterCard';
import { NewsletterSignup } from '../components/NewsletterSignup';

type LetterCategory = 'all' | 'reflections' | 'behind-the-songs' | 'devotion';

export function Letters() {
  const [filter, setFilter] = useState<LetterCategory>('all');

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
    },
    {
      slug: 'on-faith-and-softness',
      title: 'On Faith and Softness',
      category: 'Devotion',
      date: '2026-03-20',
      excerpt: 'Softness is not weakness. This is something I keep coming back to—in my faith, in my music, in how I move through the world. Tenderness is an act of courage.',
      readTime: 5
    },
    {
      slug: 'the-making-of-beloved',
      title: 'The Making of Beloved',
      category: 'Behind the Songs',
      date: '2026-02-14',
      excerpt: 'This song started as a voice memo at 2am. I was thinking about the people we carry with us and the ones who shape us even when far away.',
      readTime: 3
    }
  ];

  const categories: { label: string; value: LetterCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Reflections', value: 'reflections' },
    { label: 'Behind the Songs', value: 'behind-the-songs' },
    { label: 'Devotion', value: 'devotion' }
  ];

  const filteredLetters = filter === 'all'
    ? letters
    : letters.filter(letter => letter.category.toLowerCase().replace(/\s+/g, '-') === filter);

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
            Letters
          </h1>
          <p className="text-xl text-parchment/80 mb-8 max-w-2xl">
            Thoughts, stories, and notes from the journey. Written with care, shared with intention.
          </p>
          <div className="max-w-xl">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(({ label, value }) => (
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

          {filteredLetters.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredLetters.map(letter => (
                <LetterCard key={letter.slug} {...letter} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-parchment/60 text-lg mb-4">No letters found in this category.</p>
              {filter !== 'all' && (
                <button
                  onClick={() => setFilter('all')}
                  className="text-burnished-bronze hover:text-soft-ivory transition-colors"
                >
                  View all letters →
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
