import React, { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { CERTIFICATIONS, FEATURED_CERTIFICATION } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const CertificationsSection: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [certImgError, setCertImgError] = useState(false);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

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

        {/* Featured Certificate with Lightbox Preview */}
        <Reveal className="mb-7">
          <div className="bg-[#1E293B] border border-[#334155] rounded-[14px] overflow-hidden relative transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.1)] before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-[3px] before:bg-gradient-to-r before:from-[#10B981] before:to-[#059669]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <button
                type="button"
                onClick={() => !certImgError && setLightboxImage(FEATURED_CERTIFICATION.imageUrl)}
                className="relative overflow-hidden bg-[#0F172A] min-h-[220px] cursor-pointer group text-left border-none p-0 w-full"
                aria-label="Inspect DNA Barcode Biotechnology Certificate"
              >
                {!certImgError ? (
                  <>
                    <img
                      src={FEATURED_CERTIFICATION.imageUrl}
                      alt={FEATURED_CERTIFICATION.title}
                      referrerPolicy="no-referrer"
                      onError={() => setCertImgError(true)}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] block"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white text-[0.82rem] font-bold gap-2">
                      <ZoomIn className="w-4 h-4 text-[#10B981]" />
                      <span>Click to View Certificate</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-[#0F172A]">
                    <span className="text-3xl mb-2">🏅</span>
                    <span className="font-serif-display text-lg font-bold text-white">
                      {FEATURED_CERTIFICATION.title}
                    </span>
                    <span className="text-xs text-[#10B981] mt-1">
                      {FEATURED_CERTIFICATION.organization}
                    </span>
                  </div>
                )}
              </button>

              <div className="p-7 flex flex-col justify-center">
                <div className="text-[0.68rem] font-bold text-[#10B981] tracking-[0.14em] uppercase mb-1.5">
                  {FEATURED_CERTIFICATION.label}
                </div>
                <h3 className="font-serif-display text-[1.35rem] font-bold leading-[1.35] mb-1">
                  {FEATURED_CERTIFICATION.title}
                </h3>
                <div className="text-[0.82rem] text-[#94A3B8] mb-0.5">
                  {FEATURED_CERTIFICATION.organization}
                </div>
                <div className="text-[0.75rem] text-[#10B981] font-semibold mb-3.5">
                  {FEATURED_CERTIFICATION.date}
                </div>
                <p className="text-[0.82rem] text-[#94A3B8] leading-[1.75] mb-4">
                  {FEATURED_CERTIFICATION.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_CERTIFICATION.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#10B981]/[0.08] border border-[#10B981]/20 text-[#10B981] text-[0.68rem] py-1 px-2.5 rounded-[5px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Certifications Grid */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CERTIFICATIONS.map((cert) => {
              const isDetailed = !!(cert.skillsList && cert.skillsList.length > 0);
              const isClickable = !!cert.certificateImage && !certImgError;

              if (isDetailed) {
                return (
                  <div
                    key={cert.title}
                    className="sm:col-span-2 lg:col-span-3 bg-[#1E293B] border border-[#334155] rounded-[10px] py-4 px-5 flex items-start gap-3.5 text-[0.82rem] text-[#CBD5E1] transition-colors duration-200 hover:border-[#10B981] hover:text-white"
                  >
                    <span className="text-[#10B981] text-[1.2rem] shrink-0 mt-0.5">
                      {cert.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <strong className="block text-white text-[0.9rem] leading-[1.35] mb-1">
                        {cert.title}
                      </strong>
                      {cert.organization && (
                        <span className="block text-[#10B981] text-[0.78rem] leading-[1.4] mb-2.5">
                          {cert.organization}
                        </span>
                      )}
                      {cert.skillsLabel && (
                        <span className="block text-[#94A3B8] text-[0.66rem] font-bold tracking-[0.1em] uppercase mb-1.5">
                          {cert.skillsLabel}
                        </span>
                      )}
                      <ul className="m-0 pl-4 list-disc text-[#94A3B8] text-[0.76rem] leading-[1.6] grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                        {cert.skillsList?.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={cert.title}
                  onClick={
                    isClickable ? () => setLightboxImage(cert.certificateImage!) : undefined
                  }
                  role={isClickable ? 'button' : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  onKeyDown={
                    isClickable
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setLightboxImage(cert.certificateImage!);
                          }
                        }
                      : undefined
                  }
                  className={`bg-[#1E293B] border border-[#334155] rounded-[10px] py-4 px-5 flex items-center gap-3 text-[0.82rem] text-[#CBD5E1] transition-colors duration-200 hover:border-[#10B981] hover:text-white ${
                    isClickable ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <span className="text-[#10B981] text-[1.1rem] shrink-0">{cert.icon}</span>
                  <span className="leading-snug">{cert.title}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview"
        >
          <div
            className="relative max-w-4xl w-full bg-[#1E293B] border border-[#334155] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#334155]">
              <span className="font-serif-display text-lg font-bold text-white">
                {FEATURED_CERTIFICATION.title} — {FEATURED_CERTIFICATION.organization}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close certificate preview"
                className="p-1.5 rounded-lg bg-[#0F172A] text-[#CBD5E1] hover:text-white hover:border-[#10B981] border border-[#334155] cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-[#0F172A] flex justify-center">
              <img
                src={lightboxImage}
                alt={FEATURED_CERTIFICATION.title}
                referrerPolicy="no-referrer"
                className="max-h-[78vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
