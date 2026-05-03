import { useState, useRef, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { pressBios, pressContacts } from '../../data/content';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;

export function Press() {
  const { t, i18n } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    publication: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedBio, setCopiedBio] = useState<string | null>(null);

  const configured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!configured || !formRef.current) return;
    setStatus('loading');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setFormData({ name: '', email: '', publication: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const copyBio = async (text: string, length: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedBio(length);
    setTimeout(() => setCopiedBio(null), 2000);
  };

  const bioLengthLabel = (length: string) => {
    const map: Record<string, string> = {
      short: t('press.short'),
      medium: t('press.medium'),
      long: t('press.long'),
    };
    return map[length] ?? length;
  };

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
              {t('press.title')}
            </h1>
            <p className="text-xl text-parchment/80">{t('press.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bios */}
            <AnimatedSection direction="up">
              <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-6">
                {t('press.bios')}
              </h2>
              <div className="space-y-4">
                {pressBios.map((bio) => (
                  <div key={bio.length} className="bg-warm-charcoal rounded-lg p-6 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-['Crimson_Pro'] text-xl text-soft-ivory">
                        {bioLengthLabel(bio.length)}
                      </h3>
                      <button
                        onClick={() => copyBio(bio.text, bio.length)}
                        className="text-xs text-parchment/60 hover:text-burnished-bronze transition-colors px-3 py-1 rounded border border-border hover:border-burnished-bronze/50"
                      >
                        {copiedBio === bio.length ? t('press.copied') : t('press.copy')}
                      </button>
                    </div>
                    <p className="text-sm text-parchment/70 leading-relaxed whitespace-pre-line">
                      {bio.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Contact + Form */}
            <div className="space-y-6">
              <AnimatedSection direction="up" delay={0.1}>
                <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-6">
                  {t('press.contact')}
                </h2>
                <div className="space-y-3 mb-8">
                  {pressContacts.map((contact) => (
                    <div key={contact.title} className="bg-warm-charcoal rounded-lg p-5 border border-border">
                      <p className="text-xs text-parchment/50 uppercase tracking-wider mb-1">
                        {contact.title}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-burnished-bronze hover:text-soft-ivory transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Press inquiry form */}
              <AnimatedSection direction="up" delay={0.2}>
                <div className="bg-warm-charcoal rounded-lg p-8 border border-border">
                  <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-6">
                    {t('press.send_message')}
                  </h3>

                  {status === 'success' ? (
                    <p className="text-parchment/80 text-center py-8 font-['Crimson_Pro'] text-lg">
                      {t('forms.success_press')}
                    </p>
                  ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                      {/* Honeypot */}
                      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                      <input type="hidden" name="locale" value={i18n.language} />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="press-name" className="block text-xs text-parchment/60 uppercase tracking-wider mb-2">
                            {t('forms.name_placeholder')}
                          </label>
                          <input
                            type="text"
                            id="press-name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze"
                            required
                            disabled={status === 'loading'}
                          />
                        </div>
                        <div>
                          <label htmlFor="press-email" className="block text-xs text-parchment/60 uppercase tracking-wider mb-2">
                            {t('forms.email_placeholder')}
                          </label>
                          <input
                            type="email"
                            id="press-email"
                            name="time"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze"
                            required
                            disabled={status === 'loading'}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="press-pub" className="block text-xs text-parchment/60 uppercase tracking-wider mb-2">
                          {t('forms.organization_placeholder')}
                        </label>
                        <input
                          type="text"
                          id="press-pub"
                          name="title"
                          value={formData.publication}
                          onChange={(e) => setFormData({ ...formData, publication: e.target.value })}
                          placeholder={t('forms.organization_placeholder')}
                          className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze"
                          disabled={status === 'loading'}
                        />
                      </div>
                      <div>
                        <label htmlFor="press-message" className="block text-xs text-parchment/60 uppercase tracking-wider mb-2">
                          Message
                        </label>
                        <textarea
                          id="press-message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze resize-none"
                          required
                          disabled={status === 'loading'}
                        />
                      </div>
                      {status === 'error' && (
                        <p className="text-sm text-red-400">{t('forms.error')}</p>
                      )}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? t('forms.submitting') : t('forms.send_message')}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

