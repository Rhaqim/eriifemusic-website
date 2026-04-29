import { X, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useMusicPlayer } from '../context/MusicPlayerContext';
import { SpotifyEmbed } from './SpotifyEmbed';

/**
 * Persistent mini-player bar that appears at the bottom of the screen
 * when a Spotify embed is active.
 */
export function MiniPlayer() {
  const { nowPlaying, isPlayerOpen, close } = useMusicPlayer();

  return (
    <AnimatePresence>
      {isPlayerOpen && nowPlaying && nowPlaying.spotifyId && (
        <motion.div
          key="mini-player"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-warm-charcoal border-t border-border shadow-2xl"
        >
          <div className="max-w-[1200px] mx-auto px-4 py-3">
            {/* Header row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-oxblood flex items-center justify-center flex-shrink-0">
                  <Music size={14} className="text-soft-ivory" />
                </div>
                <div>
                  <p className="text-sm font-medium text-soft-ivory leading-tight">
                    {nowPlaying.releaseTitle}
                  </p>
                  <p className="text-xs text-parchment/60 uppercase tracking-wider">
                    {nowPlaying.releaseType}
                  </p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="Close player"
                className="p-1.5 text-parchment/60 hover:text-parchment transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnished-bronze"
              >
                <X size={18} />
              </button>
            </div>

            {/* Spotify embed */}
            <SpotifyEmbed
              spotifyId={nowPlaying.spotifyId}
              type={nowPlaying.spotifyType}
              height={nowPlaying.spotifyType === 'album' ? 200 : 80}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
