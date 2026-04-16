"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 120;

  // Preload Images
  useEffect(() => {
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
          // Force update to rely on useTransform firing rendering
          setImages([...loadedImages]);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const renderFrame = (index: number) => {
    if (images.length === 0 || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[Math.floor(index)];
    if (!img || !img.complete) return;

    // Fixed internal resolution
    canvas.width = 1920;
    canvas.height = 1080;

    // Draw image covering the canvas (similar to object-fit: cover)
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

  useTransform(frameIndex, (latest) => {
    renderFrame(latest);
    return latest;
  });

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-100 mix-blend-screen brightness-125"
      />
      {/* Cinematic subtle gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-transparent opacity-40 pointer-events-none" />
    </div>
  );
}
