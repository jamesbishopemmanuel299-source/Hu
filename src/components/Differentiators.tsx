import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Compass, Scale, Shield, Leaf, Check } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const { company } = useBrand();

  const pillars = [
    {
      number: '01',
      icon: Compass,
      title: 'Unified Architectural & Engineering Stewardship',
      description: 'Unlike fragmented traditional models where architects and engineers dispute site discrepancies, our studio maintains single-source end-to-end accountability from initial schematic through final handover.',
      guarantee: 'Eliminates design-to-build discrepancies and finger-pointing.',
    },
    {
      number: '02',
      icon: Scale,
      title: 'Fixed-Price Capital Certainty & BIM Precision',
      description: 'We deploy comprehensive Building Information Modeling with 1:1 real-time cost integration before site mobilization, providing institutional-grade transparency and guarding against speculative budget escalations.',
      guarantee: 'Zero unapproved scope creep or concealed contractor surcharges.',
    },
    {
      number: '03',
      icon: Leaf,
      title: 'Embodied Carbon & Biophilic Material Purity',
      description: 'Every stone monolith, structural timber member, and glass envelope is certified for structural longevity and environmental purity. We target LEED Platinum and Net-Zero standards as baseline expectations.',
      guarantee: 'Verified lifecycle carbon modeling and sustainable procurement.',
    },
    {
      number: '04',
      icon: Shield,
      title: 'Global Statutory Mastery & Discretion',
      description: 'With successful commissions spanning North America, the United Kingdom, Switzerland, and the Mediterranean, our regulatory team navigates stringent historic preservation and municipal zoning covenants effortlessly.',
      guarantee: '100% statutory zoning compliance record across 140+ projects.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-2">
            The {company.name} Distinction
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-neutral-50 tracking-tight [text-wrap:balance]">
            Why Discerning Clients Entrust Their Vision to Our Studio
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            Monumental architecture demands more than aesthetic talent. It requires mathematical discipline, material integrity, and relentless execution rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="p-8 rounded-xl bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-amber-400/10 dark:bg-amber-400/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-medium text-neutral-300 dark:text-neutral-700">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-neutral-950 dark:text-neutral-100 mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  <Check className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{pillar.guarantee}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
