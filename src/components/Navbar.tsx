import React, { useState } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0F172A]/95 backdrop-blur-xl border-b border-[#334155]">
      <div className="max-w-[1200px] mx-auto px-[5%] flex items-center justify-between h-[60px] gap-8">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="font-serif-display text-[1.15rem] font-bold text-[#10B981] whitespace-nowrap shrink-0 tracking-[0.03em] hover:text-[#34D399] transition-colors"
        >
          Kalaiyarasan P.
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex min-[901px]:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5"
        >
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-white transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        {/* Desktop navigation */}
        <ul className="hidden min-[901px]:flex items-center gap-[1.4rem] list-none">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`text-[0.72rem] font-medium tracking-[0.06em] uppercase py-1 border-b-2 transition-colors duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#10B981] border-[#10B981]'
                      : 'text-[#CBD5E1] border-transparent hover:text-[#10B981] hover:border-[#10B981]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile navigation drawer */}
      {menuOpen && (
        <ul className="flex min-[901px]:hidden flex-col bg-[#0F172A]/[0.99] px-[5%] py-6 border-b border-[#334155] list-none">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="border-b border-white/5 last:border-none">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`block py-3.5 text-[0.85rem] font-medium tracking-[0.06em] uppercase transition-colors ${
                    isActive ? 'text-[#10B981]' : 'text-[#CBD5E1] hover:text-[#10B981]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
