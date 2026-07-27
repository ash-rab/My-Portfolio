"use client";

import { useEffect, useRef } from "react";
import { useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastIndexRef = useRef<number>(-1);
  const frameCount = 120;

  // Preload Images & Init fixed canvas resolution once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 1920;
      canvas.height = 1080;
    }

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      // Format number to '000' to '119'
      const paddedIndex = i.toString().padStart(3, "0");
      // Use exactly lowercase 'sequence' to match Vercel's case-sensitive Linux filesystem
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          renderFrame(lastIndexRef.current >= 0 ? lastIndexRef.current : 0);
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const renderFrame = (index: number) => {
    const images = imagesRef.current;
    if (images.length === 0 || !canvasRef.current) return;
    
    const frameInt = Math.floor(index);
    if (frameInt === lastIndexRef.current && frameInt !== 0) return;
    lastIndexRef.current = frameInt;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameInt];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;
    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;

    let drawW, drawH, drawX, drawY;

    if (imgRatio > canvasRatio) {
      drawH = ch;
      drawW = imgRatio * ch;
      drawX = (cw - drawW) / 2;
      drawY = 0;
    } else {
      drawW = cw;
      drawH = cw / imgRatio;
      drawX = 0;
      drawY = (ch - drawH) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-100 mix-blend-screen brightness-125 transform-gpu will-change-transform"
      />
    </div>
  );
}
