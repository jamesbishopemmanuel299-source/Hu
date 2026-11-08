import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { PROJECTS } from '../data/defaultContent';
import { ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { openProjectDetail } = useBrand();
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'sustainable'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const categories = [
    { key: 'all', label: 'All Commissions' },
    { key: 'residential', label: 'Private Residences' },
    { key: 'commercial', label: 'Flagship Headquarters' },
    { key: 'sustainable', label: 'Biophilic & Sustainable' },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-2">
              Selected Works
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-neutral-50 tracking-tight [text-wrap:balance]">
              Commissioned Spatial Landmarks
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat.key
                    ? 'bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white shadow-sm font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectDetail(project)}
              className="group cursor-pointer rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/70 overflow-hidden hover:border-amber-400/50 dark:hover:border-amber-400/40 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent pointer-events-none" />

                {/* Corner Expand Cue */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-950/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-neutral-300 mb-1">
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-amber-400">{project.area}</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-medium tracking-wide">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description & Highlight */}
              <div className="p-6 space-y-3">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-xs text-amber-700 dark:text-amber-400 font-medium flex items-center gap-2 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{project.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
