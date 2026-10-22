import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS, TECHNICAL_STANDARDS } from '../data/companyData';
import {
  ShieldCheck,
  MapPin,
  Phone,
  MessageSquare,
  CheckCircle2,
  Wrench,
  SunMedium,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="border-b border-slate-900 bg-slate-950/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Company Profile &amp; Engineering Focus</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              About NIKESHI ELECTRONICS &amp; FENCE CONSTRUCTIONS (PVT) LTD
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Based at 39 Mile Post, Galgamuwa in the North Western Province of Sri Lanka, we provide specialized perimeter electric fencing, solar energizer stations, and industrial electrical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Profile & Context (Grounded, Transparent, No Fabrications) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Practical Engineering for Sri Lanka's Demanding Environments
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                In agricultural regions like Galgamuwa, Kurunegala, and the North Central dry belt, landowners and farming communities face constant wildlife pressure on cultivation, alongside the critical need for safe human-elephant coexistence. Conventional fences are easily breached or deteriorate rapidly under intense tropical sun and seasonal torrential rains.
              </p>
              <p>
                <strong className="text-white">NIKESHI ELECTRONICS &amp; FENCE CONSTRUCTIONS (PVT) LTD</strong> focuses on robust, field-tested fence engineering. We deploy heavy-gauge galvanized high-tensile wire, reinforced corner strainer posts, certified safe-pulse energizers, and multi-rod low-resistance earthing grids configured specifically for high-resistivity dry-zone soils.
              </p>
              <p>
                In addition to agricultural perimeter fencing, our team provides commercial security fencing for industrial yards, factory compounds, and warehouses, as well as industrial electrical wiring, 3-phase switchgear distribution, and off-grid solar energizer power units.
              </p>
            </div>

            {/* Direct Operational Transparency */}
            <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2 text-xs">
              <span className="font-semibold text-cyan-400 uppercase tracking-wider block">
                Our Commitment to Factual Transparency
              </span>
              <p className="text-slate-300 leading-relaxed">
                We believe in genuine engineering integrity. We do not invent exaggerated claims, inflated figures, or unverified claims. Every project proposal is based on actual site topography, perimeter distance, soil conductivity measurements, and client operational requirements.
              </p>
            </div>
          </div>

          {/* Right Column: Key Operational Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-800">
                Operational Highlights
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyan-950/70 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Operating Location</span>
                    <span className="text-slate-400">
                      39 Mile Post, Galgamuwa 60700, Kurunegala District, Sri Lanka.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyan-950/70 text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Direct Inquiries</span>
                    <a
                      href={COMPANY_DETAILS.phoneDial}
                      className="text-cyan-400 hover:underline font-mono text-xs"
                    >
                      {COMPANY_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyan-950/70 text-cyan-400 shrink-0">
                    <SunMedium className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Off-Grid Solar Capability</span>
                    <span className="text-slate-400">
                      Autonomous battery-backed solar stations for areas without CEB electricity.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-cyan-950/70 text-cyan-400 shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Full Installation Lifecycle</span>
                    <span className="text-slate-400">
                      Perimeter survey, post fabrication, wire tensioning, earthing array, and ongoing line maintenance.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Representative Visual Card */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src="/src/assets/images/agricultural_fence_1792646325269.jpg"
                alt="Agricultural perimeter fence assembly"
                referrerPolicy="no-referrer"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 text-[11px] text-slate-400 bg-slate-950/80">
                <span className="font-medium text-slate-300">Agricultural Boundary Standard:</span> High-tensile galvanized strands with yellow warning signs and engineered ground clearance. (Representative illustrative visual).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Disciplines & Material Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900 pt-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              Standards &amp; Materials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Quality Construction Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded bg-cyan-950/80 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h4 className="text-base font-bold text-white">Class A High-Tensile Wire</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We utilize 2.5mm high-tensile steel wire with heavy hot-dip zinc coating (Class A). This prevents premature sagging under animal impact and resists oxidation from monsoonal weather.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded bg-cyan-950/80 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h4 className="text-base font-bold text-white">Reinforced Concrete Strainers</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                End and corner assemblies withstand hundreds of kilograms of cumulative tension. Posts are anchored into deep concrete pads with diagonal stays to maintain line geometry for years.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded bg-cyan-950/80 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h4 className="text-base font-bold text-white">Dry-Zone Multi-Rod Earthing</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Because dry soil acts as an electrical insulator, we construct interconnected parallel ground arrays using 5/8" copper-bonded rods treated with moisture-retaining Bentonite compound.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded bg-cyan-950/80 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                04
              </div>
              <h4 className="text-base font-bold text-white">Non-Lethal Safe Pulse Energizers</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Electric fence safety is paramount. All installed energizers produce discrete, millisecond-short pulses designed to deliver an unforgettable psychological deterrent without causing permanent injury.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded bg-cyan-950/80 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                05
              </div>
              <h4 className="text-base font-bold text-white">Dual Lightning Divertors</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sri Lanka's inter-monsoonal thunder periods bring frequent atmospheric lightning. We place dedicated choke coils and surge bypass kits to direct strikes safely away from energizer circuitry.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded bg-cyan-950/80 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                06
              </div>
              <h4 className="text-base font-bold text-white">Field Diagnostics &amp; Servicing</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Electric fences require periodic line inspections. We conduct digital kV testing along the full fence line, pinpointing vegetation leakage, broken porcelain, or grounding shorts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Discuss Your Agricultural or Commercial Perimeter Requirements
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Contact our Galgamuwa office for site assessment guidance, equipment options, and technical consultations.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_DETAILS.phoneDial}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 077 420 0364</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
