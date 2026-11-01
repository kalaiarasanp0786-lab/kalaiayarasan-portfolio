import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-helix py-[90px] bg-white/[0.018] relative z-10">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <Reveal>
          <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
            What I Know
          </div>
          <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-10 leading-[1.15]">
            Technical <span className="text-[#10B981]">Skills</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={category.title} delayMs={(idx * 100) as 0 | 100 | 200 | 300}>
              <div className="h-full bg-[#1E293B] border border-[#334155] rounded-[13px] p-6 transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1">
                <div className="text-[0.72rem] font-bold text-[#10B981] tracking-[0.14em] uppercase mb-4">
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#10B981]/[0.09] border border-[#10B981]/[0.22] text-[#34D399] text-[0.74rem] py-[5px] px-[11px] rounded-[20px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
