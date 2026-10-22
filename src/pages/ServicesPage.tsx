import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/companyData';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  SunMedium,
  Zap,
  Building2,
  ShieldAlert,
  Activity,
  Wrench,
  HelpCircle,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'agricultural-fencing':
        return <ShieldAlert className="w-5 h-5" />;
      case 'commercial-perimeter':
        return <Building2 className="w-5 h-5" />;
      case 'solar-energizers':
        return <SunMedium className="w-5 h-5" />;
      case 'electrical-installations':
        return <Zap className="w-5 h-5" />;
      case 'earthing-maintenance':
        return <Activity className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const handleServiceWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello Nikeshi Electronics, I would like to inquire regarding your service: "${serviceTitle}". Please share technical details and availability.`
    );
    window.open(`https://wa.me/94774200364?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="border-b border-slate-900 bg-slate-950/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Wrench className="w-4 h-4" />
              <span>Technical Capabilities &amp; Installations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering Services &amp; Fence Construction
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our complete range of high-tensile electric fencing, autonomous solar energizer systems, commercial perimeter protection, and industrial electrical wiring in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Service Explorer & Technical Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-1">
              Select Service Category
            </h3>
            {SERVICES_DATA.map((service, index) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40 text-white'
                      : 'bg-slate-950/60 border-slate-850 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {getServiceIcon(service.id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-400">0{index + 1}.</span>
                      <span className="text-sm font-bold text-white leading-snug">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Quick Contact Box on Left */}
            <div className="p-5 mt-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3 text-xs">
              <span className="font-semibold text-slate-300 block">Need a Custom Specification?</span>
              <p className="text-slate-400">
                Call our technical team in Galgamuwa to discuss your specific perimeter and terrain needs.
              </p>
              <a
                href={COMPANY_DETAILS.phoneDial}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Service Detail Panel */}
          <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Title & Description */}
            <div className="space-y-3 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                {getServiceIcon(activeService.id)}
                <span>TECHNICAL SPECIFICATION SHEET</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {activeService.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeService.fullDesc}
              </p>
            </div>

            {/* Visual Card if available */}
            {activeService.image && (
              <div className="rounded-xl overflow-hidden border border-slate-800 relative bg-slate-950">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="p-3 bg-slate-950/90 text-[11px] text-slate-400 border-t border-slate-800">
                  <span className="font-semibold text-slate-300">Technical Assembly Illustration:</span> Visual representation of {activeService.title.toLowerCase()} setup and hardware standard.
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Core Engineering Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {activeService.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-850 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Technical Specifications &amp; Parameters
              </h4>
              <div className="rounded-xl overflow-hidden border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono text-[11px]">
                    <tr>
                      <th className="py-3 px-4 font-semibold">PARAMETER / COMPONENT</th>
                      <th className="py-3 px-4 font-semibold">ENGINEERING STANDARD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {activeService.specs.map((spec, sIdx) => (
                      <tr key={sIdx} className="hover:bg-slate-950/50">
                        <td className="py-3 px-4 font-medium text-slate-300">
                          {spec.label}
                        </td>
                        <td className="py-3 px-4 font-mono text-cyan-300">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Typical Applications */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Typical Field Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeService.applications.map((app, aIdx) => (
                  <span
                    key={aIdx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquiry Action Bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => handleServiceWhatsApp(activeService.title)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About {activeService.title}</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>Request Formal Site Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP INSTALLATION WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900 pt-12">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              Deployment Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Our 5-Stage Project Execution Workflow
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From preliminary boundary walk-through to ground resistance testing, every project is handled methodically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-mono text-xs font-bold">01. SURVEY</span>
              <h4 className="text-sm font-bold text-white">Perimeter &amp; Soil Audit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Site boundary verification, corner tension analysis, terrain gradient evaluation, and soil resistivity testing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-mono text-xs font-bold">02. DESIGN</span>
              <h4 className="text-sm font-bold text-white">System Specification</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Wire strand count selection, post spacing, energizer Joule sizing, and solar PV battery autonomy calculation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-mono text-xs font-bold">03. CIVIL</span>
              <h4 className="text-sm font-bold text-white">Posts &amp; Anchoring</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Heavy strainer post footing in concrete, intermediate line post alignment, and stay assemblies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-mono text-xs font-bold">04. STRINGING</span>
              <h4 className="text-sm font-bold text-white">Wire &amp; Insulators</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-tensile wire tensioning with inline ratchets, UV insulator mounting, and breakaway safety spring loops.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-mono text-xs font-bold">05. TESTING</span>
              <h4 className="text-sm font-bold text-white">Earthing &amp; Handover</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-rod ground field installation, peak pulse verification across furthest points, and warning signage mounting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
