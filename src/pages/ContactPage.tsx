import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, FileText, Download, CheckCircle, Github, Linkedin, BookOpen, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact submission
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
            Get In Touch & Curriculum Vitae
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Contact & Resume
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Interested in discussing research collaborations, software engineering roles, or graduate school opportunities? Reach out directly or download my full CV below.
          </p>
        </div>

        {/* 2-Column: Contact Cards + Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
          
          {/* Direct Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            
            <div className="p-6 rounded-2xl bg-[#141414] border border-neutral-800">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-4">
                Direct Contact Channels
              </span>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold block">Email</span>
                    <span className="font-medium text-xs sm:text-sm truncate block">{profileData.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 transition-all text-neutral-300 hover:text-white group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-bold block">Phone</span>
                    <span className="font-medium text-xs sm:text-sm">{profileData.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-neutral-300">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-bold block">Location</span>
                    <span className="font-medium text-xs sm:text-sm">{profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-3">
                  Online Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.socials.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <BookOpen size={16} />
                    <span>Scholar</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-[#141414] border border-neutral-800">
              <h2 className="text-xl font-bold text-white font-display mb-1">
                Send a Direct Message
              </h2>
              <p className="text-xs text-neutral-400 mb-6">
                Have a question or proposal? Drop your details and message below.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center animate-fadeIn">
                  <CheckCircle size={36} className="text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-neutral-300 mt-1 max-w-sm mx-auto">
                    Thank you for reaching out. I will get back to your email at <strong className="text-emerald-400">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@university.edu"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Research Collaboration / Software Engineering Role"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0c0c] border border-neutral-800 text-white text-xs focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                  >
                    <Send size={14} />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>


        {/* ─────────────────────────────────────────────────────────────
            CURRICULUM VITAE EMBEDDED VIEWER & DOWNLOAD
           ───────────────────────────────────────────────────────────── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white font-display">
                Curriculum Vitae Preview
              </h2>
              <p className="text-xs text-neutral-400">
                Official academic and engineering resume (PDF)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/imtiazcv.pdf"
                download="Imtiaz_Ibna_Kamal_CV.pdf"
                className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-md"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
              <a
                href="/imtiazcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <ExternalLink size={14} />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-neutral-800 bg-[#141414] shadow-2xl p-2">
            <iframe
              src="/imtiazcv.pdf"
              title="Curriculum Vitae of Imtiaz Ibna Kamal"
              className="w-full h-[650px] rounded-xl bg-neutral-900 border-0"
            />
          </div>
        </section>

      </div>
    </div>
  );
};
