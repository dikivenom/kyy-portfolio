import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from './Typewriter';

export default function TVPanel({ tvSrc }) {
  const texts = ['WEB DEVELOPER', 'NETWORK ENGINEER'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % texts.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='w-[80%] h-40 neu mt-3 sm:mt-6 lg:w-[90%] lg:h-45 rounded-3xl flex items-center justify-center overflow-hidden bg-black'>
        {tvSrc ? (
          <img
            key={tvSrc}
            src={tvSrc}
            className='w-full h-full'
            alt='TV'
            draggable={false}
          />
        ) : null}
      </div>

      <div className='mt-6 gap-y-4 sm:mt-9 lg:mt-5 flex flex-col items-center'>
        <h1
          className={`font-gothicexpanded text-white text-lg mx-2 font-black sm:text-3xl md:text-3xl lg:text-4xl text-stroke-neu min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center`}
        >
          <Typewriter />
        </h1>

        {/* teks yang berganti-ganti dengan animasi flip.
            wrapper punya perspective untuk 3D; tetap gunakan rotate-6 pada layar kecil
            dan lg:rotate-0 untuk memastikan tidak dimiringkan di layar besar */}
        <h1
          className='font-caveat-brush bg-blue-300 w-40 text-center rotate-6 md:w-77 md:rotate-0 md:mt-8 lg:w-80 lg:rotate-0 px-3 py-1 neu text-[#FAFAFA] text-sm font-[1000px] sm:text-xl md:text-3xl lg:text-3xl text-stroke-neu tracking-widest'
          style={{ perspective: 900 }}
          aria-live='polite'
        >
          <AnimatePresence mode='wait'>
            <motion.span
              key={texts[index]}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className='inline-block'
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
