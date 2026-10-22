import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Zone 1 (Wordmark) - Zone 2 (5 Nav Links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element, no subtitle clutter) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
            aria-label="NIKESHI ELECTRONICS Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />
            </div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white whitespace-nowrap">
              NIKESHI ELECTRONICS
            </span>
          </button>

          {/* Zone 2: 5 Nav Links (Single-line, clean text with active indicator) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Direct Phone Button) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_DETAILS.phoneDial}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm shadow-cyan-400/20 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_DETAILS.phoneDial}
              className="p-2 text-cyan-400 hover:text-cyan-300 bg-slate-900 border border-slate-800 rounded-lg"
              title="Call Now"
              aria-label="Call Phone"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="py-2 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={COMPANY_DETAILS.phoneDial}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
