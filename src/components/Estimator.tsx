import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { Calculator, ArrowRight, CheckCircle2, Clock, Users, Award } from 'lucide-react';

export const Estimator: React.FC = () => {
  const { openConsultation } = useBrand();

  const [typology, setTypology] = useState<'villa' | 'commercial' | 'hospitality' | 'sustainable'>('villa');
  const [scale, setScale] = useState<'compact' | 'medium' | 'large' | 'estate'>('medium');
  const [scope, setScope] = useState<'turnkey' | 'architecture' | 'feasibility'>('turnkey');

  const typologyData = {
    villa: { label: 'Private Residential Estate', baseMonths: 14, team: 'Lead Principal + 2 Project Architects', rating: 'Passive House / Low-Carbon' },
    commercial: { label: 'Flagship Corporate HQ', baseMonths: 18, team: '2 Partners + 4 Systems Engineers', rating: 'LEED Platinum / BREEAM Outstanding' },
    hospitality: { label: 'Boutique Pavilion / Retreat', baseMonths: 16, team: 'Lead Principal + Interior Master', rating: 'Biophilic Gold Standard' },
    sustainable: { label: 'Mass-Timber Urban Project', baseMonths: 12, team: 'Sustainability Director + BIM Lead', rating: 'Net-Zero Operational Carbon' },
  };

  const scaleData = {
    compact: { label: 'Under 6,000 sq ft (550 m²)', factor: 0.8 },
    medium: { label: '6,000 – 15,000 sq ft (1,400 m²)', factor: 1.0 },
    large: { label: '15,000 – 40,000 sq ft (3,700 m²)', factor: 1.3 },
    estate: { label: '40,000+ sq ft (Masterplan)', factor: 1.6 },
  };

  const scopeData = {
    turnkey: { label: 'Turnkey Delivery (Architecture, Interiors & Supervision)', timeAdd: 2 },
    architecture: { label: 'Architectural Envelope & Statutory Permitting', timeAdd: 0 },
    feasibility: { label: 'Masterplanning & Spatial Feasibility Only', timeAdd: -6 },
  };

  const totalMonths = Math.max(
    4,
    Math.round(typologyData[typology].baseMonths * scaleData[scale].factor + scopeData[scope].timeAdd)
  );

  const handleApplyToConsultation = () => {
    const summary = `${typologyData[typology].label} (${scaleData[scale].label}) - ${scopeData[scope].label}`;
    openConsultation(summary);
  };

  return (
    <section className="py-20 md:py-28 bg-neutral-900 text-white border-b border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Commission Planner</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-50 tracking-tight [text-wrap:balance]">
                Estimate Your Spatial Engagement Scope & Timeline
              </h2>
              <p className="mt-2 text-sm text-neutral-300">
                Tailor parameters to preview project delivery cycles, advisory staffing, and statutory milestones.
              </p>
            </div>

            {/* Control 1: Typology */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                1. Select Commission Typology
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['villa', 'commercial', 'hospitality', 'sustainable'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTypology(key)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      typology === key
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold">{typologyData[key].label.split(' ')[0]}</div>
                    <div className="text-[11px] text-neutral-400 truncate">{typologyData[key].label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Scale */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                2. Approximate Spatial Footprint
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(['compact', 'medium', 'large', 'estate'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setScale(key)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                      scale === key
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <span className="text-xs font-medium">{scaleData[key].label}</span>
                    {scale === key && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Scope */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                3. Desired Studio Stewardship
              </label>
              <div className="grid grid-cols-1 gap-2">
                {(['turnkey', 'architecture', 'feasibility'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setScope(key)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                      scope === key
                        ? 'border-amber-400 bg-amber-400/10 text-white'
                        : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <span className="text-xs font-medium">{scopeData[key].label}</span>
                    {scope === key && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Computed Estimates Display */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl space-y-6">
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Projected Engagement Matrix
                </span>
                <h3 className="font-editorial text-2xl text-white mt-1">
                  {typologyData[typology].label}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {scaleData[scale].label}
                </p>
              </div>

              {/* Dynamic Metrics */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-neutral-400">Estimated Total Delivery Cycle</div>
                    <div className="text-lg font-semibold text-white tabular-nums">
                      {totalMonths} Months (Schematic to Handover)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-neutral-400">Dedicated Studio Team</div>
                    <div className="text-sm font-semibold text-white">
                      {typologyData[typology].team}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-neutral-400">Target Environmental Rating</div>
                    <div className="text-sm font-semibold text-white">
                      {typologyData[typology].rating}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleApplyToConsultation}
                className="w-full py-3.5 px-4 rounded-md bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Request Consultation for This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-neutral-500">
                Preliminary model based on studio historical benchmarks. All commissions tailored by contract.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
