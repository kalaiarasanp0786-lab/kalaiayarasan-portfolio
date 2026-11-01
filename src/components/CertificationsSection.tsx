import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const CertificationsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!expandedId) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      const activeCard = gridRef.current?.querySelector(
        `[data-cert-id="${expandedId}"]`
      );
      if (activeCard && !activeCard.contains(target)) {
        setExpandedId(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedId(null);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedId]);

  const toggleCard = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="certifications"
      className="bg-dna py-[90px] bg-[#14281E]/30 relative z-10"
    >
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <Reveal>
          <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
            Credentials
          </div>
          <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-10 leading-[1.15]">
            Certifications <span className="text-[#10B981]">&amp; Training</span>
          </h2>
        </Reveal>

        {/* Responsive 3-Column Interactive Certificate Grid */}
        <Reveal>
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start"
          >
            {CERTIFICATIONS.map((cert) => {
              const isExpanded = expandedId === cert.id;
              const panelId = `cert-panel-${cert.id}`;

              return (
                <div
                  key={cert.id}
                  data-cert-id={cert.id}
                  className={`bg-[#1E293B] border rounded-[12px] overflow-hidden transition-all duration-200 relative before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-[2.5px] before:bg-gradient-to-r before:from-[#10B981] before:to-[#059669] before:transition-opacity before:duration-200 ${
                    isExpanded
                      ? 'border-[#10B981] shadow-[0_14px_34px_rgba(16,185,129,0.14)] before:opacity-100'
                      : 'border-[#334155] hover:border-[#10B981]/80 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(16,185,129,0.08)] before:opacity-0 hover:before:opacity-100'
                  }`}
                >
                  {/* Card Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleCard(cert.id)}
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    className="w-full min-h-[118px] p-5 text-left bg-transparent border-none cursor-pointer flex items-start justify-between gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]/70 focus-visible:ring-inset"
                  >
                    <div className="flex items-start gap-3.5 min-w-0 flex-1">
                      <span
                        className="text-[1.25rem] leading-none shrink-0 mt-0.5 select-none"
                        aria-hidden="true"
                      >
                        {cert.icon}
                      </span>

                      <div className="min-w-0 flex-1">
                        <strong className="block text-white font-sans-body text-[0.86rem] font-semibold leading-[1.4] mb-1.5 line-clamp-3">
                          {cert.title}
                        </strong>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.75rem] leading-[1.4]">
                          <span className="text-[#10B981] font-medium">
                            {cert.organization}
                          </span>
                          {cert.year && (
                            <>
                              <span className="text-[#94A3B8]/60" aria-hidden="true">
                                ·
                              </span>
                              <span className="text-[#94A3B8] font-medium tabular-nums">
                                {cert.year}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-200 ${
                        isExpanded
                          ? 'rotate-180 text-[#10B981]'
                          : 'text-[#94A3B8]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Smooth Expandable Details Panel */}
                  <div
                    id={panelId}
                    role="region"
                    aria-label={`${cert.title} details`}
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                      isExpanded
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-3.5 border-t border-[#334155]/80 bg-[#0F172A]/35">
                        {cert.category && (
                          <div className="text-[0.68rem] text-[#34D399] font-semibold tracking-[0.06em] uppercase mb-2">
                            {cert.category}
                          </div>
                        )}

                        {cert.description && (
                          <p className="text-[#94A3B8] text-[0.78rem] leading-[1.65] mb-3.5">
                            {cert.description}
                          </p>
                        )}

                        <div className="text-[#94A3B8] text-[0.68rem] font-bold tracking-[0.1em] uppercase mb-2">
                          Skills Gained
                        </div>

                        <ul className="m-0 pl-4 list-disc text-[#CBD5E1] text-[0.77rem] leading-[1.65] space-y-1">
                          {cert.skillsGained.map((skill) => (
                            <li key={skill} className="marker:text-[#10B981]">
                              {skill}
                            </li>
                          ))}
                        </ul>

                        {cert.certificateUrl && (
                          <div className="mt-4 pt-3 border-t border-[#334155]/60">
                            <a
                              href={cert.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 bg-[#10B981] text-[#0F172A] py-2 px-4 rounded-[7px] font-bold text-[0.78rem] transition-all duration-200 hover:bg-[#34D399] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(16,185,129,0.28)] whitespace-nowrap"
                            >
                              <span>View Certification</span>
                              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
