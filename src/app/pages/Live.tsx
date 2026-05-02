import { useTranslation } from 'react-i18next';
import { ShowCard } from '../components/ShowCard';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import { shows } from '../../data/content';
import { motion } from 'motion/react';

export function Live() {
  const { t } = useTranslation();

  const upcomingShows = shows.filter(s => s.status === 'upcoming');
  const pastShows = shows.filter(s => s.status === 'past' || s.status === 'sold-out');

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
              {t('live.title')}
            </h1>
            <p className="text-xl text-parchment/80 max-w-2xl">
              {t('live.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-8">
              {t('live.upcoming')}
            </h2>
          </AnimatedSection>

          {upcomingShows.length > 0 ? (
            <StaggerContainer className="max-w-3xl space-y-4 mb-16">
              {upcomingShows.map(show => (
                <motion.div key={show.id} variants={staggerItem}>
                  <ShowCard {...show} />
                </motion.div>
              ))}
            </StaggerContainer>
          ) : (
            <AnimatedSection direction="up" className="max-w-3xl text-center py-12 mb-16 bg-warm-charcoal rounded-lg border border-border">
              <p className="text-parchment/60 text-lg">{t('live.no_upcoming')}</p>
              <p className="text-parchment/50 text-sm mt-2">{t('live.check_back')}</p>
            </AnimatedSection>
          )}

          {/* Booking card */}
          <AnimatedSection direction="up" className="max-w-3xl">
            <div className="bg-warm-charcoal rounded-lg p-8 border border-border">
              <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-3">
                {t('live.book_eri')}
              </h3>
              <p className="text-parchment/80 mb-6">{t('live.book_description')}</p>
              <a
                href="mailto:eriifeesq@gmail.com"
                className="inline-block px-6 py-3 rounded bg-oxblood text-soft-ivory hover:bg-[#7D4744] transition-colors"
              >
                {t('live.contact_booking')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <NewsletterSignup />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

