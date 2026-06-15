"use client";

import { useEffect } from "react";

export function ClickSound() {
  useEffect(() => {
    let audioContext: AudioContext | null = null;

    const playTone = () => {
      audioContext ??= new AudioContext();

      const now = audioContext.currentTime;
      const gain = audioContext.createGain();
      const first = audioContext.createOscillator();
      const second = audioContext.createOscillator();

      first.type = "sine";
      second.type = "triangle";
      first.frequency.setValueAtTime(640, now);
      second.frequency.setValueAtTime(960, now + 0.015);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.09, now + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

      first.connect(gain);
      second.connect(gain);
      gain.connect(audioContext.destination);

      first.start(now);
      second.start(now + 0.015);
      first.stop(now + 0.18);
      second.stop(now + 0.18);
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.closest("a, button")) {
        playTone();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
