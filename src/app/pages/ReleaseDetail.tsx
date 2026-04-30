import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { SpotifyEmbed } from '../components/SpotifyEmbed';
import { AnimatedSection } from '../components/AnimatedSection';
import { releases } from '../../data/content';

export function ReleaseDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const release = releases.find(r => r.slug === slug);

  if (!release) {
    return (
      <div className="min-h-screen bg-deep-espresso flex items-center justify-center">
        <div className="text-center">
          <p className="text-parchment/60 text-lg mb-4">{t('common.not_found')}</p>
          <Link to="/music" className="text-burnished-bronze hover:text-soft-ivory transition-colors">
            {t('common.back_to_music')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-espresso">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <Link
          to="/music"
          className="inline-flex items-center gap-2 text-parchment/70 hover:text-burnished-bronze transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          <span>{t('common.back_to_music')}</span>
        </Link>

        {/* Hero grid */}
        <AnimatedSection direction="up">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Cover art */}
            <div className="aspect-square rounded-lg shadow-2xl relative overflow-hidden bg-gradient-to-br from-cocoa-brown via-smoky-plum/50 to-oxblood/60">
              {release.coverImage ? (
                <img
                  src={release.coverImage}
                  alt={release.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/30 to-transparent" />
              )}
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.2em] text-burnished-bronze mb-4">
                {release.type} · {release.year}
              </div>

              <h1 className="font-['Crimson_Pro'] text-5xl text-soft-ivory mb-6">
                {release.title}
              </h1>

              <p className="text-lg text-parchment/80 leading-relaxed">
                {release.longDescription ?? release.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Spotify embed */}
        {release.spotifyId && (
          <AnimatedSection direction="up" delay={0.1} className="mb-16">
            <div className="spotify-embed">
              <SpotifyEmbed
                spotifyId={release.spotifyId}
                type={release.spotifyType ?? 'album'}
              />
            </div>
          </AnimatedSection>
        )}

        {/* Tracklist (albums / EPs only — skip for single-track singles) */}
        {release.tracks && release.tracks.length > 1 && (
          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-6">
              {t('music.tracklist')}
            </h2>
            <div className="space-y-1">
              {release.tracks.map(track => (
                <div
                  key={track.number}
                  className="flex items-center justify-between p-4 rounded hover:bg-warm-charcoal transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-parchment/40 w-6 group-hover:text-parchment/60 transition-colors">
                      {track.number}
                    </span>
                    <span className="text-soft-ivory">{track.title}</span>
                  </div>
                  <span className="text-sm text-parchment/50">{track.duration}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}

