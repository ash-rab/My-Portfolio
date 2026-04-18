"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio object
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.4; // Default volume (40%)
    audioRef.current = audio;

    // Sync state with actual audio element events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Browsers require user interaction before playing audio
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setIsPlaying(false);
      });
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="group relative flex items-center justify-center h-10 w-10 overflow-hidden rounded-full bg-white/5 border border-white/10 text-white/80 transition-all hover:bg-white/10 hover:text-white"
      title={isPlaying ? "Mute Music" : "Play Music"}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {isPlaying ? (
        <Volume2 className="h-4 w-4 transition-transform group-hover:scale-110 group-hover:text-blue-400" />
      ) : (
        <VolumeX className="h-4 w-4 transition-transform group-hover:scale-110 group-hover:text-blue-400" />
      )}
    </button>
  );
}
