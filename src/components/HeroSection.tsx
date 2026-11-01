import React, { useEffect, useState } from 'react';
import { HERO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const currentPhrase = HERO_DATA.typedPhrases[phraseIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText === currentPhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % HERO_DATA.typedPhrases.length);
    } else {
      timeoutId = setTimeout(
        () => {
          const nextLength = isDeleting ? typedText.length - 1 : typedText.length + 1;
          setTypedText(currentPhrase.slice(0, nextLength));
        },
        isDeleting ? 55 : 85
      );
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, phraseIndex]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center pt-[80px] pb-[60px] px-[5%] overflow-hidden"
    >
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />
      <div
        className="absolute w-[600px] h-[600px] rounded-full top-1/2 right-[10%] -translate-y-1/2 pointer-events-none bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_420px] gap-12 items-center relative z-10 text-center md:text-left">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-[0.75rem] font-semibold tracking-[0.1em] uppercase py-1.5 px-3.5 rounded-full mb-5 animate-fade-up">
            <span>{HERO_DATA.tag}</span>
          </div>

          <h1 className="font-serif-display text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1.15] mb-3 animate-fade-up">
            <span className="hero-glitch-name" data-text={HERO_DATA.name}>
              {HERO_DATA.name}
            </span>
          </h1>

          <div className="text-[0.9rem] text-[#CBD5E1] mb-1.5 animate-fade-up">
            {HERO_DATA.subtitle}
          </div>

          <div className="font-serif-display text-[1.25rem] text-[#34D399] min-h-[2rem] mb-6 animate-fade-up">
            <span>{typedText}</span>
            <span className="animate-blink-cursor ml-0.5">|</span>
          </div>

          <p className="text-[0.88rem] text-[#94A3B8] leading-[1.85] max-w-[520px] mx-auto md:mx-0 mb-8 animate-fade-up">
            {HERO_DATA.description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3.5 animate-fade-up">
            <a
              href="#contact"
              onClick={(e) => handleAnchor(e, 'contact')}
              className="bg-[#10B981] text-[#0F172A] py-3 px-[26px] rounded-[7px] font-bold text-[0.85rem] inline-flex items-center gap-2 transition-all duration-200 hover:bg-[#34D399] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] whitespace-nowrap shrink-0"
            >
              <span>⚗️</span>
              <span>Get in Touch</span>
            </a>
            <a
              href="#projects"
              onClick={(e) => handleAnchor(e, 'projects')}
              className="border-[1.5px] border-[#10B981] text-[#10B981] py-3 px-[26px] rounded-[7px] font-bold text-[0.85rem] inline-flex items-center gap-2 transition-all duration-200 hover:bg-[#10B981]/10 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>🔬</span>
              <span>View Projects</span>
            </a>
          </div>
        </div>

        {/* Right column - Portrait */}
        <div className="order-first md:order-last flex justify-center items-center relative animate-fade-up">
          <div
            className="hidden sm:grid absolute -top-2.5 -left-6 grid-cols-4 gap-2 z-0"
            aria-hidden="true"
          >
            {Array.from({ length: 16 }).map((_, idx) => (
              <span
                key={idx}
                className="w-2 h-2 rounded-full bg-[#10B981]/25 block"
              />
            ))}
          </div>

          <div className="relative w-[220px] h-[220px] md:w-[340px] md:h-[340px]">
            <div className="photo-conic-ring absolute -inset-1.5 rounded-full">
              <div className="absolute inset-1 bg-[#0F172A] rounded-full" />
            </div>
            <div
              className="absolute -inset-5 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.2)_0%,transparent_70%)] pointer-events-none z-0"
              aria-hidden="true"
            />
            {!imgError ? (
              <img
                src={HERO_DATA.portraitUrl}
                alt="Kalaiyarasan P — Biotechnology Student"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="relative z-10 w-full h-full rounded-full object-cover object-top block"
              />
            ) : (
              <div className="relative z-10 w-full h-full rounded-full bg-[#1E293B] border border-[#334155] flex flex-col items-center justify-center text-[#10B981]">
                <span className="font-serif-display text-5xl font-bold">KP</span>
                <span className="text-xs text-[#94A3B8] mt-1">Biotechnology</span>
              </div>
            )}
          </div>

          <div className="absolute bottom-2.5 right-2 md:-right-2.5 bg-[#1E293B] border border-[#10B981] rounded-xl py-2.5 px-4 text-[0.78rem] font-bold text-[#10B981] whitespace-nowrap z-20">
            {HERO_DATA.badge}
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => handleAnchor(e, 'about')}
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-[#10B981] text-[1.4rem] z-20"
      >
        ↓
      </a>
    </section>
  );
};
