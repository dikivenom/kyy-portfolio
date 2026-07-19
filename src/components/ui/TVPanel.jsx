import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from './Typewriter';

export default function TVPanel({ tvSrc }) {
  const texts = ['Network Enthusiast', 'IT Student'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % texts.length), 3000);
    return () => clearInterval(id);
  }, []);

  const isVideo =
    tvSrc &&
    (tvSrc.endsWith('.mp4') ||
      tvSrc.endsWith('.webm') ||
      tvSrc.includes('video'));

  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] h-40 neu mt-3 sm:mt-6 lg:w-[90%] lg:h-45 rounded-3xl flex items-center justify-center overflow-hidden bg-black">
        
        {tvSrc && (
          isVideo ? (
            <video
              key={tvSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={tvSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              key={tvSrc}
              src={tvSrc}
              className="w-full h-full object-cover"
              alt="TV"
              draggable={false}
            />
          )
        )}

      </div>

      <div className="mt-6 gap-y-4 sm:mt-9 lg:mt-0 lg:gap-y-1 flex flex-col items-center">
        <h1
          className={`font-big-shoulders text-white text-lg text-stroke-neu mx-2 font-black sm:text-3xl md:text-3xl lg:text-4xl lg:mt-5 min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center`}
        >
          <Typewriter />
        </h1>

        <h1
          className="font-gothicexpanded bg-blue-300 w-49 sm:w-55 sm:mt-4 text-center rotate-6 md:w-77 md:rotate-0 md:mt-8 lg:w-94 lg:rotate-0 px-3 py-1 neu text-[#FAFAFA] text-xs font-[1000px] sm:text-xl md:text-xl  lg:mt-4 text-stroke-neu tracking-widest"
          style={{ perspective: 900 }}
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
              style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </h1>
      </div>
    </div>
  );
}
