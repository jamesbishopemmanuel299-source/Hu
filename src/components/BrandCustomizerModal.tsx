import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, RotateCcw, Check, Sparkles, Building, Phone, Mail, MessageSquare } from 'lucide-react';

export const BrandCustomizerModal: React.FC = () => {
  const {
    company,
    updateCompany,
    setPreset,
    resetToDefault,
    isCustomizerOpen,
    setIsCustomizerOpen,
  } = useBrand();

  const [name, setName] = useState(company.name);
  const [tagline, setTagline] = useState(company.tagline);
  const [industry, setIndustry] = useState(company.industry);
  const [phone, setPhone] = useState(company.phone);
  const [email, setEmail] = useState(company.email);
  const [whatsapp, setWhatsapp] = useState(company.whatsapp);
  const [address, setAddress] = useState(company.address);

  if (!isCustomizerOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompany({
      name,
      tagline,
      industry,
      phone,
      email,
      whatsapp,
      address,
    });
    setIsCustomizerOpen(false);
  };

  const applyPreset = (key: string) => {
    setPreset(key);
    setIsCustomizerOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-neutral-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-900 border-l border-neutral-800 text-white shadow-2xl h-full flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-editorial text-xl text-white">
                Brand & Company Settings
              </h3>
              <p className="text-[11px] text-neutral-400">
                Replace placeholders with your company details
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Industry Presets */}
        <div className="py-4 border-b border-neutral-800 space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Quick Industry Presets
          </label>
          <div className="grid grid-cols-1 gap-2">
            <button
              type="button"
              onClick={() => applyPreset('architectural')}
              className="p-2.5 rounded-lg border border-neutral-800 hover:border-amber-400/50 bg-neutral-950 text-left transition-colors cursor-pointer text-xs"
            >
              <div className="font-semibold text-white">Aethelgard & Co.</div>
              <div className="text-[11px] text-neutral-400">Luxury Architectural & Spatial Atelier</div>
            </button>
            <button
              type="button"
              onClick={() => applyPreset('capital')}
              className="p-2.5 rounded-lg border border-neutral-800 hover:border-amber-400/50 bg-neutral-950 text-left transition-colors cursor-pointer text-xs"
            >
              <div className="font-semibold text-white">Aethelgard Capital & Advisory</div>
              <div className="text-[11px] text-neutral-400">Private Wealth & Strategic M&A Advisory</div>
            </button>
            <button
              type="button"
              onClick={() => applyPreset('construction')}
              className="p-2.5 rounded-lg border border-neutral-800 hover:border-amber-400/50 bg-neutral-950 text-left transition-colors cursor-pointer text-xs"
            >
              <div className="font-semibold text-white">Meridian Guild & Build</div>
              <div className="text-[11px] text-neutral-400">High-Tolerance Engineering & Construction</div>
            </button>
          </div>
        </div>

        {/* Custom Input Form */}
        <form onSubmit={handleSave} className="py-4 space-y-4 flex-1">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-amber-400" />
              <span>Company Name ([INSERT COMPANY NAME])</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Acme Corporation"
              className="w-full px-3 py-2 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Headline / Value Proposition
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="Primary headline..."
              className="w-full px-3 py-2 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Industry Domain
            </label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g. Architecture & Development"
              className="w-full px-3 py-2 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1">
                <Phone className="w-3 h-3 text-amber-400" />
                <span>Phone</span>
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (800) 000-0000"
                className="w-full px-3 py-2 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1">
                <MessageSquare className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp</span>
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+18000000000"
                className="w-full px-3 py-2 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1 flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>Contact Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="inquiries@company.com"
              className="w-full px-3 py-2 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Primary Business Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street, City, Postal Code"
              className="w-full px-3 py-2 rounded-lg text-xs bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Apply Changes Live</span>
            </button>
            <button
              type="button"
              onClick={() => {
                resetToDefault();
                setIsCustomizerOpen(false);
              }}
              title="Reset to default brand"
              className="p-2.5 rounded-md border border-neutral-700 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
