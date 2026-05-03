import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

// Brevo (Sendinblue) hosted form endpoint
const BREVO_FORM_URL =
  'https://f4924d89.sibforms.com/serve/MUIFAOV_IHF7F2k5cZREQ1qTaXg4viFOW1Ma2UtBPyL7eLFPvl_VvrLR_uO4v5LCQt4CQojLIUhMxqQeumBS-SYc88lAT3dqZDpQO3hB2BV3qc196lkaJmKygvYp3phMxSC2iECk6_mNI8YYOffkncGQli4vNWX-s0QY9fFxwS_ootKI4qRGnqEZhOHujjSRXagsCOY4-BqFBRhbZw==';

interface NewsletterSignupProps {
  source?: string;
}

export function NewsletterSignup({ source: _source }: NewsletterSignupProps) {
  const { t, i18n } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const body = new URLSearchParams();
      body.append('EMAIL', email.trim());
      if (firstName.trim()) body.append('FIRSTNAME', firstName.trim());
      body.append('email_address_check', ''); // honeypot — must be empty
      body.append('locale', i18n.language);

      // Brevo's hosted form endpoint; no-cors because it returns a redirect
      await fetch(BREVO_FORM_URL, { method: 'POST', body, mode: 'no-cors' });

      setSubmittedName(firstName.trim());
      setStatus('success');
      setEmail('');
      setFirstName('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-burnished-bronze font-['Crimson_Pro']">
          {submittedName
            ? `${submittedName}, ${t('forms.success_newsletter')}`
            : t('forms.success_newsletter')}
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={t('forms.name_placeholder')}
          autoComplete="given-name"
          className="w-full px-5 py-4 rounded bg-warm-charcoal border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === 'loading'}
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('forms.email_placeholder')}
            autoComplete="email"
            className="flex-1 px-5 py-4 rounded bg-warm-charcoal border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled={status === 'loading'}
          />
          <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
            {status === 'loading' ? t('forms.submitting') : t('forms.subscribe')}
          </Button>
        </div>
      </form>
      {status === 'error' && (
        <p className="text-sm text-red-400 mt-3">{t('forms.error')}</p>
      )}
    </div>
  );
}

