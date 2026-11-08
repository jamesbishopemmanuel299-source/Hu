import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Target, Eye, Gem, Award } from 'lucide-react';

export const About: React.FC = () => {
  const { company } = useBrand();

  const values = [
    {
      icon: Target,
      title: 'Structural Truth',
      desc: 'Form follows human vitality. We reject ephemeral trends in favor of geometry, natural light, and permanence.',
    },
    {
      icon: Eye,
      title: 'Contextual Harmony',
      desc: 'Architecture must belong to its earth. Every building responds sensitively to local climate, history, and light vectors.',
    },
    {
      icon: Gem,
      title: 'Material Authenticity',
      desc: 'We select authentic natural stone, FSC timber, and bronze that patinate gracefully across generations.',
    },
    {
      icon: Award,
      title: 'Execution Discipline',
      desc: 'Design dreams require uncompromising project management, rigorous cost control, and Swiss-grade site oversight.',
    },
  ];

  const leadership = [
    {
      name: 'Alexander Sterling, RIBA',
      role: 'Founding Principal & Design Director',
      bio: 'Educated at the Architectural Association (AA London) with 22 years spearheading award-winning residential and cultural commissions across Europe and California.',
    },
    {
      name: 'Camilla Moreau, SIA',
      role: 'Partner & Head of Structural Innovation',
      bio: 'Pioneer in low-carbon mass-timber engineering and seismic design, formerly overseeing landmark commercial complexes in Zurich and Tokyo.',
    },
    {
      name: 'Julian Montgomery, AIA',
      role: 'Partner & Managing Director, Americas',
      bio: 'Leading complex statutory approvals, high-net-worth estate stewardship, and institutional capital masterplanning throughout North America.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heritage & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
              Heritage & Ethos
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-neutral-50 tracking-tight [text-wrap:balance]">
              Built on Mathematical Rigor and Natural Light
            </h2>
            <div className="pt-2 text-xs text-neutral-500 font-mono">
              FOUNDED {company.foundedYear} · LONDON & NEW YORK
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>
              Founded in {company.foundedYear}, {company.name} was established to bridge an enduring divide in luxury architecture: the tension between visionary artistic form and relentless engineering discipline.
            </p>
            <p>
              Our studio believes that exceptional spaces are not merely seen—they are felt. Through acoustic attenuation, natural thermal convection, and materials with tactile depth, we shape physical environments that evoke quiet awe while operating at the vanguard of ecological sustainability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-1">Our Mission</h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                  To conceive and build architecturally transcendent environments that enhance human well-being and stand for centuries without obsolescence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm mb-1">Our Vision</h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                  A built world where ecological stewardship and luxury are indistinguishable, setting new international benchmarks for carbon neutrality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="font-editorial text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-100 mb-8">
            Core Design & Operational Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-editorial text-lg text-neutral-950 dark:text-neutral-100 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold mb-1">
                Studio Leadership
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-100">
                Principal Architects & Partners
              </h3>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm">
              Direct partner involvement on every commission from schematic to key handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  {leader.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100 text-base">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    {leader.role}
                  </p>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
