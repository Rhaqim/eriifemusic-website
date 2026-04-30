import { Link } from 'react-router';
import { Play } from 'lucide-react';
import { useMusicPlayer } from '../context/MusicPlayerContext';
import { useTranslation } from 'react-i18next';

interface ReleaseCardProps {
  slug: string;
  title: string;
  type: 'single' | 'EP' | 'album' | 'live';
  year: number;
  coverImage: string;
  description?: string;
  spotifyId?: string;
  spotifyType?: 'album' | 'track';
}

export function ReleaseCard({
  slug,
  title,
  type,
  year,
  coverImage,
  description,
  spotifyId,
  spotifyType = 'album',
}: ReleaseCardProps) {
  const { play, nowPlaying } = useMusicPlayer();
  const { t } = useTranslation();
  const isPlaying = nowPlaying?.releaseSlug === slug;

  function handleListen(e: React.MouseEvent) {
    e.preventDefault(); // don't navigate — open the mini-player instead
    if (!spotifyId) return;
    play({
      releaseSlug: slug,
      releaseTitle: title,
      releaseType: type,
      coverImage,
      spotifyId,
      spotifyType,
    });
  }

  return (
    <Link to={`/music/${slug}`} className="group block">
      <div
        className={`bg-warm-charcoal rounded overflow-hidden border transition-all shadow-sm hover:shadow-lg ${
          isPlaying
            ? 'border-burnished-bronze shadow-burnished-bronze/10'
            : 'border-border hover:border-burnished-bronze/50'
        }`}
      >
        {/* Cover art */}
        <div className="aspect-square bg-gradient-to-br from-cocoa-brown via-smoky-plum/40 to-oxblood/30 relative overflow-hidden">
          {coverImage && (
            <img
              src={coverImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Listen overlay button */}
          {spotifyId && (
            <button
              onClick={handleListen}
              aria-label={`${t('music.play_now')} — ${title}`}
              className={`absolute bottom-3 right-3 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all shadow-lg ${
                isPlaying
                  ? 'bg-burnished-bronze text-deep-espresso opacity-100'
                  : 'bg-deep-espresso/90 text-soft-ivory opacity-0 group-hover:opacity-100 hover:bg-burnished-bronze hover:text-deep-espresso'
              }`}
            >
              <Play size={12} fill="currentColor" />
              {isPlaying ? t('music.now_playing') : t('music.play_now')}
            </button>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3 text-xs text-burnished-bronze/70 uppercase tracking-widest">
            <span>{type}</span>
            <span className="text-burnished-bronze/40">•</span>
            <span>{year}</span>
            {isPlaying && (
              <>
                <span className="text-burnished-bronze/40">•</span>
                <span className="text-burnished-bronze animate-pulse">
                  {t('music.now_playing')}
                </span>
              </>
            )}
          </div>
          <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-2 group-hover:text-burnished-bronze transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-parchment/60 line-clamp-2 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

