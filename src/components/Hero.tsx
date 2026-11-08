import React from 'react';
import { useBrand } from '../context/BrandContext';
import { HERO_IMAGE } from '../data/defaultContent';
import { ArrowUpRight, ShieldCheck, Compass, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { company, openConsultation } = useBrand();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Subtitle / Domain Context */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-4">
          <span>{company.industry}</span>
          <span aria-hidden="true" className="text-neutral-400">·</span>
          <span>Est. {company.foundedYear}</span>
          <span aria-hidden="true" className="text-neutral-400">·</span>
          <span>London · New York · Zurich</span>
        </div>

        {/* Hero Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-neutral-950 dark:text-neutral-50 tracking-tight leading-[1.08] [text-wrap:balance]">
              {company.tagline}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              {company.subheadline}
            </p>

            {/* CTA Action Block */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openConsultation()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap shrink-0 group"
              >
                <span>Schedule Discovery Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 bg-transparent hover:bg-neutral-200/60 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                View Commissioned Works
              </a>
            </div>

            {/* Trust Signifiers */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Fixed-Price Capital Certainty</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Turnkey Architectural Stewardship</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Net-Zero Environmental Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl group bg-neutral-900 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
              <img
                src={HERO_IMAGE}
                alt={`${company.name} Architectural Design Pavilion at Dusk`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />
              
              {/* Overlay Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-neutral-950/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium tracking-wide">The Solarium Pavilion</p>
                  <p className="text-[11px] text-neutral-300">Titanium-zinc & honed limestone commission</p>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                  Private Estate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Metric Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-100 font-normal tabular-nums">
              $1.4B+
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Completed Asset Value
            </div>
          </div>
          <div>
            <div className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-100 font-normal tabular-nums">
              140+
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Global Commissions
            </div>
          </div>
          <div>
            <div className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-100 font-normal tabular-nums">
              98.4%
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              On-Time Schedule Delivery
            </div>
          </div>
          <div>
            <div className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-100 font-normal tabular-nums">
              24
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              International Design Honors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
