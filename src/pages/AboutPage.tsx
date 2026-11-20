import React from 'react';
import { GraduationCap, Users, Trophy, Terminal, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { competitiveProgramming } from '../data/skills';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-24 pb-24 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="mb-14">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Biography</p>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight">About Me</h1>
        </header>

        {/* Bio + quick facts side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 items-start">

          {/* Bio — 2/3 */}
          <div className="lg:col-span-2 space-y-4 text-neutral-300 text-sm leading-relaxed">
            <p className="text-base text-white">
              I'm <strong className="font-bold">Imtiaz Ibna Kamal</strong>, a Software Engineering student
              (Major: Data Science) at Daffodil International University in Dhaka, Bangladesh.
            </p>
            <p>
              My research centers on making deep learning diagnostically useful in settings that can't
              afford GPU clusters — rural clinics, district hospitals, low-bandwidth outpatient labs.
              That means smaller models (via knowledge distillation), cleaner inference pipelines
              (FastAPI + Docker), and transparent predictions (Grad-CAM++, SHAP, LIME) that
              clinicians can actually trust.
            </p>
            <p>
              Alongside research I run programming contests as Deputy Executive Member of the ACM Wing,
              which involves problem setting, test case writing, and mentoring juniors in algorithms and
              C++ — work that has sharpened how I think about correctness and edge cases in software.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/imtiazcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wide hover:bg-neutral-100 active:scale-95 transition-all"
              >
                Download CV
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 hover:text-white transition-colors self-center"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Quick facts — 1/3 */}
          <aside className="p-5 rounded-2xl bg-[#141414] border border-neutral-800 text-xs space-y-3.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 pb-2 border-b border-neutral-800">Quick facts</p>
            {[
              ['Degree', 'B.Sc. Software Engineering'],
              ['Major', 'Data Science'],
              ['CGPA', '3.80 / 4.00'],
              ['Recent semesters', '4.00 / 4.00'],
              ['Graduation', 'Expected July 2027'],
              ['Location', 'Dhaka, Bangladesh'],
            ].map(([k, v]) => (
              <div key={k}>
                <span className="text-neutral-500 block">{k}</span>
                <span className={`font-semibold ${k === 'CGPA' || k === 'Recent semesters' ? 'text-emerald-400 font-mono' : 'text-neutral-200'}`}>
                  {v}
                </span>
              </div>
            ))}
          </aside>
        </div>

        {/* Education */}
        <section className="mb-16" aria-labelledby="edu-heading">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-blue-950/50 border border-blue-800/50 flex items-center justify-center text-blue-400">
              <GraduationCap size={16} />
            </div>
            <h2 id="edu-heading" className="font-display font-bold text-white text-xl">Education</h2>
          </div>

          <div className="space-y-5">
            {profileData.education.map((edu, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#141414] border border-neutral-800">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{edu.institution} · {edu.location}</p>
                    <p className="text-xs text-blue-400 font-medium mt-0.5">{edu.major}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="text-xs font-mono text-neutral-500">{edu.period}</span>
                    <p className="font-bold text-emerald-400 font-mono text-sm mt-1">{edu.cgpa}</p>
                  </div>
                </div>

                <ul className="space-y-1 text-xs text-neutral-400 mb-4">
                  {edu.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-neutral-600 shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((c, j) => (
                    <span key={j} className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16" aria-labelledby="leadership-heading">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-purple-950/50 border border-purple-800/50 flex items-center justify-center text-purple-400">
              <Users size={16} />
            </div>
            <h2 id="leadership-heading" className="font-display font-bold text-white text-xl">Leadership</h2>
          </div>

          {profileData.leadership.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#141414] border border-neutral-800">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-bold text-white text-base">{item.role}</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{item.organization} · {item.location}</p>
                </div>
                <span className="text-xs font-mono text-neutral-500 shrink-0">{item.period}</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-400">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-neutral-500 shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Honors */}
        <section className="mb-16" aria-labelledby="honors-heading">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-amber-950/50 border border-amber-800/50 flex items-center justify-center text-amber-400">
              <Trophy size={16} />
            </div>
            <h2 id="honors-heading" className="font-display font-bold text-white text-xl">Honors & Awards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.honors.map((h, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-neutral-500">{h.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Award</span>
                </div>
                <h3 className="font-bold text-white text-sm mt-1">{h.title}</h3>
                <p className="text-xs text-neutral-500 mt-0.5">{h.organization}</p>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive Programming */}
        <section aria-labelledby="cp-heading">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300">
              <Terminal size={16} />
            </div>
            <h2 id="cp-heading" className="font-display font-bold text-white text-xl">Competitive Programming</h2>
          </div>

          <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800">
            <div className="flex flex-wrap gap-4 mb-5">
              {competitiveProgramming.profiles.map((p, i) => (
                <div key={i} className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                  <span className="text-neutral-500 uppercase font-bold text-[10px] block">{p.platform}</span>
                  <span className="font-extrabold text-white font-mono text-base block mt-0.5">{p.rating}</span>
                  <span className="text-blue-400 text-[10px]">{p.badge}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {competitiveProgramming.contests.map((c, i) => (
                <div key={i} className="flex items-start justify-between gap-2 py-2 border-t border-neutral-800 first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
                  <div>
                    <span className="text-amber-400 font-bold font-mono">{c.rank}</span>
                    <p className="text-neutral-300 mt-0.5">{c.name}</p>
                  </div>
                  <span className="text-neutral-600 font-mono shrink-0">{c.term}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
