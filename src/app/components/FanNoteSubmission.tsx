import { FormEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Button } from './Button';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

export function FanNoteSubmission() {
  const { t, i18n } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    city: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const MAX_CHARS = 280;
  const remaining = MAX_CHARS - formData.message.length;

  const configured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim() || !configured || !formRef.current) return;

    setStatus('loading');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setFormData({ message: '', name: '', city: '' });
    } catch {
      setStatus('error');
    }
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

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="locale" value={i18n.language} />
        {/* title maps to Organisation in the template — used here as note source */}
        <input type="hidden" name="title" value="Fan Note (Home page)" />
        <div>
          <label htmlFor="fan-message" className="sr-only">Your message</label>
          <textarea
            id="fan-message"
            name="message"
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
              name="name"
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
              name="time"
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

