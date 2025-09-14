import { motion } from 'framer-motion';

export default function TrafficLights({
  current,
  sequence,
  trafficLightVariants,
  yellowLightVariants,
  redLightVariants,
}) {
  return (
    <ul className="flex gap-x-2 ml-4">
      <motion.li
        className="bg-[#2fff2f] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11"
        animate={sequence[current]}
        variants={trafficLightVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.li
        className="bg-[#ffec00] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11 "
        animate={sequence[current]}
        variants={yellowLightVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.li
        className="bg-[#ff4910] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11"
        animate={sequence[current]}
        variants={redLightVariants}
        transition={{ duration: 0.3 }}
      />
    </ul>
  );
}