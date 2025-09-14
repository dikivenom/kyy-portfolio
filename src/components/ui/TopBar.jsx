import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useTrafficLight } from '../../hooks/useTrafficLight';

export default function TopBar({ onPowerClick }) {
  const {
    current,
    sequence,
    trafficLightVariants,
    yellowLightVariants,
    redLightVariants,
  } = useTrafficLight(700);

  return (
    <div className='mt-3 pl-2 flex flex-row justify-between gap-x-4'>
      <ul className='flex gap-x-2 ml-4'>
        <motion.li
          className='bg-[#2fff2f] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11'
          animate={sequence[current]}
          variants={trafficLightVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.li
          className='bg-[#ffec00] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11 '
          animate={sequence[current]}
          variants={yellowLightVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.li
          className='bg-[#ff4910] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11'
          animate={sequence[current]}
          variants={redLightVariants}
          transition={{ duration: 0.3 }}
        />
      </ul>

      <ul
        id='turn-off'
        className='mr-2 md:mr-10 cursor-pointer'
        onClick={onPowerClick}
      >
        <li>
          <div className='bg-[#ff4910] rounded-xl w-12 h-12 flex items-center justify-center neu neu-active neu-focus'>
            <FontAwesomeIcon icon={faPowerOff} size='lg' />
          </div>
        </li>
      </ul>
    </div>
  );
}
