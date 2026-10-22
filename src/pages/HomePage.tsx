import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS, SERVICES_DATA, TECHNICAL_STANDARDS } from '../data/companyData';
import { PerimeterCalculator } from '../components/PerimeterCalculator';
import {
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  CheckCircle2,
  Cpu,
  Layers,
  Wrench,
  SunMedium,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 lg:pb-20 border-b border-slate-900">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-950/20 via-blue-950/10 to-transparent pointer-events-none -z-10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Regional Location Marker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-cyan-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>39 Mile Post, Galgamuwa 60700, Sri Lanka</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Engineered Electric Fence Constructions &amp; Industrial Electrical Services
              </h1>

              {/* Proposition Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Specialized in heavy-duty agricultural wildlife barrier fencing, solar energizer stations, commercial perimeter defense, and industrial electrical installations throughout Sri Lanka.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={COMPANY_DETAILS.phoneDial}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-lg shadow-cyan-950 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
                </a>

                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              {/* Grounded Trust / Fact Strip (Strictly objective, no invented claims) */}
              <div className="pt-6 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>High-Tensile Galv Wire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dry-Zone Earth Arrays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Solar Off-Grid Power</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                <img
                  src="/src/assets/images/perimeter_electric_fence_1792646340343.jpg"
                  alt="High-tensile perimeter electric fence installation"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                {/* Image Overlay Information */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-xs">
                  <div className="flex items-center justify-between text-cyan-300 font-semibold mb-1">
                    <span>Engineered Perimeter Security</span>
                    <span className="font-mono text-[11px] text-slate-400">Class A Galvanized</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Multi-strand energized barrier design configured with heavy-duty strainers, pulse control, and grounding.
                  </p>
                  <p className="text-[10px] text-slate-400 italic mt-1.5 pt-1 border-t border-slate-800/80">
                    Representative visual of structural high-tensile perimeter fence assembly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (BENTO / EDITORIAL LIST) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-900">
          <div>
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              Specialized Divisions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Core Engineering Services
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
          >
            <span>View All Detailed Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 3).map((service, idx) => (
            <div
              key={service.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <Cpu className="w-5 h-5" />}
                    {idx === 2 && <SunMedium className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}.</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">·</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  <span>Technical Data &amp; Wire Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE ESTIMATOR & CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PerimeterCalculator />
      </section>

      {/* 4. TECHNICAL ENGINEERING STANDARDS (Grounded in Sri Lankan Reality) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              Quality &amp; Safety Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Engineering Disciplines Suited to Sri Lanka's Climate
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Fence effectiveness in dry zones requires specialized soil conductivity treatment, high-strain structural corner posts, and non-lethal regulated pulsing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNICAL_STANDARDS.map((std, sIdx) => (
              <div key={sIdx} className="space-y-2">
                <div className="text-cyan-400 font-mono text-xs font-semibold">
                  0{sIdx + 1}. SPECIFICATION
                </div>
                <h4 className="text-base font-bold text-white">{std.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION & REGIONAL REACH STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
              <MapPin className="w-4 h-4" />
              <span>Galgamuwa Strategic Facility</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Centrally Positioned in the Kurunegala Agricultural Corridor
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Located at 39 Mile Post, Galgamuwa, we provide rapid mobilization for agricultural perimeter projects, plantation security, and industrial facilities across North Western, North Central, and adjacent districts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={COMPANY_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Get Google Maps Directions</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Contact Our Office</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
