import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import type { NewsletterPayload, SupportedLocale } from '../../data/types';

interface NewsletterSignupProps {
  source?: string;
}

export function NewsletterSignup({ source }: NewsletterSignupProps) {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    const payload: NewsletterPayload = {
      email: email.trim(),
      locale: i18n.language as SupportedLocale,
      source,
    };

    // TODO: replace with real API call to your backend / Cloudflare Worker
    // Example: await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify(payload) })
    console.log('Newsletter payload:', payload);

    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-burnished-bronze font-['Crimson_Pro']">
          {t('forms.success_newsletter')}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto text-center">
      <h3 className="font-['Crimson_Pro'] text-3xl md:text-4xl text-soft-ivory mb-4">
        {t('forms.newsletter_title')}
      </h3>
      <p className="text-base text-parchment/80 mb-8">
        {t('forms.newsletter_subtitle')}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('forms.email_placeholder')}
          className="flex-1 px-5 py-4 rounded bg-warm-charcoal border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze disabled:opacity-50 disabled:cursor-not-allowed"
          required
          disabled={status === 'loading'}
        />
        <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? t('forms.submitting') : t('forms.subscribe')}
        </Button>
      </form>
      {status === 'error' && (
        <p className="text-sm text-red-400 mt-3">{t('forms.error')}</p>
      )}
    </div>
  );
}

