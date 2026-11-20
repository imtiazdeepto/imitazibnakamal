import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, BookOpen, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

type FormState = { name: string; email: string; subject: string; message: string };
const empty: FormState = { name: '', email: '', subject: '', message: '' };

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field = (key: keyof FormState, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }));

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-28 pb-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Page heading */}
        <header className="mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Contact
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
            Open to research collaborations, software engineering roles, and graduate school inquiries.
            Reach out directly or use the form below.
          </p>
        </header>

        {/* ── 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">

          {/* Left — contact info */}
          <aside className="lg:col-span-2 space-y-3" aria-label="Direct contact channels">

            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0">
                <Mail size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-neutral-500 font-medium mb-0.5">Email</div>
                <div className="text-sm text-neutral-200 group-hover:text-white truncate transition-colors font-medium">
                  {profileData.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:${profileData.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <div className="text-[11px] text-neutral-500 font-medium mb-0.5">Phone</div>
                <div className="text-sm text-neutral-200 group-hover:text-white transition-colors font-medium">
                  {profileData.phone}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141414] border border-neutral-800">
              <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-[11px] text-neutral-500 font-medium mb-0.5">Location</div>
                <div className="text-sm text-neutral-400 font-medium">{profileData.location}</div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4">
              <p className="text-[11px] text-neutral-600 font-medium uppercase tracking-wider mb-3">Online</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141414] border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141414] border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href={profileData.socials.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141414] border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <BookOpen size={14} />
                  Scholar
                </a>
              </div>
            </div>

          </aside>

          {/* Right — message form */}
          <div className="lg:col-span-3">
            <div className="p-7 rounded-2xl bg-[#141414] border border-neutral-800">
              <h2 className="text-xl font-bold text-white font-display mb-1">Send a message</h2>
              <p className="text-xs text-neutral-500 mb-6">
                Response within 24 hours on weekdays.
              </p>

              {sent ? (
                <div className="animate-fadeIn py-8 text-center">
                  <p className="text-white font-semibold text-sm">Message received.</p>
                  <p className="text-neutral-400 text-xs mt-2">
                    I'll reply to <span className="text-neutral-200">{form.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm(empty); }}
                    className="mt-6 text-xs text-neutral-500 hover:text-white underline underline-offset-2 transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-1.5" htmlFor="contact-name">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={e => field('name', e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-1.5" htmlFor="contact-email">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={e => field('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => field('subject', e.target.value)}
                      placeholder="Research collaboration / Engineering role / Other"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => field('message', e.target.value)}
                      placeholder="What would you like to discuss?"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-sm placeholder:text-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-100 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send size={14} />
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ── CV section */}
        <section aria-labelledby="cv-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 id="cv-heading" className="text-2xl font-bold text-white font-display">
                Curriculum Vitae
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Full academic and engineering resume — last updated November 2026
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/imtiazcv.pdf"
                download="Imtiaz_Ibna_Kamal_CV.pdf"
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all flex items-center gap-2 shadow-md"
              >
                <Download size={13} />
                Download PDF
              </a>
              <a
                href="/imtiazcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <ExternalLink size={13} />
                Open in Tab
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-neutral-800 bg-[#141414] p-2 shadow-2xl">
            <iframe
              src="/imtiazcv.pdf"
              title="Curriculum Vitae — Imtiaz Ibna Kamal"
              className="w-full h-[700px] rounded-xl bg-neutral-900 border-0"
            />
            {/* Fallback for browsers that block iframe PDF rendering */}
            <p className="text-center text-xs text-neutral-600 py-2">
              If the PDF doesn't load,{' '}
              <a href="/imtiazcv.pdf" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white underline">
                open it in a new tab
              </a>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
