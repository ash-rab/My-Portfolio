"use client";

import React, { useEffect, useRef, useState } from "react";

export function PremiumEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);
  
  // Animation state for SVG Liquid Displacement frequency
  const [baseFreq, setBaseFreq] = useState("0.015 0.015");

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
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 25000), 75);
      
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

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // 2. Main WebGL-inspired canvas rendering loop
    const render = () => {
      timeRef.current += 0.01;
      
      // Update SVG filter base frequency for dynamic liquid ripple
      const freqX = 0.012 + Math.sin(timeRef.current * 0.4) * 0.003;
      const freqY = 0.018 + Math.cos(timeRef.current * 0.3) * 0.004;
      setBaseFreq(`${freqX.toFixed(5)} ${freqY.toFixed(5)}`);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connection lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Render & Move particles
      particles.forEach(p => {
        // Simple ambient drifting motion
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse reactive repulsion force
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        if (mx > -1000 && my > -1000) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            const force = (150 - dist) / 150;
            const angle = Math.atan2(dy, dx);
            // Move away from cursor
            p.x += Math.cos(angle) * force * 2.5;
            p.y += Math.sin(angle) * force * 2.5;
          }
        }

        // Draw node
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

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
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Floating Volumetric Aurora Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-transparent">
        {/* Deep Indigo Aurora Blob */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/5 filter blur-[130px] mix-blend-screen animate-float-slow top-[-10%] left-[-10%]" />
        
        {/* Soft Amber Aurora Blob */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-amber-500/5 filter blur-[150px] mix-blend-screen animate-float-slow-reverse bottom-[-20%] right-[-10%]" />
        
        {/* Subtle Teal Aurora Blob */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-teal-500/4 filter blur-[120px] mix-blend-screen animate-float-medium top-[30%] right-[15%]" />
      </div>

      {/* Animated Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] film-grain-overlay" />

      {/* SVG Liquid Distortion Shader Filter */}
      <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}>
        <defs>
          <filter id="liquid-refraction">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFreq}
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
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.15); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes floatSlowReverse {
          0% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-50px, -50px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1.1); }
        }
        @keyframes floatMedium {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 40px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
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

        /* Cinematic Noise/Film Grain Animation */
        .film-grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          animation: noisePlay 1s steps(4) infinite;
        }

        @keyframes noisePlay {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(-2%, 1%); }
          30% { transform: translate(1%, -2%); }
          40% { transform: translate(-1%, 2%); }
          50% { transform: translate(-2%, 1%); }
          60% { transform: translate(2%, -1%); }
          70% { transform: translate(0%, 2%); }
          80% { transform: translate(-2%, 2%); }
          90% { transform: translate(1%, -1%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
}
