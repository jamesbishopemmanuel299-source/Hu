import React from 'react';
import { useBrand } from '../context/BrandContext';
import { X, CheckCircle2, Clock, BarChart3, ArrowRight } from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { selectedService, closeServiceDetail, openConsultation } = useBrand();

  if (!selectedService) return null;

  const handleInquire = () => {
    const serviceName = selectedService.title;
    closeServiceDetail();
    openConsultation(serviceName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700/80 text-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header bar */}
        <div className="relative aspect-[16/8] overflow-hidden bg-neutral-950 shrink-0">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          <button
            onClick={closeServiceDetail}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-950/70 hover:bg-neutral-900 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono uppercase text-amber-400">
              Discipline {selectedService.number} · {selectedService.badgeText}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white mt-0.5">
              {selectedService.title}
            </h3>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
              Discipline Overview
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-neutral-800">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <div className="text-[11px] text-neutral-400">Execution Horizon</div>
                <div className="text-xs font-semibold text-white">{selectedService.timeline}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <div className="text-[11px] text-neutral-400">Track Record Metric</div>
                <div className="text-xs font-semibold text-white">{selectedService.stat} ({selectedService.statLabel})</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-3">
              Comprehensive Phase Deliverables
            </h4>
            <div className="space-y-2.5">
              {selectedService.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={closeServiceDetail}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleInquire}
            className="px-5 py-2.5 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Inquire for this Discipline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
