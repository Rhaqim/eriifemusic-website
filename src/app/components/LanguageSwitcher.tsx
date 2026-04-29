import { useTranslation } from 'react-i18next';
import { SUPPORTED_LOCALES } from '../../i18n';
import type { SupportedLocale } from '../../data/types';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language as SupportedLocale;

  const handleChange = (locale: SupportedLocale) => {
    i18n.changeLanguage(locale);
  };

  return (
    <div className={`flex items-center gap-1 ${className}`} role="group" aria-label="Language selector">
      {SUPPORTED_LOCALES.map(({ code, nativeLabel }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          aria-pressed={currentLocale === code}
          className={`px-2 py-1 rounded text-xs tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnished-bronze ${
            currentLocale === code
              ? 'text-burnished-bronze font-medium'
              : 'text-parchment/50 hover:text-parchment/80'
          }`}
          title={nativeLabel}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
