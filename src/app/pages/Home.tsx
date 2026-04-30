import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { ReleaseCard } from '../components/ReleaseCard';
import { LetterCard } from '../components/LetterCard';
import { ShowCard } from '../components/ShowCard';
import { StreamingLinks } from '../components/StreamingLinks';
import { FanNotesSection } from '../components/FanNotesSection';
import { AnimatedSection, StaggerContainer, staggerItem } from '../components/AnimatedSection';
import { releases, shows, fanNotes } from '../../data/content';
import { letters } from '../../data/letters';

export function Home() {
  const { t } = useTranslation();

  const featuredReleases = releases.slice(0, 3);
  const featuredLetters = letters.slice(0, 2);
  const upcomingShows = shows.filter(s => s.status === 'upcoming').slice(0, 3);
  const featuredNotes = fanNotes.filter(n => n.status === 'featured' || n.status === 'approved');

  return (
    <div className="min-h-screen bg-deep-espresso">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Ambient gradient background */}
        <div className="absolute inset-0">
          <div className="hero-ambient absolute inset-0 bg-gradient-to-br from-oxblood/20 via-smoky-plum/15 to-deep-espresso opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso via-deep-espresso/40 to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs text-burnished-bronze uppercase tracking-[0.2em] mb-6"
              >
                Eri Ife
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-['Crimson_Pro'] text-5xl md:text-7xl text-soft-ivory mb-6 leading-[1.05]"
              >
                {t('hero.tagline')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-parchment/75 mb-10 leading-relaxed max-w-lg"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button variant="primary" size="lg">
                  <Play size={18} fill="currentColor" />
                  {t('hero.cta_listen')}
                </Button>
                <Link to="/letters">
                  <Button variant="secondary" size="lg">{t('hero.cta_letters')}</Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <StreamingLinks />
              </motion.div>
            </div>

            {/* Hero visual placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden lg:block aspect-[4/5] rounded-lg bg-gradient-to-br from-cocoa-brown via-smoky-plum/50 to-oxblood/60 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/30 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-burnished-bronze/40" />
        </motion.div>
      </section>

      {/* ── Note from Eri ─────────────────────────────────────── */}
      <section className="py-24 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs text-burnished-bronze uppercase tracking-[0.2em] mb-6">
                {t('home.note_from_eri')}
              </p>
              <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl text-soft-ivory mb-8 leading-tight">
                {t('home.note_body')}
              </h2>
              <Link to="/about" className="inline-flex items-center gap-2 text-burnished-bronze hover:text-soft-ivory transition-colors text-sm">
                {t('common.view_all')} <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Latest Releases ───────────────────────────────────── */}
      <section className="py-24 bg-deep-espresso">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs text-burnished-bronze uppercase tracking-[0.2em] mb-3">
                {t('home.new_music')}
              </p>
              <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory">
                {t('home.latest_releases')}
              </h2>
            </div>
            <Link to="/music" className="hidden md:flex items-center gap-2 text-burnished-bronze hover:text-soft-ivory transition-colors text-sm">
              {t('home.view_all_music')} <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReleases.map(release => (
              <motion.div key={release.slug} variants={staggerItem}>
                <ReleaseCard {...release} />
              </motion.div>
            ))}
          </StaggerContainer>

          <div className="mt-8 md:hidden">
            <Link to="/music" className="flex items-center gap-2 text-burnished-bronze hover:text-soft-ivory transition-colors text-sm">
              {t('home.view_all_music')} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Letters ───────────────────────────────────────────── */}
      <section className="py-24 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up" className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs text-burnished-bronze uppercase tracking-[0.2em] mb-3">
                {t('nav.letters')}
              </p>
              <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory">
                {t('letters.subtitle').split('—')[0].trim()}
              </h2>
            </div>
            <Link to="/letters" className="hidden md:flex items-center gap-2 text-burnished-bronze hover:text-soft-ivory transition-colors text-sm">
              {t('home.view_all_letters')} <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {featuredLetters.map(letter => (
              <motion.div key={letter.slug} variants={staggerItem}>
                <LetterCard {...letter} />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Fan Notes ─────────────────────────────────────────── */}
      <FanNotesSection notes={featuredNotes} />

      {/* ── Upcoming Shows ───────────────────────────────────── */}
      {upcomingShows.length > 0 && (
        <section className="py-24 bg-warm-charcoal">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <AnimatedSection direction="up" className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs text-burnished-bronze uppercase tracking-[0.2em] mb-3">
                  {t('nav.live')}
                </p>
                <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory">
                  {t('home.upcoming_shows')}
                </h2>
              </div>
              <Link to="/live" className="hidden md:flex items-center gap-2 text-burnished-bronze hover:text-soft-ivory transition-colors text-sm">
                {t('home.view_all_shows')} <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            <StaggerContainer className="max-w-3xl space-y-4">
              {upcomingShows.map(show => (
                <motion.div key={show.id} variants={staggerItem}>
                  <ShowCard {...show} />
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── Newsletter ────────────────────────────────────────── */}
      <section className="py-24 bg-deep-espresso">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <NewsletterSignup />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

