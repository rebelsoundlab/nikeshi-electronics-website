import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { COMPANY_DETAILS, PROJECTS_GALLERY } from '../data/companyData';
import {
  Layers,
  MapPin,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Info,
  SlidersHorizontal,
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
}

type FilterCategory = 'all' | 'agricultural' | 'commercial' | 'solar' | 'electrical';

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((p) => p.category === filter);

  const handleProjectInquiry = (project: ProjectItem) => {
    const text = encodeURIComponent(
      `Hello Nikeshi Electronics, I am reviewing your project portfolio and would like to inquire about specifications similar to "${project.title}" (${project.categoryLabel}).`
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
              <Layers className="w-4 h-4" />
              <span>Technical Showcase &amp; Installation Standards</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Projects &amp; Engineering Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Examine representative configurations, hardware assemblies, and structural layout standards for agricultural electric fences, perimeter security, and electrical installations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Disclaimer Banner (Strictly complying with prompt requirement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1">
            <p className="font-semibold text-white">
              Portfolio &amp; Imagery Transparency Notice:
            </p>
            <p className="text-slate-400">
              In accordance with our commitment to honest commercial representation, visual imagery shown across this demo represents standard engineering builds, enclosure types, and technical configurations rather than unverified claims. Actual site photos, client property references, and on-site engineering surveys are coordinated privately during technical consultations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Filter Tabs & Project Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Interactive Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-900">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Filter by Discipline:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS_GALLERY.length})
            </button>
            <button
              onClick={() => setFilter('agricultural')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                filter === 'agricultural'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Agricultural Boundaries
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                filter === 'commercial'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Commercial Perimeter
            </button>
            <button
              onClick={() => setFilter('solar')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                filter === 'solar'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Solar Energizers
            </button>
            <button
              onClick={() => setFilter('electrical')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                filter === 'electrical'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Electrical Panels
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              {/* Image with Tag Overlay */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Discrete Label in bottom corner */}
                <div className="absolute top-3 right-3 text-[11px] font-mono px-2.5 py-1 bg-slate-950/80 border border-slate-800 text-cyan-300 rounded backdrop-blur-sm">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-xs">
                  <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span className="font-mono text-cyan-300">{project.perimeterScale}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    {project.description}
                  </p>

                  {/* Specifications */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Key Technical Details:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.specifications.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Transparency Caption on each card */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <p className="text-[10px] text-slate-500 italic">
                    {project.imageNote}
                  </p>
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleProjectInquiry(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire About This Setup</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Get Quotation</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Consultation Prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Planning a Perimeter Fence for Your Acreage?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              We arrange on-site preliminary surveys in Galgamuwa and surrounding agricultural zones to measure terrain resistance and determine optimal wire strand clearance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_DETAILS.phoneDial}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call 077 420 0364</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
