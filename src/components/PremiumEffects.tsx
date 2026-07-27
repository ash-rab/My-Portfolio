"use client";

import React, { useEffect, useRef } from "react";

export function PremiumEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    // 1. Particle Canvas Setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 30000), 50);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1,
          color: "rgba(255, 255, 255, 0.15)"
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // 2. High-performance canvas rendering loop (zero React state updates)
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const pCount = particles.length;

      // Draw connection lines with squared distance pre-check to eliminate Math.sqrt call thrashing
      ctx.lineWidth = 0.5;
      for (let i = 0; i < pCount; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < pCount; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < 12100) { // 110 * 110
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / 110) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Render & Move particles
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasMouse = mx > -1000 && my > -1000;

      for (let i = 0; i < pCount; i++) {
        const p = particles[i];
        
        // Simple ambient drifting motion
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse reactive repulsion force with squared distance pre-check
        if (hasMouse) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < 22500) { // 150 * 150
            const dist = Math.sqrt(distSq);
            const force = (150 - dist) / 150;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 2.5;
            p.y += Math.sin(angle) * force * 2.5;
          }
        }

        // Draw node
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Interactive WebGL Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10 transform-gpu will-change-transform"
      />

      {/* Floating Volumetric Aurora Gradients (Hardware-accelerated) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-transparent transform-gpu">
        {/* Deep Indigo Aurora Blob */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/5 filter blur-[130px] mix-blend-screen animate-float-slow top-[-10%] left-[-10%] transform-gpu will-change-transform" />
        
        {/* Soft Amber Aurora Blob */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-500/5 filter blur-[150px] mix-blend-screen animate-float-slow-reverse bottom-[-20%] right-[-10%] transform-gpu will-change-transform" />
        
        {/* Subtle Teal Aurora Blob */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-teal-500/4 filter blur-[120px] mix-blend-screen animate-float-medium top-[30%] right-[15%] transform-gpu will-change-transform" />
      </div>

      {/* SVG Liquid Distortion Shader Filter */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}>
        <defs>
          <filter id="liquid-refraction">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.015"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Custom Styles Injection */}
      <style>{`
        /* Volumetric Floating Animations */
        @keyframes floatSlow {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(60px, 40px, 0) scale(1.15); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes floatSlowReverse {
          0% { transform: translate3d(0, 0, 0) scale(1.1); }
          50% { transform: translate3d(-50px, -50px, 0) scale(0.9); }
          100% { transform: translate3d(0, 0, 0) scale(1.1); }
        }
        @keyframes floatMedium {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-30px, 40px, 0) rotate(180deg); }
          100% { transform: translate3d(0, 0, 0) rotate(360deg); }
        }

        .animate-float-slow {
          animation: floatSlow 28s infinite ease-in-out;
        }
        .animate-float-slow-reverse {
          animation: floatSlowReverse 32s infinite ease-in-out;
        }
        .animate-float-medium {
          animation: floatMedium 22s infinite linear;
        }
      `}</style>
    </>
  );
}
