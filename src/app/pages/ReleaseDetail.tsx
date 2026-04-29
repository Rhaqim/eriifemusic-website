import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Play } from 'lucide-react';
import { Button } from '../components/Button';
import { StreamingLinks } from '../components/StreamingLinks';
import { SpotifyEmbed } from '../components/SpotifyEmbed';
import { AnimatedSection } from '../components/AnimatedSection';
import { releases } from '../../data/content';
import { streamingPlatforms } from '../../data/content';

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
            {/* Cover art placeholder */}
            <div className="aspect-square rounded-lg bg-gradient-to-br from-cocoa-brown via-smoky-plum/50 to-oxblood/60 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/30 to-transparent" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.2em] text-burnished-bronze mb-4">
                {release.type} · {release.year}
              </div>

              <h1 className="font-['Crimson_Pro'] text-5xl text-soft-ivory mb-6">
                {release.title}
              </h1>

              <p className="text-lg text-parchment/80 mb-8 leading-relaxed">
                {release.longDescription ?? release.description}
              </p>

              {/* Play button */}
              {release.spotifyId ? (
                <div className="mb-8">
                  <a
                    href={`https://open.spotify.com/${release.spotifyType ?? 'album'}/${release.spotifyId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded bg-oxblood text-soft-ivory hover:bg-[#7D4744] transition-colors"
                  >
                    <Play size={18} fill="currentColor" />
                    {t('music.play_now')}
                  </a>
                </div>
              ) : (
                <div className="mb-8">
                  <Button variant="primary" size="lg">
                    <Play size={18} fill="currentColor" />
                    {t('music.play_now')}
                  </Button>
                </div>
              )}

              <StreamingLinks />
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

        {/* Streaming fallback when no Spotify ID */}
        {!release.spotifyId && streamingPlatforms.length > 0 && (
          <AnimatedSection direction="up" delay={0.1} className="mb-16">
            <div className="bg-warm-charcoal rounded-lg p-8 border border-border">
              <p className="text-parchment/70 mb-4">{t('music.embed_unavailable')}</p>
              <div className="flex flex-wrap gap-3">
                {streamingPlatforms.map(p => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-cocoa-brown border border-border hover:border-burnished-bronze text-sm text-parchment hover:text-burnished-bronze transition-colors"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Tracklist + Credits */}
        {(release.tracks || release.credits) && (
          <AnimatedSection direction="up" delay={0.15}>
            <div className="grid lg:grid-cols-3 gap-12">
              {release.tracks && (
                <div className="lg:col-span-2">
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
                </div>
              )}

              {release.credits && (
                <div>
                  <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-4">
                    {t('music.credits')}
                  </h3>
                  <ul className="space-y-2">
                    {release.credits.map((credit, index) => (
                      <li key={index} className="text-sm text-parchment/70 leading-relaxed">
                        {credit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}

