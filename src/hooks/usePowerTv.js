import { useState } from 'react';

export function usePowerTv(options = {}) {
  const TURN_OFF_DURATION = options.turnOffDuration ?? 3000;
  const RAINBOW_GIF = options.rainbowGif ?? 'src/assets/wallpaper-tv-rainbow.gif';
  const [tvSrc, setTvSrc] = useState(RAINBOW_GIF);
  const [isTurningOff, setIsTurningOff] = useState(false);

  const handlePowerClick = () => {
    if (isTurningOff) return;

    if (!tvSrc) {
      // Jika layar kosong → hidupkan kembali
      setTvSrc(RAINBOW_GIF);
      return;
    }

    // Matikan dengan animasi lalu kosongkan
    setIsTurningOff(true);
    const gifUrl = `src/assets/tv-turn-off.gif?${Date.now()}`;
    setTvSrc(gifUrl);

    setTimeout(() => {
      setTvSrc(''); // kosongkan layar
      setIsTurningOff(false);
    }, TURN_OFF_DURATION);
  };

  return {
    tvSrc,
    isTurningOff,
    handlePowerClick,
    setTvSrc, // expose in case caller perlu memaksa sumber lain
  };
}
