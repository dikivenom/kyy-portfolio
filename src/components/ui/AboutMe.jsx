import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProfileCard from './ProfileCard';
import useScrollText from '../../hooks/useScrollText';

const WHITE_PAPER_BG =
  '/kyy-portfolio/assets/backgrounds/white-paper-texture.jpg';

export default function AboutMe() {
  const { ref, inView, entry } = useInView({
    threshold: Array.from({ length: 100 }, (_, i) => i / 100),
  });

 const fullText = `Halooo! Saya mahasiswa Teknologi Informasi yang menyukai web development, jaringan komputer, dan sistem operasi. Di web, saya terbiasa menggunakan React, Laravel, Livewire, Tailwind CSS, dan MySQL.

Di bidang jaringan, saya berpengalaman melakukan simulasi dan perancangan topologi menggunakan Cisco Packet Tracer dan PnetLab, termasuk konfigurasi Static Routing, OSPF, RIP, serta VLAN. Saya juga terbiasa melakukan instalasi dan konfigurasi sistem operasi, seperti dual boot, pengaturan partisi, serta troubleshooting dasar sistem dan hardware.`;

  const displayedText = useScrollText(entry, fullText);

  return (
    <>
      <section
        className='w-full h-200 bg-[#9723C9] flex flex-col items-center md:flex-row md:items-baseline md:justify-evenly 
      lg:flex-row  lg:justify-evenly md:h-150 lg:h-140 lg:items-center'
      >
        
        <ProfileCard />

        <motion.article
          ref={ref}
          initial={{ rotate: -2, x: 0 }}
          animate={{ rotate: [-2, 2, -2], x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          className='relative bg-center bg-no-repeat mt-8 neu bg-cover w-[90%] h-[45%] sm:w-[95%] md:w-[50%] md:h-[80%] lg:w-[60%] lg:h-[50%] shadow-lg'
          style={{ backgroundImage: `url(${WHITE_PAPER_BG})` }}
        >
          <div className='absolute top-0 -translate-y-full left-1/2 transform -translate-x-1/2 w-1 h-10 bg-black md:hidden'></div>

          <div className='w-full break-words'>
            <h4 className='font-caveat-brush p-2 text-md sm:text-xl md:px-3 leading-relaxed break-words'>
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className='inline-block'
              >
                |
              </motion.span>
            </h4>
          </div>
        </motion.article>
      </section>
    </>
  );
}
