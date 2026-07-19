import { useState } from 'react';
export function usePowerTv(options = {}) {
  const TURN_OFF_DURATION = options.turnOffDuration ?? 3000;
  const RAINBOW_GIF =
    options.rainbowGif ?? 'src/assets/wallpaper-tv-rainbow.gif';
  const TURN_OFF_GIF = options.turnOffGif ?? 'src/assets/tv-turn-off.gif';

  const [tvSrc, setTvSrc] = useState(''); // Default TV mati (hitam)
  const [isTurningOff, setIsTurningOff] = useState(false);

  const handlePowerClick = () => {
    if (isTurningOff) return;

    // Jika TV mati, nyalakan dengan Rainbow
    if (!tvSrc) {
      setTvSrc(RAINBOW_GIF);
      return;
    }

    // Jika TV nyala, matikan dengan animasi TURN_OFF
    setIsTurningOff(true);
    setTvSrc(`${TURN_OFF_GIF}?${Date.now()}`);

    setTimeout(() => {
      setTvSrc('');
      setIsTurningOff(false);
    }, TURN_OFF_DURATION);
  };

  return { tvSrc, isTurningOff, handlePowerClick, setTvSrc };
}
