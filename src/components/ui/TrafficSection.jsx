import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import {
  useTrafficLight,
  trafficLightVariants,
  yellowLightVariants,
  redLightVariants,
} from "../hooks/useTrafficLight";
import { useTV } from "../hooks/useTV";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function TrafficSection() {
  const { current, sequence } = useTrafficLight();
  const { tvSrc, handlePowerClick } = useTV();
  const displayedText = useTypingEffect();

  return (
    <div>
      {/* bar atas */}
      <div className="mt-3 pl-2 flex flex-row justify-between gap-x-4">
        <ul className="flex gap-x-2 ml-4">
          <motion.li
            className="bg-[#2fff2f] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11"
            animate={sequence[current]}
            variants={trafficLightVariants}
            transition={{ duration: 0.3 }}
          />
          <motion.li
            className="bg-[#ffec00] rounded-full neu neu-active neu-focus w-10 h-10 sm:w-11 sm:h-11"
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
        <ul
          id="turn-off"
          className="mr-2 md:mr-10 cursor-pointer"
          onClick={handlePowerClick}
        >
          <li>
            <div className="bg-[#ff4910] rounded-xl w-12 h-12 flex items-center justify-center neu neu-active neu-focus">
              <FontAwesomeIcon icon={faPowerOff} size="lg" />
            </div>
          </li>
        </ul>
      </div>

      {/* TV */}
      <div className="flex flex-col items-center">
        <div className="w-[80%] h-40 neu mt-3 sm:mt-6 lg:w-[90%] lg:h-45 rounded-3xl flex items-center justify-center overflow-hidden bg-black">
          {tvSrc && (
            <img
              key={tvSrc}
              src={tvSrc}
              className="w-full h-full"
              alt="TV"
              draggable={false}
            />
          )}
        </div>

        <div className="mt-6 gap-y-4 sm:mt-9 lg:mt-5 flex flex-col items-center">
          <h1
            className={`font-gothicexpanded text-white text-lg mx-2 font-black sm:text-3xl md:text-3xl lg:text-4xl text-stroke-neu
      min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center ${
        displayedText ? "visible" : "invisible"
      }`}
          >
            {displayedText || "\u00A0"}
          </h1>

          <h1 className="font-gothicexpanded text-[#E3A018] text-sm font-[1000px] sm:text-xl md:text-3xl lg:text-3xl text-stroke-neu">
            FRONT-END DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
}
