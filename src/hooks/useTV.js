import { useState } from "react";

export const useTV = () => {
  const TURN_OFF_DURATION = 3000;
  const RAINBOW_GIF = "src/assets/wallpaper-tv-rainbow.gif";

  const [tvSrc, setTvSrc] = useState(RAINBOW_GIF);
  const [isTurningOff, setIsTurningOff] = useState(false);

  const handlePowerClick = () => {
    if (isTurningOff) return;

    if (tvSrc === "") {
      setTvSrc(RAINBOW_GIF);
    } else {
      setIsTurningOff(true);
      const gifUrl = `src/assets/tv-turn-off.gif?${Date.now()}`;
      setTvSrc(gifUrl);

      setTimeout(() => {
        setTvSrc("");
        setIsTurningOff(false);
      }, TURN_OFF_DURATION);
    }
  };

  return { tvSrc, handlePowerClick };
};
