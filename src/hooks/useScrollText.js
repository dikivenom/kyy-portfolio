import { useState, useEffect } from "react";

export default function useScrollText(entry, fullText) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (entry) {
      const ratio = entry.intersectionRatio; // 0 → 1
      const length = Math.floor(fullText.length * ratio); 
      setDisplayedText(fullText.slice(0, length));
    }
  }, [entry, fullText]);

  return displayedText;
}
