import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Typewriter({
  texts = ['DICKY RAMADHAN', 'ディッキー ラマダン'],
  displayTime = 2500,
}) {
  const safeTexts =
    Array.isArray(texts) && texts.length ? texts : [String(texts)];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % safeTexts.length),
      displayTime
    );
    return () => clearTimeout(t);
  }, [index, safeTexts.length, displayTime]);

  const parent = {
    initial: {},
    animate: { transition: { staggerChildren: 0.05 } },
    exit: {},
  };
  const child = {
    initial: { opacity: 0, y: 6 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
  };

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={safeTexts[index]}
        variants={parent}
        initial='initial'
        animate='animate'
        exit='exit'
        className='inline-flex'
      >
        {safeTexts[index].split('').map((ch, i) => (
          <motion.span
            aria-hidden='true'
            variants={child}
            key={`${index}-${i}`}
            className='whitespace-pre'
          >
            {ch}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
