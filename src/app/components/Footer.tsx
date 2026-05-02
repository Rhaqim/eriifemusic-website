import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { socialLinks, pressContacts } from '../../data/content';

const SOCIAL_ICONS: Record<string, string> = {
  instagram: 'IG',
  twitter: 'TW',
  youtube: 'YT',
  tiktok: 'TK',
  spotify: 'SP',
  soundcloud: 'SC',
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const navLinks = [
    { path: '/music', key: 'nav.music' },
    { path: '/letters', key: 'nav.letters' },
    { path: '/about', key: 'nav.about' },
    { path: '/live', key: 'nav.live' },
    { path: '/press', key: 'nav.press' },
  ];

  return (
    <footer className="border-t border-border/30 mt-32 bg-warm-charcoal">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" aria-label="Eri Ife — Home" className="block mb-4">
              <img src="/assets/images/logo.png" alt="Eri Ife" className="h-10 w-auto" />
            </Link>
            {/* <p className="text-sm text-parchment/70 leading-relaxed mb-6">
              {t('footer.tagline')}
            </p> */}
            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="w-8 h-8 flex items-center justify-center rounded bg-cocoa-brown border border-border hover:border-burnished-bronze text-parchment/60 hover:text-burnished-bronze transition-colors text-xs font-medium"
                >
                  {SOCIAL_ICONS[link.platform] ?? link.platform.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm text-parchment/80 hover:text-burnished-bronze transition-colors"
              >
                {t(link.key as never)}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            {pressContacts.map((contact) => (
              <div key={contact.title}>
                <p className="text-xs text-parchment/50 uppercase tracking-wider mb-1">
                  {t(`footer.${contact.title.toLowerCase()}` as never, contact.title)}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-burnished-bronze hover:text-soft-ivory transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>

          {/* Newsletter prompt */}
          <div>
            <p className="text-sm text-soft-ivory font-medium mb-2">{t('forms.newsletter_title')}</p>
            <p className="text-xs text-parchment/60 leading-relaxed mb-4">
              {t('forms.newsletter_subtitle')}
            </p>
            <Link
              to="/letters"
              className="text-xs text-burnished-bronze hover:text-soft-ivory transition-colors uppercase tracking-wider"
            >
              {t('common.view_all')} →
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-parchment/50">
            {t('footer.rights', { year: currentYear })}
          </p>
          <p className="text-xs text-parchment/40">
            Made with care in Lagos.
          </p>
        </div>
      </div>
    </footer>
  );
}

