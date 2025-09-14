import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from './components/ui/Marquee';
import AboutMe from './components/ui/AboutMe';
import MenuButton from './components/ui/MenuButton';
import SidebarMenu from './components/ui/SidebarMenu';
import TopBar from './components/ui/TopBar';
import TVPanel from './components/ui/TVPanel';


// hooks
import { useMenuState } from './hooks/useMenuState';
import { usePowerTv } from './hooks/usePowerTv';
import SocialIcons from './components/ui/SocialIcons';
import Projects from './components/ui/Projects';

// assets used by App (TV gifs + background)
const BG_CYAN = new URL(
  './assets/backgrounds/background-graph-cyan.png',
  import.meta.url
).href;
const TV_RAINBOW = new URL(
  './assets/backgrounds/wallpaper-tv-rainbow.gif',
  import.meta.url
).href;
const TV_TURN_OFF = new URL(
  './assets/backgrounds/tv-turn-off.gif',
  import.meta.url
).href;

export default function App() {
  
  const { open, selected, handleOpen, handleSelected } = useMenuState(
    true,
    'HOME'
  );

  const { tvSrc, handlePowerClick } = usePowerTv({
    rainbowGif: TV_RAINBOW,
    turnOffGif: TV_TURN_OFF,
  });

  return (
    <div className='w-full h-full bg-amber-600'>
      <div
        className='bg-cover bg-center bg-fixed w-full mt-0 pb-6'
        style={{ backgroundImage: `url(${BG_CYAN})` }}
      >
        <MenuButton open={open} onToggle={handleOpen} />

        <main className='flex gap-x-3 w-[95%]  items-center justify-self-center mt-10 mx-4 md:w-[95%] lg:mt-7 lg:w-full lg:justify-evenly'>
          <SidebarMenu
            open={open}
            selected={selected}
            onSelect={handleSelected}
          />

          <motion.aside
            className='bg-[#fd84c5] w-auto h-120 sm:h-140 lg:w-full md:h-150 lg:h-125 rounded-3xl neu'
            style={{ width: '100%' }}
            animate={{
              width: open ? '80%' : '90%',
              marginLeft: open ? '0' : 'auto',
              marginRight: open ? '0' : 'auto',
              justifyContent: open ? '0' : 'center',
              alignItems: open ? '' : 'center',
              justifySelf: open ? '' : 'center',
            }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Top bar: traffic lights + power button */}
            <TopBar onPowerClick={handlePowerClick} />

            {/* TV, typewriter and titles */}
            <TVPanel tvSrc={tvSrc} />

            {/* social icons */}
            <SocialIcons />
          </motion.aside>
        </main>
      </div>

      <Marquee />
      <AboutMe />
      <Projects />
    </div>
  );
}
