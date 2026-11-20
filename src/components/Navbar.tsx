import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Add backdrop when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/projects', hash: '#skills' },
  ];

  const logoColor = isHome && !scrolled ? 'text-black' : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full navbar-backdrop ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

          {/* Monogram Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 group z-50 ${logoColor} transition-colors duration-200`}
            aria-label="Home"
          >
            <svg
              className="w-8 h-8 transition-transform duration-200 group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18 20H34V80H18V20Z" />
              <path d="M42 20H56L76 48H60L42 20Z" />
              <path d="M56 52L78 80H62L42 56L56 52Z" />
              <path d="M26 14H80V20H26V14Z" />
            </svg>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path &&
                (!link.hash || location.hash === link.hash);
              return (
                <Link
                  key={link.name}
                  to={link.hash ? `${link.path}${link.hash}` : link.path}
                  className={`text-sm font-medium transition-colors duration-150 relative py-1 ${
                    isActive
                      ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wide uppercase hover:bg-neutral-100 active:scale-95 transition-all duration-150 shadow-sm"
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(v => !v)}
            className="md:hidden relative z-50 p-2 rounded-lg text-white bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer — separate from header to avoid z-index conflicts */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center items-center gap-5 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.hash ? `${link.path}${link.hash}` : link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-neutral-200 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide uppercase shadow-lg"
          >
            Contact Me
          </Link>
          <a
            href="/imtiazcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-200 transition-colors"
          >
            <FileText size={14} />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </>
  );
};
