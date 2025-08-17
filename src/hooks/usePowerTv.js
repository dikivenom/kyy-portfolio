import { useState } from 'react';
export function usePowerTv(options = {}) {
  const TURN_OFF_DURATION = options.turnOffDuration ?? 3000;
  const RAINBOW_GIF = options.rainbowGif ?? 'src/assets/wallpaper-tv-rainbow.gif';
  const TURN_OFF_GIF = options.turnOffGif ?? 'src/assets/tv-turn-off.gif';

  const [tvSrc, setTvSrc] = useState(RAINBOW_GIF);
  const [isTurningOff, setIsTurningOff] = useState(false);

  const handlePowerClick = () => {
    if (isTurningOff) return;

    if (!tvSrc) {
      setTvSrc(RAINBOW_GIF);
      return;
    }

    setIsTurningOff(true);
    // gunakan TURN_OFF_GIF + cache-bust
    setTvSrc(`${TURN_OFF_GIF}?${Date.now()}`);

    setTimeout(() => {
      setTvSrc('');
      setIsTurningOff(false);
    }, TURN_OFF_DURATION);
  };

  return { tvSrc, isTurningOff, handlePowerClick, setTvSrc };
}
