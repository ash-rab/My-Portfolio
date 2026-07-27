"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 120Hz ProMotion Tuned Physics Engine
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Snappy exponential decay
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
      lerp: 0.12, // Ultra-responsive 120Hz frame lerp rate
    });

    (window as any).lenis = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}
