import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReleaseCard } from '../components/ReleaseCard';
import { StreamingLinks } from '../components/StreamingLinks';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import { releases } from '../../data/content';
import { motion } from 'motion/react';
import type { ReleaseType } from '../../data/types';

type FilterValue = 'all' | ReleaseType;

export function Music() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const { t } = useTranslation();

  const filteredReleases =
    filter === 'all' ? releases : releases.filter(release => release.type === filter);

  const filters: { label: string; value: FilterValue }[] = [
    { label: t('music.filter_all'), value: 'all' },
    { label: t('music.filter_albums'), value: 'album' },
    { label: t('music.filter_eps'), value: 'EP' },
    { label: t('music.filter_singles'), value: 'single' },
  ];

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
              {t('music.title')}
            </h1>
            <p className="text-xl text-parchment/80 max-w-2xl mb-8">
              {t('music.subtitle')}
            </p>
            <StreamingLinks />
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="flex flex-wrap gap-2 mb-12">
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
          </AnimatedSection>

          {filteredReleases.length > 0 ? (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReleases.map(release => (
                <motion.div key={release.slug} variants={staggerItem}>
                  <ReleaseCard {...release} />
                </motion.div>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-16">
              <p className="text-parchment/60 text-lg mb-4">{t('music.no_results')}</p>
              <button
                onClick={() => setFilter('all')}
                className="text-burnished-bronze hover:text-soft-ivory transition-colors"
              >
                {t('music.view_all')}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

