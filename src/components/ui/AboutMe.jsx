import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProfileCard from "./ProfileCard";
import useScrollText from "../../hooks/useScrollText";

export default function AboutMe() {
  const { ref, inView, entry } = useInView({
    threshold: Array.from({ length: 100 }, (_, i) => i / 100), 
  });

  const fullText = `Halo, perkenalkan nama saya Dicky Ramadhan, saya seorang Mahasiswa
Program Studi Teknologi Informasi. Saya memiliki ketertarikan yang
besar pada dunia pemrograman, pengembangan aplikasi, dan teknologi
digital yang terus berkembang. Saat ini saya sedang fokus
memperdalam keterampilan di bidang front-end development, desain
antarmuka, serta pengelolaan data. Selain itu, saya juga senang
mempelajari hal-hal baru, berdiskusi, dan berbagi pengetahuan dengan
orang lain untuk mengembangkan wawasan bersama.`;


  const displayedText = useScrollText(entry, fullText); 

  return (
    <section className="w-full h-200 bg-[#9810fa] flex flex-col items-center">
      <ProfileCard />

      <motion.article
        ref={ref}
        initial={{ rotate: -2, x: 0 }}
        animate={{ rotate: [-2, 2, -2], x: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="relative bg-[url('src/assets/background/white-paper-texture.jpg')] bg-center bg-no-repeat mt-8 neu bg-cover w-[90%] h-[40%] sm:w-[95%] shadow-lg"
      >
        {/* Tali kecil */}
        <div className="absolute top-0 -translate-y-full left-1/2 transform -translate-x-1/2 w-1 h-10 bg-black"></div>

        <div className="w-full break-words">
          <h4 className="font-caveat-brush p-2 text-sm sm:text-xl md:text-2xl leading-relaxed break-words">
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block"
            >
              |
            </motion.span>
          </h4>
        </div>
      </motion.article>
    </section>
  );
}
