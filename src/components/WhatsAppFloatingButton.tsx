import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
      {/* Quick Direct Call Button */}
      <a
        href={COMPANY_DETAILS.phoneDial}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 hover:text-cyan-300 shadow-lg text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        title={`Call ${COMPANY_DETAILS.phoneDisplay}`}
        aria-label="Direct Phone Call"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        <span className="hidden sm:inline">077 420 0364</span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 font-semibold text-xs transition-all hover:scale-105 active:scale-95 group"
        title="Chat on WhatsApp (+94 77 420 0364)"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
};
