import React from 'react';
import { useBrand } from '../context/BrandContext';
import { X, MapPin, Calendar, Maximize2, Award, ArrowRight } from 'lucide-react';

export const ProjectDetailModal: React.FC = () => {
  const { selectedProject, closeProjectDetail, openConsultation } = useBrand();

  if (!selectedProject) return null;

  const handleInquire = () => {
    const projectName = selectedProject.title;
    closeProjectDetail();
    openConsultation(`Commission inquiry inspired by ${projectName}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700/80 text-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Visual Hero */}
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-950 shrink-0">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
          <button
            onClick={closeProjectDetail}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-950/70 hover:bg-neutral-900 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-white">
              {selectedProject.title}
            </h3>
            <div className="flex items-center gap-3 text-xs text-neutral-300 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {selectedProject.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {selectedProject.year}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 font-mono text-amber-400">
                <Maximize2 className="w-3.5 h-3.5" />
                {selectedProject.area}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative and highlights */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
              Architectural Concept & Context
            </h4>
            <p className="text-sm text-neutral-200 leading-relaxed">
              {selectedProject.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Distinction & Certification
              </div>
              <div className="text-xs text-neutral-200 mt-0.5">
                {selectedProject.highlight}
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-4">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
              Commission Specifications
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300">
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 block text-[11px]">Typology</span>
                <span className="capitalize font-medium text-white">{selectedProject.category} Commission</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 block text-[11px]">Primary Materials</span>
                <span className="font-medium text-white">Limestone · CLT Timber · Titanium-Zinc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={closeProjectDetail}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleInquire}
            className="px-5 py-2.5 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Commission Similar Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
