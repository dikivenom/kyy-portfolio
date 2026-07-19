import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from './components/ui/MarqueeIcons';
import AboutMe from './components/ui/AboutMe';
import MenuButton from './components/ui/MenuButton';
import SidebarMenu from './components/ui/SidebarMenu';
import TopBar from './components/ui/TopBar';
import TVPanel from './components/ui/TVPanel';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";


import { useMenuState } from './hooks/useMenuState';
import { usePowerTv } from './hooks/usePowerTv';
import SocialIcons from './components/ui/SocialIcons';
import Projects from './components/ui/Projects';
import Skills from './components/ui/Skills';
import Contact from './components/ui/Contact';
import Achievements from './components/ui/Certificate';
import Footer from './components/ui/Footer';
import { useEffect } from 'react';

  const TV_RAINBOW = "/kyy-portfolio/assets/backgrounds/wallpaper-tv-rainbow.mp4";
  const TV_TURN_OFF = "/kyy-portfolio/assets/backgrounds/tv-turn-off.gif";
export default function App() {
  
  const { open, selected, handleOpen, handleSelected } = useMenuState(
    true,
    'HOME'
  );

  useEffect(() => {
  AOS.init();
}, []);

  const { tvSrc, handlePowerClick } = usePowerTv({
    rainbowGif: TV_RAINBOW,
    turnOffGif: TV_TURN_OFF,
  });

  return (
  <div className="w-full h-full bg-[#65BCB5]">
    <div className="bg-cover bg-center bg-fixed w-full mt-0">
      <MenuButton open={open} onToggle={handleOpen} />

      <main className="flex pb-10 px-4 pt-2 bg-[#65BCB5] gap-x-3 w-full items-center justify-self-center md:w-full lg:mt-0 lg:w-full lg:justify-evenly">
        <SidebarMenu
          open={open}
          selected={selected}
          onSelect={handleSelected}
        />

        <motion.aside
          className="bg-[#fd84c5] w-auto h-120 sm:h-140 lg:w-full md:h-150 lg:h-125 rounded-3xl neu"
          style={{ width: "100%" }}
          animate={{
            width: open ? "80%" : "90%",
            marginLeft: open ? "0" : "auto",
            marginRight: open ? "0" : "auto",
            justifyContent: open ? "0" : "center",
            alignItems: open ? "" : "center",
            justifySelf: open ? "" : "center",
          }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <TopBar onPowerClick={handlePowerClick} />

          <TVPanel tvSrc={tvSrc} />

          <SocialIcons />
        </motion.aside>
      </main>
    </div>

    <Marquee />
    <div id="about-me">
      <AboutMe />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="achievements">
      <Achievements />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </div>
);
}