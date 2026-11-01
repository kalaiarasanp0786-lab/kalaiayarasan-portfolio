import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-atom py-[90px] bg-white/[0.018] relative z-10">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <Reveal>
          <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
            Work History
          </div>
          <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-10 leading-[1.15]">
            Professional <span className="text-[#10B981]">Experience</span>
          </h2>
        </Reveal>

        <div className="space-y-6">
          {EXPERIENCE_ITEMS.map((exp, idx) => (
            <Reveal key={exp.role} delayMs={(idx * 100) as 0 | 100}>
              <div className="bg-[#1E293B] border border-[#334155] rounded-[14px] p-8 relative overflow-hidden transition-colors duration-200 hover:border-[#10B981] before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-[3px] before:bg-gradient-to-r before:from-[#10B981] before:to-[#059669]">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1.5">
                  <div className="font-serif-display text-[1.35rem] font-bold">{exp.role}</div>
                  <div className="bg-[#10B981]/15 text-[#10B981] text-[0.72rem] font-bold py-1 px-2.5 rounded-[5px] tabular-nums">
                    {exp.year}
                  </div>
                </div>
                <div className="text-[#34D399] text-[0.87rem] mb-4">{exp.company}</div>
                <ul className="list-none text-[#94A3B8] text-[0.85rem] leading-[1.85] space-y-1.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="pl-5 relative">
                      <span className="absolute left-0 text-[#10B981]">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
