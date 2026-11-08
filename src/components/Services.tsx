import React from 'react';
import { useBrand } from '../context/BrandContext';
import { SERVICES } from '../data/defaultContent';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const { openServiceDetail, openConsultation } = useBrand();

  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-2">
              Bespoke Disciplines
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-neutral-50 tracking-tight [text-wrap:balance]">
              Comprehensive Architectural & Spatial Capabilities
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base max-w-md">
            From visionary private residential retreats to landmark enterprise headquarters, every commission is governed by single-source creative stewardship.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/70 hover:border-amber-400/50 dark:hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                
                {/* Clean unboxed metadata overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-amber-400 tracking-wider">{service.number} // {service.badgeText}</span>
                  <span className="text-neutral-300">{service.stat} · {service.statLabel}</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl text-neutral-950 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Core Deliverables Preview */}
                <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    onClick={() => openServiceDetail(service)}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-amber-400 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Scope & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openConsultation(service.title)}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-md bg-neutral-900 text-white dark:bg-neutral-800 dark:text-neutral-100 hover:bg-amber-400 hover:text-neutral-950 dark:hover:bg-amber-400 dark:hover:text-neutral-950 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
