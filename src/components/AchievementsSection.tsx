import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="bg-helix py-[90px] relative z-10">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <Reveal>
          <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
            Recognition
          </div>
          <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-10 leading-[1.15]">
            Achievements <span className="text-[#10B981]">&amp; Awards</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACHIEVEMENTS.map((ach, idx) => (
            <Reveal key={ach.title} delayMs={(idx * 100) as 0 | 100 | 200 | 300}>
              <div className="h-full bg-[#1E293B] border border-[#334155] rounded-[14px] p-7 relative overflow-hidden transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)] before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-[3px] before:bg-gradient-to-r before:from-[#10B981] before:to-[#059669]">
                <div className="absolute top-4 right-4 bg-[#10B981]/15 text-[#10B981] text-[0.68rem] font-bold py-[3px] px-2.5 rounded-[5px] tabular-nums">
                  {ach.year}
                </div>
                <div className="text-[2rem] mb-3">{ach.icon}</div>
                <h3 className="font-serif-display text-[1.18rem] font-bold mb-1 pr-10">
                  {ach.title}
                </h3>
                <div className="text-[#10B981] text-[0.82rem] font-semibold mb-2.5">
                  {ach.organization}
                </div>
                <p className="text-[#94A3B8] text-[0.81rem] leading-[1.75]">{ach.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
