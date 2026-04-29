import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { MiniPlayer } from './MiniPlayer';
import { MusicPlayerProvider } from '../context/MusicPlayerContext';

export function Layout() {
  return (
    <MusicPlayerProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <MiniPlayer />
      </div>
    </MusicPlayerProvider>
  );
}
