import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { CONTACT_LINKS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const ContactSection: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadResume = async () => {
    setDownloading(true);
    try {
      const res = await fetch('/resume.pdf');
      if (!res.ok) throw new Error('Resume file not found');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Kalaiyarasan_Resume.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    } catch {
      const anchor = document.createElement('a');
      anchor.href = '/resume.pdf';
      anchor.download = 'Kalaiyarasan_Resume.pdf';
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="contact" className="bg-hex py-[90px] relative z-10">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <Reveal>
          <div className="text-[0.72rem] text-[#10B981] tracking-[0.18em] uppercase font-semibold mb-2">
            Let&apos;s Connect
          </div>
          <h2 className="font-serif-display text-[clamp(2rem,4vw,3rem)] font-bold mb-10 leading-[1.15]">
            Get In <span className="text-[#10B981]">Touch</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Links & Socials */}
          <Reveal>
            <div className="flex flex-col gap-3.5">
              {CONTACT_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 text-[#CBD5E1] bg-[#1E293B] border border-[#334155] rounded-[11px] py-4 px-5 text-[0.86rem] transition-all duration-200 hover:text-white hover:border-[#10B981] hover:translate-x-1"
                >
                  <span className="text-[1.25rem] shrink-0">{item.icon}</span>
                  <div className="min-w-0 truncate">
                    <span className="text-[0.68rem] text-[#10B981] font-bold tracking-[0.1em] uppercase block mb-0.5">
                      {item.label}
                    </span>
                    <span className="truncate block">{item.value}</span>
                  </div>
                </a>
              ))}

              <div className="mt-2">
                <div className="text-[0.7rem] text-[#94A3B8] font-semibold tracking-[0.1em] uppercase mb-3">
                  Follow Me
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/kalaiyarasan-p-biotech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                    className="w-[50px] h-[50px] rounded-[11px] bg-[#1E293B] border border-[#334155] flex items-center justify-center transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1 hover:bg-[#10B981]/10"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  <a
                    href="mailto:kalaiyarasan8504@gmail.com"
                    title="Email"
                    aria-label="Email"
                    className="w-[50px] h-[50px] rounded-[11px] bg-[#1E293B] border border-[#334155] flex items-center justify-center transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1 hover:bg-[#10B981]/10"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/kalai_king_55"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    aria-label="Instagram"
                    className="w-[50px] h-[50px] rounded-[11px] bg-[#1E293B] border border-[#334155] flex items-center justify-center transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1 hover:bg-[#10B981]/10"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="#10B981" stroke="none" />
                    </svg>
                  </a>

                  <a
                    href="tel:+917339005728"
                    title="Call"
                    aria-label="Call"
                    className="w-[50px] h-[50px] rounded-[11px] bg-[#1E293B] border border-[#334155] flex items-center justify-center transition-all duration-200 hover:border-[#10B981] hover:-translate-y-1 hover:bg-[#10B981]/10"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Resume Download Card */}
          <Reveal delayMs={100}>
            <div className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/[0.04] border-[1.5px] border-[#10B981] rounded-[15px] p-10 text-center">
              <div className="text-[3rem] mb-4">📄</div>
              <h3 className="font-serif-display text-[1.7rem] font-bold mb-2">
                Download My Resume
              </h3>
              <p className="text-[#94A3B8] text-[0.84rem] mb-7 leading-[1.7]">
                Get a detailed overview of my academic background, laboratory experience,
                research work, and certifications.
              </p>
              <button
                type="button"
                onClick={handleDownloadResume}
                disabled={downloading}
                className="bg-[#10B981] text-[#0F172A] py-3 px-[26px] rounded-[7px] font-bold text-[0.85rem] inline-flex items-center justify-center gap-2 border-none cursor-pointer transition-all duration-200 hover:bg-[#34D399] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] disabled:opacity-70 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'Preparing Resume...' : 'Download Resume'}</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
