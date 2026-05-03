import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

const MAX_CHARS = 1500;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function FanLetterForm() {
  const { t, i18n } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus]   = useState<Status>('idle');

  const configured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!configured || !formRef.current) return;
    if (message.trim().length < 10) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-warm-charcoal rounded-lg p-8 border border-burnished-bronze/30 text-center">
        <p className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-2">
          {t('letters.form_sent_title', 'Thank you.')}
        </p>
        <p className="text-parchment/70">
          {t('letters.form_sent_body', 'Your letter is on its way. Eri Ife reads every one.')}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-burnished-bronze hover:text-soft-ivory transition-colors underline"
        >
          {t('letters.form_write_another', 'Write another letter')}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-warm-charcoal rounded-lg p-8 border border-border">
      <h3 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-2">
        {t('letters.form_title', 'Write to Eri Ife')}
      </h3>
      <p className="text-parchment/60 text-sm mb-8">
        {t('letters.form_subtitle', 'Your letter goes directly to him. He reads every one.')}
      </p>

      {!configured && (
        <p className="text-xs text-burnished-bronze/70 mb-6 border border-burnished-bronze/20 rounded px-3 py-2">
          ⚠ EmailJS not configured — add <code>VITE_EMAILJS_*</code> to your <code>.env</code> to enable this form.
        </p>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Honeypot — bots fill this, humans don't */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        {/* Pass locale so the email template can reference it */}
        <input type="hidden" name="locale" value={i18n.language} />
        {/* title is used by the template for Organisation — not collected from fans */}
        <input type="hidden" name="title" value="—" />

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fan_name" className="block text-xs uppercase tracking-wider text-parchment/50 mb-2">
              {t('letters.form_name', 'Your name')}
            </label>
            <input
              id="fan_name"
              name="name"
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t('letters.form_name_placeholder', 'First name or nickname')}
              className="w-full bg-cocoa-brown border border-border rounded px-4 py-3 text-soft-ivory placeholder-parchment/30 focus:outline-none focus:border-burnished-bronze/60 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="fan_email" className="block text-xs uppercase tracking-wider text-parchment/50 mb-2">
              {t('letters.form_email', 'Your email')} <span className="normal-case text-parchment/30">(optional)</span>
            </label>
            <input
              id="fan_email"
              name="time"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-cocoa-brown border border-border rounded px-4 py-3 text-soft-ivory placeholder-parchment/30 focus:outline-none focus:border-burnished-bronze/60 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="fan_message" className="block text-xs uppercase tracking-wider text-parchment/50 mb-2">
            {t('letters.form_message', 'Your letter')}
          </label>
          <textarea
            id="fan_message"
            name="message"
            required
            rows={8}
            maxLength={MAX_CHARS}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={t('letters.form_message_placeholder', 'Write whatever is on your heart…')}
            className="w-full bg-cocoa-brown border border-border rounded px-4 py-3 text-soft-ivory placeholder-parchment/30 focus:outline-none focus:border-burnished-bronze/60 transition-colors resize-none"
          />
          <p className={`text-xs mt-1 text-right transition-colors ${message.length > MAX_CHARS * 0.9 ? 'text-burnished-bronze' : 'text-parchment/30'}`}>
            {message.length} / {MAX_CHARS}
          </p>
        </div>

        {status === 'error' && (
          <p className="text-sm text-oxblood">
            {t('letters.form_error', 'Something went wrong. Please try again or email directly.')}
          </p>
        )}

        <button
          type="submit"
          disabled={!configured || status === 'sending' || message.trim().length < 10}
          className="w-full sm:w-auto px-8 py-3 rounded bg-oxblood text-soft-ivory hover:bg-[#7D4744] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === 'sending'
            ? t('letters.form_sending', 'Sending…')
            : t('letters.form_submit', 'Send Letter')}
        </button>
      </form>
    </div>
  );
}
