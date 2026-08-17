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
  const requestedIndexRef = useRef<number>(0);
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

    // Initialize all image objects synchronously
    for (let i = 0; i < frameCount; i++) {
      loadedImages.push(new Image());
    }
    imagesRef.current = loadedImages;

    // Load first frame immediately
    const firstImg = loadedImages[0];
    firstImg.src = "/Sequence/frame_000_delay-0.066s.webp";
    firstImg.onload = () => {
      loadedCount++;
      if (lastIndexRef.current === -1) {
        renderFrame(0);
      }
      if (requestedIndexRef.current === 0) {
        renderFrame(0);
      }
    };

    // Sequential batch loader for remaining frames (batches of 6)
    const remainingIndices = Array.from({ length: frameCount - 1 }, (_, k) => k + 1);
    const batchSize = 6;

    const loadNextBatch = (batchIndex: number) => {
      const start = batchIndex * batchSize;
      const end = Math.min(start + batchSize, remainingIndices.length);
      if (start >= remainingIndices.length) return;

      const batch = remainingIndices.slice(start, end);
      let batchLoaded = 0;

      batch.forEach((i) => {
        const img = loadedImages[i];
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/Sequence/frame_${paddedIndex}_delay-0.066s.webp`;

        const onFinished = () => {
          loadedCount++;
          batchLoaded++;
          if (requestedIndexRef.current === i) {
            renderFrame(i);
          }
          if (loadedCount === frameCount) {
            renderFrame(requestedIndexRef.current);
          }
          if (batchLoaded === batch.length) {
            loadNextBatch(batchIndex + 1);
          }
        };

        img.onload = onFinished;
        img.onerror = onFinished; // proceed anyway on error
      });
    };

    // Start loading subsequent batches after a 100ms delay to give critical assets priority
    const timer = setTimeout(() => {
      loadNextBatch(0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const renderFrame = (index: number) => {
    const images = imagesRef.current;
    if (images.length === 0 || !canvasRef.current) return;
    
    const frameInt = Math.floor(index);
    requestedIndexRef.current = frameInt;

    const img = images[frameInt];
    if (!img || !img.complete) return;
    
    if (frameInt === lastIndexRef.current && frameInt !== 0) return;
    lastIndexRef.current = frameInt;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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
