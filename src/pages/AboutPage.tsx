import React from 'react';
import { GraduationCap, Award, Users, BookOpen, FileText, CheckCircle2, Trophy, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { competitiveProgramming } from '../data/skills';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
            Academic Background & Biography
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            About Me
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Bridging theoretical computer vision, lightweight deep learning algorithms, and real-world clinical software deployment.
          </p>
        </div>

        {/* 2-Column Hero Overview: Bio + Photo Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16 items-start">
          
          <div className="lg:col-span-2 space-y-5 text-neutral-300 text-sm leading-relaxed">
            <p className="text-base text-white font-medium">
              Hello! I am <strong className="text-white font-bold">{profileData.name}</strong>, a Software Engineering student majoring in Data Science at Daffodil International University in Dhaka, Bangladesh.
            </p>
            <p>
              My work focuses primarily on <strong>Medical Image Analysis & Segmentation</strong>, <strong>Knowledge Distillation & Model Compression</strong>, and <strong>Explainable AI (XAI)</strong>. I aim to solve a critical healthcare dilemma: deep learning diagnostic models have achieved superhuman benchmarks on paper, but their immense parameter sizes and "black-box" nature render them unusable in low-resource clinics lacking high-end GPUs.
            </p>
            <p>
              To tackle this, I design lightweight convolutional student networks, feature-fusion pipelines, and visual interpretability systems (SHAP, LIME, Grad-CAM++) that can run with sub-second latencies on standard CPU-based hospital machines.
            </p>
            <p>
              Alongside research, I actively lead contest environments as Deputy Executive Member of the <strong>ACM Wing</strong> at Daffodil International University, where I have mentored over 50 junior students in C++, competitive programming, and algorithmic optimization.
            </p>

            <div className="pt-3 flex items-center gap-4">
              <a
                href="/imtiazcv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-md flex items-center gap-2"
              >
                <FileText size={15} />
                <span>View Full Curriculum Vitae</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="p-6 rounded-2xl bg-[#141414] border border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-3">
              Quick Facts
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-neutral-500 block">Degree</span>
                <span className="text-neutral-200 font-medium">B.Sc. in Software Engineering</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Major</span>
                <span className="text-neutral-200 font-medium">Data Science</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Current CGPA</span>
                <span className="text-emerald-400 font-bold font-mono text-sm">3.80 / 4.00</span>
                <span className="text-[11px] text-neutral-500 block">4.00 / 4.00 in consecutive recent terms</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Expected Graduation</span>
                <span className="text-neutral-200 font-medium">July 2027</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Location</span>
                <span className="text-neutral-200 font-medium">{profileData.location}</span>
              </div>
            </div>
          </div>

        </div>


        {/* ─────────────────────────────────────────────────────────────
            EDUCATION SECTION
           ───────────────────────────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400">
              <GraduationCap size={18} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-display">Academic Education</h2>
              <p className="text-xs text-neutral-400">Formal engineering degrees and coursework</p>
            </div>
          </div>

          <div className="space-y-6">
            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-neutral-300 mt-0.5">
                      {edu.institution} • <span className="text-neutral-400">{edu.location}</span>
                    </p>
                    <p className="text-xs text-blue-400 font-medium mt-1">
                      {edu.major}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono">
                      {edu.period}
                    </span>
                    <p className="text-sm font-bold text-emerald-400 mt-2 font-mono">
                      {edu.cgpa}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-6 text-xs text-neutral-300">
                  {edu.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-neutral-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-[#1e1e1e] text-neutral-300 border border-neutral-800 font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>


        {/* ─────────────────────────────────────────────────────────────
            LEADERSHIP & ACADEMIC SERVICE
           ───────────────────────────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-800/60 flex items-center justify-center text-purple-400">
              <Users size={18} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-display">Leadership & Academic Service</h2>
              <p className="text-xs text-neutral-400">Mentorship, student community, and contest organization</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#141414] border border-neutral-800">
            {profileData.leadership.map((item, idx) => (
              <div key={idx}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {item.organization} • {item.location}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono w-fit">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-3 mt-4 text-xs text-neutral-300 leading-relaxed">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>


        {/* ─────────────────────────────────────────────────────────────
            HONORS & COMPETITIVE PROGRAMMING AWARDS
           ───────────────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400">
              <Trophy size={18} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-display">Honors, Hackathons & Contests</h2>
              <p className="text-xs text-neutral-400">Recognitions in competitive programming and applied data science</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.honors.map((honor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-neutral-500">{honor.date}</span>
                    <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/50">
                      Award
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1">
                    {honor.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium mt-0.5">
                    {honor.organization}
                  </p>
                  <p className="text-xs text-neutral-300 leading-relaxed mt-3">
                    {honor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Competitive Programming Handles */}
          <div className="mt-8 p-6 rounded-2xl bg-[#111111] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Terminal className="text-neutral-400" size={24} />
              <div>
                <h4 className="text-sm font-bold text-white">Competitive Programming Track Record</h4>
                <p className="text-xs text-neutral-400">Active algorithmic problem solver</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {competitiveProgramming.profiles.map((p, i) => (
                <div key={i} className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">{p.platform}</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-bold text-white font-mono">{p.rating}</span>
                    <span className="text-[10px] text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-900">{p.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
