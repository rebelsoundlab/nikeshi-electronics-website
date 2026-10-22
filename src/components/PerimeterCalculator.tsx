import React, { useState } from 'react';
import { Calculator, Zap, Shield, BatteryCharging, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

type TargetType = 'elephant' | 'wildboar' | 'commercial' | 'livestock';
type PowerSource = 'solar' | 'hybrid_mains';
type SoilCondition = 'dry_rocky' | 'standard_loam' | 'moist';

export const PerimeterCalculator: React.FC = () => {
  const [perimeterMeters, setPerimeterMeters] = useState<number>(1000);
  const [targetType, setTargetType] = useState<TargetType>('elephant');
  const [powerSource, setPowerSource] = useState<PowerSource>('solar');
  const [soilCondition, setSoilCondition] = useState<SoilCondition>('dry_rocky');

  // Calculation parameters based on technical fence engineering principles
  const getCalculationResults = () => {
    let wireStrands = 4;
    let postSpacing = 5.0; // meters
    let targetLabel = 'Elephant & Wildlife Boundary';

    if (targetType === 'elephant') {
      wireStrands = 4; // Standard high-tensile elephant barrier configuration in SL
      postSpacing = 4.5;
      targetLabel = 'Elephant & Large Wildlife Defense';
    } else if (targetType === 'wildboar') {
      wireStrands = 6; // Close bottom strand spacing
      postSpacing = 4.0;
      targetLabel = 'Wild Boar & Small Crop Pests';
    } else if (targetType === 'commercial') {
      wireStrands = 6;
      postSpacing = 3.5;
      targetLabel = 'Commercial Property Security';
    } else {
      wireStrands = 4;
      postSpacing = 5.0;
      targetLabel = 'Agricultural Livestock Containment';
    }

    const totalWireKm = ((perimeterMeters * wireStrands) / 1000).toFixed(2);
    const estimatedIntermediatePosts = Math.ceil(perimeterMeters / postSpacing);
    const estimatedStrainerPosts = Math.max(4, Math.ceil(perimeterMeters / 150) * 2);

    // Energy requirement: ~ 1 Joule per km of fence line with vegetation buffer
    const baseJoules = Math.max(2, Math.ceil((perimeterMeters / 1000) * 1.5));
    const recommendedJoules = baseJoules > 15 ? 15 : baseJoules;

    // Earth rod array recommendation based on soil
    let earthRods = 3;
    if (soilCondition === 'dry_rocky') {
      earthRods = Math.max(4, Math.ceil(recommendedJoules * 0.8));
    } else if (soilCondition === 'standard_loam') {
      earthRods = Math.max(3, Math.ceil(recommendedJoules * 0.5));
    } else {
      earthRods = 3;
    }

    // Solar sizing
    const solarPanelWatt = recommendedJoules <= 3 ? 50 : recommendedJoules <= 6 ? 80 : 120;
    const batteryCapacityAh = recommendedJoules <= 3 ? 40 : recommendedJoules <= 6 ? 70 : 100;

    return {
      wireStrands,
      totalWireKm,
      estimatedIntermediatePosts,
      estimatedStrainerPosts,
      recommendedJoules,
      earthRods,
      solarPanelWatt,
      batteryCapacityAh,
      targetLabel,
    };
  };

  const results = getCalculationResults();

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Nikeshi Electronics, I used your Fence Estimator for an inquiry:\n` +
      `- Application: ${results.targetLabel}\n` +
      `- Perimeter: ${perimeterMeters} meters\n` +
      `- Power Source: ${powerSource === 'solar' ? 'Off-Grid Solar System' : 'Hybrid Mains/Battery'}\n` +
      `- Soil: ${soilCondition}\n` +
      `- Est. Strands: ${results.wireStrands} strands (${results.totalWireKm} km wire)\n` +
      `- Est. Energizer: ~${results.recommendedJoules} Joules, ${results.earthRods} Earth Rods\n` +
      `Please provide engineering advice and a quotation.`
    );
    window.open(`https://wa.me/94774200364?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Technical Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Perimeter Fence &amp; Energizer Specifications Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Calculate estimated high-tensile wire quantity, pulse energizer capacity, solar power requirements, and earth rod configurations for your terrain in Sri Lanka.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Input Parameters Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Perimeter Length Slider & Number */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="perimeterInput" className="font-medium text-slate-300">
                Total Boundary Perimeter Length:
              </label>
              <div className="flex items-center gap-1.5 font-mono text-cyan-400 font-bold text-base">
                <span>{perimeterMeters.toLocaleString()}</span>
                <span className="text-xs text-slate-400 font-sans">Meters</span>
                <span className="text-xs text-slate-500 font-sans">
                  (~{((perimeterMeters / 1000) * 0.621).toFixed(2)} mi)
                </span>
              </div>
            </div>
            <input
              id="perimeterInput"
              type="range"
              min="200"
              max="6000"
              step="100"
              value={perimeterMeters}
              onChange={(e) => setPerimeterMeters(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>200m (Small Plot)</span>
              <span>1,500m (Medium Estate)</span>
              <span>3,500m (Large Farm)</span>
              <span>6,000m (Sector)</span>
            </div>
          </div>

          {/* 2. Target Application Selector */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">
              Protection Target &amp; Application:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setTargetType('elephant')}
                className={`p-3 text-left rounded-lg border transition-all ${
                  targetType === 'elephant'
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-white">Elephant &amp; Wildlife</div>
                <div className="text-[11px] text-slate-400 mt-0.5">4-strand high-tensile breakaway design</div>
              </button>

              <button
                type="button"
                onClick={() => setTargetType('wildboar')}
                className={`p-3 text-left rounded-lg border transition-all ${
                  targetType === 'wildboar'
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-white">Wild Boar &amp; Pests</div>
                <div className="text-[11px] text-slate-400 mt-0.5">6-strand low-clearance spacing</div>
              </button>

              <button
                type="button"
                onClick={() => setTargetType('commercial')}
                className={`p-3 text-left rounded-lg border transition-all ${
                  targetType === 'commercial'
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-white">Commercial Facility</div>
                <div className="text-[11px] text-slate-400 mt-0.5">High security wall-top or free-standing</div>
              </button>

              <button
                type="button"
                onClick={() => setTargetType('livestock')}
                className={`p-3 text-left rounded-lg border transition-all ${
                  targetType === 'livestock'
                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-white">Farm &amp; Livestock</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Standard perimeter containment</div>
              </button>
            </div>
          </div>

          {/* 3. Power Source & Soil Condition Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Power Availability:
              </label>
              <select
                value={powerSource}
                onChange={(e) => setPowerSource(e.target.value as PowerSource)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="solar">Autonomous Solar + Battery (Off-Grid)</option>
                <option value="hybrid_mains">230V CEB Grid + Battery Standby</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-300">
                Soil / Earthing Conditions:
              </label>
              <select
                value={soilCondition}
                onChange={(e) => setSoilCondition(e.target.value as SoilCondition)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="dry_rocky">Dry Zone / Rocky / Sandy Soil (Galgamuwa typical)</option>
                <option value="standard_loam">Standard Agricultural Loam / Cultivated</option>
                <option value="moist">Moist Soil / Wetland Border (Low Resistance)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calculation Output Card */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800/90 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Estimated Engineering Scope
              </span>
              <span className="text-xs font-mono px-2 py-0.5 bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 rounded">
                {results.wireStrands} Wires Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px]">Total High-Tensile Wire</span>
                <span className="text-lg font-bold font-mono text-white">
                  {results.totalWireKm} <span className="text-xs font-normal text-slate-400">km</span>
                </span>
                <p className="text-[10px] text-slate-500">2.5mm Class A Galvanized</p>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px]">Energizer Pulse Capacity</span>
                <span className="text-lg font-bold font-mono text-cyan-400">
                  ~{results.recommendedJoules} <span className="text-xs font-normal text-slate-400">Joules</span>
                </span>
                <p className="text-[10px] text-slate-500">Peak output ~8,500V</p>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px]">Earth Rod Array</span>
                <span className="text-lg font-bold font-mono text-white">
                  {results.earthRods} <span className="text-xs font-normal text-slate-400">Rods</span>
                </span>
                <p className="text-[10px] text-slate-500">Copper-bonded 5/8" x 6ft</p>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px]">
                  {powerSource === 'solar' ? 'Recommended Solar Setup' : 'Standby Battery'}
                </span>
                <span className="text-lg font-bold font-mono text-white">
                  {results.solarPanelWatt}W <span className="text-xs font-normal text-slate-400">/ {results.batteryCapacityAh}Ah</span>
                </span>
                <p className="text-[10px] text-slate-500">72-hr weather autonomy</p>
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-slate-300">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Structural Post Estimate:</span>
              </div>
              <p>
                Approx. <strong className="text-white font-mono">{results.estimatedIntermediatePosts}</strong> intermediate line posts + <strong className="text-white font-mono">{results.estimatedStrainerPosts}</strong> heavy corner strainer assemblies with concrete footing.
              </p>
            </div>
          </div>

          <div className="pt-5 mt-4 border-t border-slate-800/80">
            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-emerald-950"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire About This Setup via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <p className="text-[10px] text-slate-500 text-center mt-2">
              Opens WhatsApp with pre-filled technical estimate for our engineering team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
