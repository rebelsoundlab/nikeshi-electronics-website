import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync state with URL hash for clean navigation and back-button support on static hosts
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'services', 'projects', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update dynamic SEO page titles per page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'NIKESHI ELECTRONICS & FENCE CONSTRUCTIONS (PVT) LTD | Galgamuwa, Sri Lanka',
      about: 'About Us & Engineering Standards | NIKESHI ELECTRONICS (PVT) LTD',
      services: 'Electric Fencing & Industrial Electrical Services | NIKESHI ELECTRONICS',
      projects: 'Projects & Installation Standards Gallery | NIKESHI ELECTRONICS',
      contact: 'Contact Us & Location Map | NIKESHI ELECTRONICS Galgamuwa',
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Comprehensive Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Direct Contact Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
