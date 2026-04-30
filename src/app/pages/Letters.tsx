import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LetterCard } from '../components/LetterCard';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { FanLetterForm } from '../components/FanLetterForm';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import { letters } from '../../data/letters';
import { motion } from 'motion/react';
import type { LetterCategory } from '../../data/types';

type FilterValue = 'all' | LetterCategory;

export function Letters() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const { t } = useTranslation();

  const categories: { label: string; value: FilterValue }[] = [
    { label: t('letters.filter_all'), value: 'all' },
    { label: t('letters.filter_reflections'), value: 'Reflections' },
    { label: t('letters.filter_behind'), value: 'Behind the Songs' },
    { label: t('letters.filter_devotion'), value: 'Devotion' },
  ];

  const filteredLetters =
    filter === 'all'
      ? letters
      : letters.filter(letter => letter.category === filter);

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
              {t('letters.title')}
            </h1>
            <p className="text-xl text-parchment/80 mb-8 max-w-2xl">
              {t('letters.subtitle')}
            </p>
            <div className="max-w-xl">
              <NewsletterSignup />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="flex flex-wrap gap-2 mb-12">
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
          </AnimatedSection>

          {filteredLetters.length > 0 ? (
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {filteredLetters.map(letter => (
                <motion.div key={letter.slug} variants={staggerItem}>
                  <LetterCard {...letter} />
                </motion.div>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-16">
              <p className="text-parchment/60 text-lg mb-4">
                No letters found in this category.
              </p>
              {filter !== 'all' && (
                <button
                  onClick={() => setFilter('all')}
                  className="text-burnished-bronze hover:text-soft-ivory transition-colors"
                >
                  {t('common.view_all')} →
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <FanLetterForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

