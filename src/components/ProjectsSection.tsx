import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ProjectsSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="bg-hex py-[90px] relative z-10">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <Reveal>
          <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
            My Work
          </div>
          <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-10 leading-[1.15]">
            Research <span className="text-[#10B981]">Projects</span>
          </h2>
        </Reveal>

        <div className="space-y-7">
          {PROJECTS.map((project, idx) => {
            const isOpen = !!expandedIds[project.id];
            return (
              <Reveal key={project.id} delayMs={(idx * 100) as 0 | 100}>
                <div className="bg-[#1E293B] border border-[#334155] rounded-[14px] p-8 relative overflow-hidden transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1 before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-[3px] before:bg-gradient-to-r before:from-[#10B981] before:to-[#059669]">
                  {project.badge && (
                    <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[0.7rem] font-bold tracking-[0.1em] py-1 px-3 rounded-[20px] mb-2.5 uppercase">
                      {project.badge}
                    </div>
                  )}

                  <div className="text-[0.7rem] text-[#10B981] font-bold tracking-[0.14em] uppercase mb-2">
                    {project.type}
                  </div>

                  <h3 className="font-serif-display text-[1.45rem] font-bold mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[#94A3B8] text-[0.86rem] leading-[1.8] mb-4">
                    <strong className="text-[#CBD5E1]">Objective: </strong>
                    {project.objective}
                  </p>

                  {project.description && (
                    <p className="text-[#94A3B8] text-[0.86rem] leading-[1.8] mb-4">
                      {project.description}
                    </p>
                  )}

                  <div className="text-[#CBD5E1] text-[0.85rem] leading-[1.8] mb-4 p-4 bg-[#10B981]/[0.06] border border-[#10B981]/25 rounded-lg">
                    <strong className="text-[#34D399]">{project.summaryLabel} </strong>
                    {project.summaryText}
                  </div>

                  {/* Interactive Expandable Highlights */}
                  <div className="my-4">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={isOpen}
                      className="text-[#10B981] text-[0.82rem] font-bold cursor-pointer inline-flex items-center gap-1.5 py-1.5 px-3.5 border border-[#10B981]/30 rounded-[7px] transition-colors duration-200 hover:bg-[#10B981]/[0.08]"
                    >
                      <span>{project.expandLabel}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pt-3.5">
                        <ul className="p-4 bg-[#10B981]/[0.04] border border-[#10B981]/15 rounded-[10px] list-disc pl-8 space-y-1 text-[#94A3B8] text-[0.83rem] leading-[1.85]">
                          {project.highlights.map((item, hIdx) => (
                            <li key={hIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Research Domain Tags */}
                  <div className="flex flex-wrap gap-2 mb-3.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/[0.04] border border-[#334155] text-[#94A3B8] text-[0.72rem] py-1 px-2.5 rounded-[5px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bioinformatics / Analytics Tools */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[0.7rem] text-[#94A3B8] font-bold tracking-[0.1em] uppercase mb-2">
                        Tools Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="bg-[#10B981]/[0.08] border border-[#10B981]/25 text-[#10B981] text-[0.7rem] py-1 px-2.5 rounded-[5px] font-semibold"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.linkUrl && (
                    <div className="flex flex-wrap gap-3 mt-5">
                      <a
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#10B981] text-[#0F172A] py-2.5 px-5 rounded-[7px] font-bold text-[0.85rem] inline-flex items-center gap-2 transition-all duration-200 hover:bg-[#34D399] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] whitespace-nowrap"
                      >
                        <span>{project.linkLabel || 'View Project'}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
