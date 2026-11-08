import React from 'react';
import { TESTIMONIALS } from '../data/defaultContent';
import { Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-2">
            Executive Endorsements
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-neutral-50 tracking-tight [text-wrap:balance]">
            Trusted by Visionary Patrons & Global Enterprise Leaders
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base">
            Verified accounts from leaders who entrusted our studio with their most significant spatial commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-xl bg-neutral-50/70 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-500/50" />
                <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.impactMetric}</span>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-950 dark:text-neutral-100 text-sm">
                    {item.author}
                  </h4>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.role}, {item.organization}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
