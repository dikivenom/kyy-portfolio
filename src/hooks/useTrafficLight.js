import { useEffect, useState, useMemo } from 'react';

export function useTrafficLight(intervalMs = 700) {
  const sequence = useMemo(() => ['green', 'yellow', 'red'], []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sequence.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, sequence.length]);

  // variants untuk framer-motion — kembalikan agar App.jsx tetap ringkas
  const trafficLightVariants = useMemo(() => ({
    green: { opacity: 1 },
    yellow: { opacity: 0.2 },
    red: { opacity: 0.2 },
  }), []);

  const yellowLightVariants = useMemo(() => ({
    green: { opacity: 0.2 },
    yellow: { opacity: 1 },
    red: { opacity: 0.2 },
  }), []);

  const redLightVariants = useMemo(() => ({
    green: { opacity: 0.2 },
    yellow: { opacity: 0.2 },
    red: { opacity: 1 },
  }), []);

  return {
    current,
    sequence,
    trafficLightVariants,
    yellowLightVariants,
    redLightVariants,
  };
}
