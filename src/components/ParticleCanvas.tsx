import React, { useEffect, useRef } from 'react';

interface Molecule {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  type: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const molecules: Molecule[] = [];
    for (let i = 0; i < 18; i++) {
      molecules.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 14 + 8,
        type: Math.floor(Math.random() * 3),
      });
    }

    const drawMolecule = (x: number, y: number, r: number, type: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 1;

      if (type === 0) {
        // Hexagon (benzene ring)
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
          else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.5, 0, Math.PI * 2);
        ctx.stroke();
      } else if (type === 1) {
        // Atom
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16,185,129,0.6)';
        ctx.fill();
        for (let i = 0; i < 3; i++) {
          ctx.save();
          ctx.rotate((i * Math.PI) / 3);
          ctx.beginPath();
          ctx.ellipse(0, 0, r, r * 0.35, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      } else {
        // DNA base pair
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(52,211,153,0.5)';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-r, 0);
        ctx.lineTo(r, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(-r, 0, r * 0.25, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r, 0, r * 0.25, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawDNA = (
      xOff: number,
      yOff: number,
      len: number,
      amp: number,
      spd: number,
      alpha: number
    ) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      const step = 18;
      for (let y = 0; y < len; y += step) {
        const phase = y * 0.09 + time * spd;
        const x1 = xOff + Math.sin(phase) * amp;
        const x2 = xOff + Math.sin(phase + Math.PI) * amp;
        const yy = yOff + y;

        ctx.beginPath();
        ctx.arc(x1, yy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#10B981';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x2, yy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#34D399';
        ctx.fill();

        if (Math.round(y / step) % 3 === 0) {
          ctx.beginPath();
          ctx.moveTo(x1, yy);
          ctx.lineTo(x2, yy);
          ctx.strokeStyle = 'rgba(16,185,129,0.35)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      for (let y = 0; y < len; y += 3) {
        const phase = y * 0.09 + time * spd;
        const x1 = xOff + Math.sin(phase) * amp;
        if (y === 0) ctx.moveTo(x1, yOff);
        else ctx.lineTo(x1, yOff + y);
      }
      ctx.strokeStyle = 'rgba(16,185,129,0.25)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      for (let y = 0; y < len; y += 3) {
        const phase = y * 0.09 + time * spd + Math.PI;
        const x2 = xOff + Math.sin(phase) * amp;
        if (y === 0) ctx.moveTo(x2, yOff);
        else ctx.lineTo(x2, yOff + y);
      }
      ctx.strokeStyle = 'rgba(52,211,153,0.2)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.012;

      drawDNA(60, 0, height, 28, 0.6, 0.07);
      drawDNA(width - 60, 0, height, 28, 0.6, 0.07);
      if (width > 900) {
        drawDNA(width * 0.25, 0, height, 20, 0.5, 0.04);
        drawDNA(width * 0.75, 0, height, 20, 0.5, 0.04);
      }

      molecules.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;
        if (m.x < -50) m.x = width + 50;
        if (m.x > width + 50) m.x = -50;
        if (m.y < -50) m.y = height + 50;
        if (m.y > height + 50) m.y = -50;
        drawMolecule(m.x, m.y, m.r, m.type, 0.06);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};
