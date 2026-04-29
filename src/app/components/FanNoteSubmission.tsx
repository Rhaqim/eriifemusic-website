import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';
import type { FanNotePayload, SupportedLocale } from '../../data/types';

export function FanNoteSubmission() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    city: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const MAX_CHARS = 280;
  const remaining = MAX_CHARS - formData.message.length;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    setStatus('loading');

    const payload: FanNotePayload = {
      message: formData.message.trim(),
      name: formData.name.trim(),
      city: formData.city.trim() || undefined,
      locale: i18n.language as SupportedLocale,
    };

    // TODO: replace with real API call to your backend / Cloudflare Worker
    // Example: await fetch('/api/fan-notes', { method: 'POST', body: JSON.stringify(payload) })
    console.log('Fan note payload:', payload);

    setTimeout(() => {
      setStatus('success');
      setFormData({ message: '', name: '', city: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className="bg-warm-charcoal border border-border rounded-lg p-8 text-center">
        <p className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-3">
          {t('forms.success_fan_note').split('.')[0]}.
        </p>
        <p className="text-sm text-parchment/70">
          {t('forms.success_fan_note').split('.').slice(1).join('.').trim()}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-warm-charcoal border border-border rounded-lg p-8">
      <h3 className="font-['Crimson_Pro'] text-2xl md:text-3xl text-soft-ivory mb-3">
        {t('forms.fan_note_title')}
      </h3>
      <p className="text-sm text-parchment/70 mb-6">
        {t('forms.fan_note_subtitle')}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fan-message" className="sr-only">Your message</label>
          <textarea
            id="fan-message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t('forms.message_placeholder')}
            rows={5}
            className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze resize-none leading-relaxed disabled:opacity-50 disabled:cursor-not-allowed"
            required
            maxLength={MAX_CHARS}
            disabled={status === 'loading'}
          />
          <p className={`text-xs mt-2 ${remaining < 20 ? 'text-burnished-bronze' : 'text-parchment/50'}`}>
            {t('forms.chars_remaining_other', { count: remaining })}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fan-name" className="sr-only">Your name</label>
            <input
              type="text"
              id="fan-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t('forms.name_placeholder')}
              className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <label htmlFor="fan-city" className="sr-only">Your city</label>
            <input
              type="text"
              id="fan-city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder={t('forms.city_placeholder')}
              className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'loading'}
            />
          </div>
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-400">{t('forms.error')}</p>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading' || !formData.message.trim()}
            className="w-full sm:w-auto"
          >
            {status === 'loading' ? t('forms.submitting') : t('forms.send_note')}
          </Button>
        </div>
      </form>
    </div>
  );
}

