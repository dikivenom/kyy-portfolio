import { motion, AnimatePresence } from 'framer-motion';
const DOODLE_MOUSE = "/kyy-portfolio/assets/characters/doodle-mouse.png"

import {
  faHouse,
  faUser,
  faFolder,
  faLightbulb,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SidebarMenu({ open, selected, onSelect }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: -90, scale: 0.8 }}
          animate={{ x: 0, scale: 1.05 }}
          exit={{
            x: -300,
            scale: 0.7,
            transition: { duration: 0.7, ease: 'easeOut' },
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            bounce: 1,
          }}
         
          className='bg-[#FFFF00] w-[19%] h-114 sm:w-40 sm:h-132 md:h-140 lg:w-[15%] lg:h-120 neu neu-active neu-focus border-black rounded-4xl'
        >
          <div className='flex justify-center items-center align-middle'>
            <img
              src={DOODLE_MOUSE}
              className='w-auto pt-3 sm:w-[60%]  lg:w-[60%]'
              alt='doodle-monitor'
            />
          </div>
          <hr className='border-2 border-black my-4' />

          <ul className='font-rocknroll-one justify-self-center w-full items-center flex flex-col gap-y-7 mt-4 md:mt-8 sm:gap-y-4 '>
            <li>
              <span className='block sm:hidden'>
                <FontAwesomeIcon
                  icon={faHouse}
                  size='xl'
                  className=' bg-white p-[2px] neu neu-active neu-focus rounded-sm'
                />
              </span>
              <span
                onClick={() => onSelect('HOME')}
                className={`hidden w-full sm:block cursor-pointer p-2 rounded ${
                  selected === 'HOME' ? ' bg-white neu my-1' : ''
                }`}
              >
                HOME
              </span>
            </li>

            <li>
              <span className='block sm:hidden'>
                <FontAwesomeIcon
                  icon={faUser}
                  size='lg'
                  className='bg-white p-[2px] neu neu-active neu-focus rounded-sm'
                />
              </span>
              <span
                onClick={() => onSelect('ABOUT ME')}
                className={`hidden sm:block cursor-pointer p-2 rounded ${
                  selected === 'ABOUT ME' ? 'w-full bg-white neu my-1' : ''
                }`}
              >
                ABOUT ME
              </span>
            </li>

            <li>
              <span className='block sm:hidden'>
                <FontAwesomeIcon
                  icon={faFolder}
                  size='lg'
                  className='bg-white p-[2px] neu neu-active neu-focus rounded-sm'
                />
              </span>
              <span
                onClick={() => onSelect('PROJECT')}
                className={`hidden sm:block cursor-pointer p-2 rounded ${
                  selected === 'PROJECT' ? 'bg-white neu my-1' : ''
                }`}
              >
                PROJECT
              </span>
            </li>

            <li>
              <span className='block sm:hidden'>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  size='lg'
                  className='bg-white p-[2px] neu neu-active neu-focus rounded-sm'
                />
              </span>
              <span
                onClick={() => onSelect('TECH-STACK')}
                className={`hidden sm:block cursor-pointer p-2 rounded ${
                  selected === 'TECH-STACK' ? 'bg-white neu my-1' : ''
                }`}
              >
                TECH-STACK
              </span>
            </li>

            <li>
              <span className='block sm:hidden'>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  size='lg'
                  className='bg-white p-[2px] neu neu-active neu-focus rounded-sm'
                />
              </span>
              <span
                onClick={() => onSelect('CONTACT')}
                className={`hidden sm:block cursor-pointer p-2 rounded ${
                  selected === 'CONTACT' ? 'bg-white neu my-1' : ''
                }`}
              >
                CONTACT
              </span>
            </li>
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
