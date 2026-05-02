import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MiniPlayer } from './MiniPlayer';
import { ShowPromo } from './ShowPromo';
import { MusicPlayerProvider } from '../context/MusicPlayerContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <MusicPlayerProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <MiniPlayer />
        <ShowPromo />
      </div>
    </MusicPlayerProvider>
  );
}
