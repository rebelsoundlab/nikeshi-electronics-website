import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, MapPin, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-300">
      {/* Top action strip */}
      <div className="border-b border-slate-900/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                Direct Technical Assistance &amp; Inquiries
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Require Perimeter Protection or Electrical Engineering?
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_DETAILS.phoneDial}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                NIKESHI ELECTRONICS
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {COMPANY_DETAILS.legalName} provides engineered agricultural electric fencing, solar energizer stations, commercial perimeter security, and industrial electrical installations in Sri Lanka.
            </p>
            <div className="text-xs text-slate-500 pt-2 border-t border-slate-900">
              <span className="block font-medium text-slate-400 mb-0.5">Operational Center:</span>
              Galgamuwa, Kurunegala District, North Western Province
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Website Directory
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-400 transition-colors text-slate-400"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-400 transition-colors text-slate-400"
                >
                  About Us &amp; Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-400 transition-colors text-slate-400"
                >
                  Engineering Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-cyan-400 transition-colors text-slate-400"
                >
                  Projects &amp; Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-400 transition-colors text-slate-400"
                >
                  Contact &amp; Location Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">·</span>
                <span>Elephant &amp; Wildlife Agricultural Electric Fencing</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">·</span>
                <span>Stand-alone Solar Energizers &amp; Battery Arrays</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">·</span>
                <span>Commercial Wall-top &amp; Compound Security</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">·</span>
                <span>Dry-Zone Low Resistance Earth Rod Systems</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-cyan-400 font-bold">·</span>
                <span>3-Phase Industrial Distribution Boards</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Registered Facility
            </h4>
            <div className="text-xs space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{COMPANY_DETAILS.address}</p>
                  <a
                    href={COMPANY_DETAILS.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 underline mt-1 text-xs"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={COMPANY_DETAILS.phoneDial}
                  className="font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  WhatsApp: +94 77 420 0364
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 leading-normal">
                <span className="font-semibold text-slate-400">Email Status:</span> Official email address will be published upon corporate verification completion.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Galgamuwa 60700</span>
            <span>·</span>
            <span>Sri Lanka</span>
            <span>·</span>
            <span className="text-slate-400">Demo Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
