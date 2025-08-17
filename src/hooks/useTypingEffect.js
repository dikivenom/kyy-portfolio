import { useState, useEffect } from "react";

export function useTypingEffect() {
  const texts = ["DICKY RAMADHAN", "ディッキー ラマダン"];
  const SPEEDS = {
    default: { type: 80, del: 55, pause: 0 },
    "DICKY RAMADHAN": { type: 80, del: 55, pause: 0 },
  };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const current = texts[currentTextIndex];
    const {
      type: typingSpeed,
      del: deletingSpeed,
      pause: pauseTime,
    } = SPEEDS[current] ?? SPEEDS.default;

    if (!isDeleting) {
      if (displayedText.length < current.length) {
        timeout = setTimeout(
          () => setDisplayedText(current.slice(0, displayedText.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(
          () => setDisplayedText(current.slice(0, displayedText.length - 1)),
          deletingSpeed
        );
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((p) => (p + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  return displayedText;
}
