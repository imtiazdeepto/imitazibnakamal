import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResearchPage } from './pages/ResearchPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Instant scroll to top first, then handle hash after DOM settles
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Hash navigation: wait for page to render, then scroll
    const id = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const offset = 80; // navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0c0c] text-white">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
