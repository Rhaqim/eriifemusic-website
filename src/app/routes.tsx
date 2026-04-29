import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Music } from './pages/Music';
import { ReleaseDetail } from './pages/ReleaseDetail';
import { Letters } from './pages/Letters';
import { LetterDetail } from './pages/LetterDetail';
import { About } from './pages/About';
import { Live } from './pages/Live';
import { Press } from './pages/Press';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'music', Component: Music },
      { path: 'music/:slug', Component: ReleaseDetail },
      { path: 'letters', Component: Letters },
      { path: 'letters/:slug', Component: LetterDetail },
      { path: 'about', Component: About },
      { path: 'live', Component: Live },
      { path: 'press', Component: Press },
      { path: '*', Component: NotFound }
    ]
  }
]);
