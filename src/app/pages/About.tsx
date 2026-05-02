import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { spotifyUrl } from '../../data/content';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-deep-espresso">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="aspect-[4/5] rounded-lg shadow-2xl relative overflow-hidden bg-cocoa-brown">
                <img
                  src="/assets/images/about_photo.jpg"
                  alt="Eri Ife"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/20 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <p className="text-xs text-burnished-bronze uppercase tracking-[0.2em] mb-4">
                Eri Ife
              </p>
              <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-parchment/80 leading-relaxed">
                {t('about.subtitle')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-parchment/80 leading-relaxed">
              <p>{t('about.bio_p1')}</p>
              <p>{t('about.bio_p2')}</p>
              <p>{t('about.bio_p3')}</p>
              {/* <p>{t('about.bio_p4')}</p> */}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote + CTAs */}
      <section className="py-24 bg-deep-espresso">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-['Crimson_Pro'] text-3xl md:text-4xl text-soft-ivory mb-10 leading-relaxed">
                "{t('about.quote')}"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">{t('about.listen')}</Button>
                </a>
                <Link to="/letters">
                  <Button variant="secondary" size="lg">{t('about.read_letters')}</Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

