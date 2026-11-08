import React, { useState } from 'react';
import { FAQS } from '../data/defaultContent';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-2">
            Advisory & Process Inquiries
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 tracking-tight [text-wrap:balance]">
            Frequently Addressed Questions
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm">
            Everything you need to know about our commissioning process, fee structures, and international execution.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-colors"
                >
                  <span className="font-medium text-neutral-950 dark:text-neutral-100 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
