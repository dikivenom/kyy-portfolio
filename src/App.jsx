import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faFolder,
  faLightbulb,
  faLaptopCode,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from './components/ui/Marquee';
import AboutMe from './components/ui/AboutMe';

// hooks
import { useMenuState } from './hooks/useMenuState';
import { usePowerTv } from './hooks/usePowerTv';
import { useTrafficLight } from './hooks/useTrafficLight';
import { useTypingEffect } from './hooks/useTypingEffect';

export default function App() {
  // hooks
  const { open, selected, handleOpen, handleSelected } = useMenuState(true, 'HOME');
  const { tvSrc, isTurningOff, handlePowerClick } = usePowerTv();
  const {
    current,
    sequence,
    trafficLightVariants,
    yellowLightVariants,
    redLightVariants,
  } = useTrafficLight(700);

  const displayedText = useTypingEffect();



  return (
    <div className="bg-[url('src/assets/background-graph-cyan.png')] 
                    bg-cover bg-center bg-fixed 
                    w-full mt-0">
      <nav onClick={handleOpen}>
        <div className='pt-4'>
          <img
            src={ open ? 'src/assets/X-button.png' : 'src/assets/Menu_Button.png' }
            alt={open ? 'close' : 'menu'}
            className='neu neu-active neu-focus w-[52px] ml-3.5 lg:w-14 lg:ml-6.5'
          />
        </div>
      </nav>

      <main className='flex gap-x-3 w-[95%]  items-center justify-self-center mt-10 mx-4 md:w-full lg:mt-7 lg:w-full lg:justify-evenly'>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ x: -90, scale: 0.8 }}
              animate={{ x: 0, scale: 1.05 }}
              exit={{ x: -300, scale: 0.7, transition: { duration: 0.7, ease: 'easeOut' } }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, bounce: 1 }}
              whileHover={{ x: 2.5, y: 2.5, transition: { duration: 0.15, ease: 'easeOut' } }}
              whileTap={{ x: 0, y: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
              className='bg-[#FFFF00] w-[19%] h-114 sm:w-40 sm:h-125 md:h-140 lg:w-[15%] lg:h-120 neu neu-active neu-focus border-black rounded-4xl'
            >
              <div className='flex justify-center items-center align-middle'>
                <img src='src/assets/doodle-mouse.png' className='w-auto pt-3 lg:w-[60%]' alt='doodle-monitor' />
              </div>
              <hr className='border-2 border-black my-4' />

              <ul className='font-rocknroll-one justify-self-center w-full items-center flex flex-col gap-y-7 mt-4 md:mt-8 sm:gap-y-4 '>
                <li>
                  <span className='block sm:hidden'>
                    <FontAwesomeIcon icon={faHouse} size='xl' className=' bg-white p-[2px] neu neu-active neu-focus rounded-sm' />
                  </span>
                  <span onClick={() => handleSelected('HOME')} className={`hidden w-full sm:block cursor-pointer p-2 rounded ${selected === 'HOME' ? ' bg-white neu my-1' : ''}`}>
                    HOME
                  </span>
                </li>

                <li>
                  <span className='block sm:hidden'>
                    <FontAwesomeIcon icon={faUser} size='lg' className='bg-white p-[2px] neu neu-active neu-focus rounded-sm' />
                  </span>
                  <span onClick={() => handleSelected('ABOUT ME')} className={`hidden sm:block cursor-pointer p-2 rounded ${selected === 'ABOUT ME' ? 'w-full bg-white neu my-1' : ''}`}>
                    ABOUT ME
                  </span>
                </li>

                <li>
                  <span className='block sm:hidden'>
                    <FontAwesomeIcon icon={faFolder} size='lg' className='bg-white p-[2px] neu neu-active neu-focus rounded-sm' />
                  </span>
                  <span onClick={() => handleSelected('PROJECT')} className={`hidden sm:block cursor-pointer p-2 rounded ${selected === 'PROJECT' ? 'bg-white neu my-1' : ''}`}>
                    PROJECT
                  </span>
                </li>

                <li>
                  <span className='block sm:hidden'>
                    <FontAwesomeIcon icon={faLightbulb} size='lg' className='bg-white p-[2px] neu neu-active neu-focus rounded-sm' />
                  </span>
                  <span onClick={() => handleSelected('TECH-STACK')} className={`hidden sm:block cursor-pointer p-2 rounded ${selected === 'TECH-STACK' ? 'bg-white neu my-1' : ''}`}>
                    TECH-STACK
                  </span>
                </li>

                <li>
                  <span className='block sm:hidden'>
                    <FontAwesomeIcon icon={faLaptopCode} size='lg' className='bg-white p-[2px] neu neu-active neu-focus rounded-sm' />
                  </span>
                  <span onClick={() => handleSelected('CONTACT')} className={`hidden sm:block cursor-pointer p-2 rounded ${selected === 'CONTACT' ? 'bg-white neu my-1' : ''}`}>
                    CONTACT
                  </span>
                </li>
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>

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
          <div className='mt-3 pl-2 flex flex-row justify-between gap-x-4'>
            <ul className='flex gap-x-2 ml-4'>
              <motion.li className='bg-[#2fff2f] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11' animate={sequence[current]} variants={trafficLightVariants} transition={{ duration: 0.3 }} />
              <motion.li className='bg-[#ffec00] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11 ' animate={sequence[current]} variants={yellowLightVariants} transition={{ duration: 0.3 }} />
              <motion.li className='bg-[#ff4910] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11' animate={sequence[current]} variants={redLightVariants} transition={{ duration: 0.3 }} />
            </ul>

            <ul id='turn-off' className='mr-2 md:mr-10 cursor-pointer' onClick={handlePowerClick}>
              <li>
                <div className='bg-[#ff4910] rounded-xl w-12 h-12 flex items-center justify-center neu neu-active neu-focus'>
                  <FontAwesomeIcon icon={faPowerOff} size='lg' />
                </div>
              </li>
            </ul>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-[80%] h-40 neu mt-3 sm:mt-6 lg:w-[90%] lg:h-45 rounded-3xl flex items-center justify-center overflow-hidden bg-black'>
              {tvSrc ? (
                <img key={tvSrc} src={tvSrc} className='w-full h-full' alt='TV' draggable={false} />
              ) : null}
            </div>

            <div className='mt-6 gap-y-4 sm:mt-9 lg:mt-5 flex flex-col items-center'>
              <h1 className={`font-gothicexpanded text-white text-lg mx-2 font-black sm:text-3xl md:text-3xl lg:text-4xl text-stroke-neu min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center ${displayedText ? 'visible' : 'invisible'}`}>
                {displayedText || '\u00A0'}
              </h1>

              <h1 className='font-caveat-brush bg-blue-300 rotate-6 lg:rotate-0 px-3 py-1 neu text-[#FAFAFA] text-sm font-[1000px] sm:text-xl md:text-3xl lg:text-3xl text-stroke-neu tracking-widest'>
                DEVELOPER PEMULA
              </h1>
            </div>
          </div>

          <div id='icon-sosmed' className='flex items-center justify-center bg-white border-y-4 border-black mt-10 w-full h-12 sm:mt-20 [@media(max-width:370px)]:mt-9  lg:mt-4'>
            <ul className='flex items-center justify-center gap-6'>
              <li><img src='src/assets/icons/icons8-instagram.png' className='w-10 h-auto text-stroke-neu' alt='' /></li>
              <li><img src='src/assets/icons/icons8-github-squared.png' className='w-10 h-auto text-stroke-neu' alt='' /></li>
              <li><img src='src/assets/icons/icons8-linkedin.png' className='w-10 h-auto text-stroke-neu' alt='' /></li>
              <li><img src='src/assets/icons/icons8-instagram.png' className='w-10 h-auto text-stroke-neu' alt='' /></li>
            </ul>
          </div>
        </motion.aside>
      </main>

      <Marquee />
      <AboutMe />
    </div>
  );
}
