import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#080808] border-t border-[#1a1a1a] py-12 px-6 lg:px-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Monogram + Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white text-black font-display font-extrabold flex items-center justify-center text-sm">
            IK
          </div>
          <div>
            <p className="font-semibold text-white text-sm">{profileData.name}</p>
            <p className="text-neutral-500">{profileData.role}</p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/research" className="hover:text-white transition-colors">Publications</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects & Skills</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Social Badges & Resume */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={profileData.socials.researchgate}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors"
            aria-label="ResearchGate"
          >
            <BookOpen size={15} />
          </a>
          <a
            href={profileData.socials.email}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
          <a
            href="/imtiazcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-1.5 font-medium"
          >
            <FileText size={14} />
            <span>CV</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-[11px] gap-3">
        <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with high-contrast dual-tone architecture • Software Engineering & Medical AI
        </p>
      </div>
    </footer>
  );
};
