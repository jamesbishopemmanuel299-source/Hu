import React from 'react';
import { useBrand } from '../context/BrandContext';
import { ArrowUp, Sliders } from 'lucide-react';

export const Footer: React.FC = () => {
  const { company, setIsCustomizerOpen } = useBrand();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="font-editorial text-2xl text-white tracking-tight inline-block">
              {company.name}
            </a>
            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              {company.subheadline}
            </p>
            <div className="pt-2 text-[11px] text-neutral-500">
              RIBA Chartered Practice · AIA International · Swiss SIA Registered
            </div>
          </div>

          {/* Nav Mirror Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono uppercase text-neutral-200 text-[11px] tracking-wider">
              Disciplines
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Private Villas</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial HQ</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Biophilic Architecture</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Spatial Masterplanning</a></li>
            </ul>
          </div>

          {/* Navigation Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono uppercase text-neutral-200 text-[11px] tracking-wider">
              Studio
            </div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Heritage & Ethos</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Selected Works</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Initiate Inquiry</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono uppercase text-neutral-200 text-[11px] tracking-wider">
              Studio Locations
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              <strong className="text-neutral-200">London:</strong> {company.address}
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed">
              <strong className="text-neutral-200">New York:</strong> {company.secondaryAddress}
            </p>
            <div className="pt-2 flex items-center gap-4 text-neutral-300">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-neutral-700">/</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                Instagram
              </a>
              <span aria-hidden="true" className="text-neutral-700">/</span>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                X (Twitter)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span>Architectural & Spatial Planning</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="inline-flex items-center gap-1 text-amber-400/90 hover:text-amber-300 cursor-pointer"
            >
              <Sliders className="w-3 h-3" />
              <span>Customize Company Name & Info</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
