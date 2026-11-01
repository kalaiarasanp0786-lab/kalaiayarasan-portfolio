import React from 'react';
import {
  ABOUT_PARAGRAPHS,
  INTEREST_BADGES,
  INFO_CARDS,
  EDUCATION_ITEMS,
} from '../data/portfolioData';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-dna py-[90px] relative z-10">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <Reveal>
          <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
            Who I Am
          </div>
          <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-10 leading-[1.15]">
            About <span className="text-[#10B981]">Me</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            {ABOUT_PARAGRAPHS.map((paragraph, idx) => (
              <Reveal key={idx} delayMs={(idx * 100) as 0 | 100 | 200}>
                <p className="text-[#94A3B8] leading-[1.9] text-[0.88rem] mb-4">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delayMs={300}>
              <div className="flex flex-wrap gap-2.5 mt-6">
                {INTEREST_BADGES.map((interest) => (
                  <div
                    key={interest}
                    className="bg-[#10B981]/[0.08] border border-[#10B981]/20 text-[#CBD5E1] text-[0.78rem] py-[7px] px-3.5 rounded-full flex items-center gap-1.5 whitespace-nowrap"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="flex flex-col gap-3.5">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#1E293B] border border-[#334155] rounded-[11px] py-4 px-5 flex items-center gap-4 transition-colors duration-200 hover:border-[#10B981]"
                >
                  <div className="text-[1.4rem] shrink-0">{card.icon}</div>
                  <div>
                    <strong className="block text-[0.88rem] font-semibold mb-0.5 text-white">
                      {card.title}
                    </strong>
                    <span className="text-[0.78rem] text-[#94A3B8]">{card.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Education Standalone */}
        <div className="mt-16">
          <Reveal>
            <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
              Academic Journey
            </div>
            <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-8 leading-[1.15]">
              Education
            </h2>
          </Reveal>

          <div className="relative pl-9 before:content-[''] before:absolute before:left-[10px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#10B981] before:to-[#10B981]/10">
            {EDUCATION_ITEMS.map((edu, idx) => (
              <Reveal
                key={edu.degree}
                delayMs={(idx * 100) as 0 | 100 | 200}
                className="relative mb-9 last:mb-0 flex items-start gap-6"
              >
                <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-[#0F172A] border-[2.5px] border-[#10B981] shrink-0 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:bg-[#10B981]" />
                <div className="bg-[#1E293B] border border-[#334155] rounded-xl py-5 px-6 flex-1 transition-colors duration-200 hover:border-[#10B981]">
                  <div className="font-serif-display text-[1.15rem] font-bold flex flex-wrap items-center gap-2">
                    <span>{edu.degree}</span>
                    {edu.badge && (
                      <span className="font-sans-body text-[#10B981] text-[0.75rem] font-semibold bg-[#10B981]/[0.12] border border-[#10B981]/25 py-0.5 px-2.5 rounded-xl">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-[0.83rem] text-[#10B981] mt-1 mb-0.5">{edu.school}</div>
                  <div className="text-[0.77rem] text-[#94A3B8] tabular-nums">{edu.meta}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
