import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface NowPlaying {
  releaseSlug: string;
  releaseTitle: string;
  releaseType: string;
  coverImage: string;
  spotifyId: string;
  spotifyType: 'album' | 'track';
}

interface MusicPlayerContextValue {
  nowPlaying: NowPlaying | null;
  isPlayerOpen: boolean;
  play: (track: NowPlaying) => void;
  close: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextValue | null>(null);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const play = useCallback((track: NowPlaying) => {
    setNowPlaying(track);
    setIsPlayerOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsPlayerOpen(false);
    // Keep nowPlaying so the bar can fade out gracefully
    setTimeout(() => setNowPlaying(null), 300);
  }, []);

  return (
    <MusicPlayerContext.Provider value={{ nowPlaying, isPlayerOpen, play, close }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const ctx = useContext(MusicPlayerContext);
  if (!ctx) {
    throw new Error('useMusicPlayer must be used inside MusicPlayerProvider');
  }
  return ctx;
}
