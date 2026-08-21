import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import ambientTrack from '../music/alex-morgan-indian-classical-raga-Landing-page-music.mp3';

const AmbientMusicContext = createContext(null);

export function AmbientMusicProvider({ children }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasAttemptedAutoplayRef = useRef(false);

  const stopAmbientMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsMusicPlaying(false);
  }, []);

  const startAmbientMusic = useCallback(async () => {
    if (typeof window === 'undefined') return;

    if (!audioRef.current) {
      const audio = new Audio(ambientTrack);
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0.35;
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      }
      setIsMusicPlaying(true);
      hasAttemptedAutoplayRef.current = true;
    } catch {
      hasAttemptedAutoplayRef.current = false;
      setIsMusicPlaying(false);
    }
  }, []);

  useEffect(() => {
    void startAmbientMusic();

    const handleUserInteraction = () => {
      if (!hasAttemptedAutoplayRef.current) {
        void startAmbientMusic();
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && !hasAttemptedAutoplayRef.current) {
        void startAmbientMusic();
      }
    };

    window.addEventListener('pointerdown', handleUserInteraction, { once: true });
    window.addEventListener('keydown', handleUserInteraction, { once: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibility);
      stopAmbientMusic();
    };
  }, [startAmbientMusic, stopAmbientMusic]);

  const value = useMemo(
    () => ({
      isMusicPlaying,
      startAmbientMusic,
      stopAmbientMusic,
    }),
    [isMusicPlaying, startAmbientMusic, stopAmbientMusic]
  );

  return <AmbientMusicContext.Provider value={value}>{children}</AmbientMusicContext.Provider>;
}

export function useAmbientMusic() {
  const context = useContext(AmbientMusicContext);
  return context ?? {
    isMusicPlaying: false,
    startAmbientMusic: async () => {},
    stopAmbientMusic: () => {},
  };
}
