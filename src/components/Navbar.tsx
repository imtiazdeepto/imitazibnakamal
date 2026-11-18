import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'About me', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/projects#skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        
        {/* Monogram Logo (IK) */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className={`w-10 h-10 flex items-center justify-center font-display font-extrabold text-xl tracking-tighter transition-colors ${
            isHome ? 'text-black lg:text-black' : 'text-white'
          }`}>
            <svg className="w-8 h-8 transition-transform group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20 22H36V78H20V22Z" />
              <path d="M44 22H58L78 48L62 48L44 22Z" />
              <path d="M58 52L80 78H64L44 54L58 52Z" />
              <path d="M28 16H80V22H28V16Z" />
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors py-1 ${
                  isActive 
                    ? 'text-white font-semibold border-b-2 border-white' 
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Tomasz Gajda Signature Pill Button: CONTACT ME */}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-md active:scale-95"
          >
            CONTACT ME
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-white bg-black/40 backdrop-blur-md border border-neutral-700 z-50"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0c0c0c]/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-6 px-6 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-neutral-200 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wider uppercase shadow-xl"
          >
            CONTACT ME
          </Link>
          <a
            href="/imtiazcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-xs text-neutral-400 hover:text-white flex items-center gap-1.5"
          >
            <FileText size={14} />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
};
