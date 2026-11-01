import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delayMs === 100
      ? 'delay-100'
      : delayMs === 200
        ? 'delay-200'
        : delayMs === 300
          ? 'delay-300'
          : '';

  return (
    <div
      ref={ref}
      className={`reveal-item ${visible ? 'is-visible' : ''} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
};
