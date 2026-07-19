import { faFan } from '@fortawesome/free-solid-svg-icons';
import { faClover } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'aos/dist/aos.css';
const DICKY_R = '/kyy-portfolio/assets/characters/dicky-ramadhan.jpeg';
const DOODLE_KEYBOARD = '/kyy-portfolio/assets/characters/doodle-keyboard.png';
const DOODLE_LAPTOP = '/kyy-portfolio/assets/characters/doodle-laptop.png';
const LIVEWIRE_UBUR_ICON = '/kyy-portfolio/assets/icons/livewire-ubur-ubur.png';
const REACT_ICON = '/kyy-portfolio/assets/icons/react.png';
const JS_ICON = '/kyy-portfolio/assets/icons/javascript.png';
const TAILWIND_ICON = '/kyy-portfolio/assets/icons/tailwind-css-seeklogo.svg';
const LARAVEL_ICON = '/kyy-portfolio/assets/icons/laravel.png';
const MYSQL_ICON = '/kyy-portfolio/assets/icons/my-sql.png';
const MIKROTIK_ICON = '/kyy-portfolio/assets/icons/mikrotik.png';
const CISCO_ICON = '/kyy-portfolio/assets/icons/cisco.png';
const WINBOX_ICON = '/kyy-portfolio/assets/icons/winbox.png';

export default function Skills() {
  return (
    <>
      <main className='bg-[#E24430] pt-15'>
        <div className='flex justify-center mb-8'>
          <div className='flex gap-x-1 sm:gap-x-2 justify-center items-center bg-amber-400 sm:px-7 py-3 rounded-lg neu'>
            <FontAwesomeIcon
              icon={faClover}
              size='2x'
              className='
    text-[#FB3E29]
    [stroke:#000]
    [stroke-width:35]
    animate-spin
  '
            />

            <h1
              className='
      text-2xl font-bold text-center text-[#FFFFFF] text-stroke-neu 
      font-drinks-fruit sm:text-3xl lg:text-5xl
      skew-x-[12deg]
    '
            >
              Hard Skills
            </h1>
            <FontAwesomeIcon
              icon={faFan}
              size='2x'
              className='
    text-[#FB3E29]
    [stroke:#000]
    [stroke-width:35]
    animate-spin
  '
            />
          </div>
        </div>

        <section className='flex relative bg-amber-400 rounded-3xl border-l-5 border-t-5 border-r-10 border-b-10 border-black w-[90%] sm:w-[80%] mx-auto flex-col-reverse md:flex-row items-center justify-evenly gap-x-8 gap-y-20 py-12 px-6 '>
          <img
            data-aos='fade-up'
            data-aos-duration='1000'
            className='absolute right-[-20px] top-[-75px] z-[99] w-[120px] sm:w-[155px] sm:top-[-80px] md:w-[170px] md:top-[-60px] 
            lg:w-[200px] lg:top-[-90px] pointer-events-none select-none'
            src={DOODLE_LAPTOP}
            alt='Doodle Laptop'
            draggable={false}
          />
          <img
            data-aos='fade-up'
            data-aos-duration='1000'
            className='absolute left-[-35px] bottom-0 z-[99] w-[170px] sm:w-[240px] sm:left-[-100px] lg:w-[250px] pointer-events-none select-none'
            src={DOODLE_KEYBOARD}
            alt='Doodle Keyboard'
            draggable={false}
          />
          <div
            className='flex-shrink-0 neu'
            data-aos='flip-right'
            data-aos-duration='1000'
          >
            <img
              src={DICKY_R}
              alt='Foto Saya'
              className='w-56 h-100 object-cover shadow-lg pointer-events-none select-none'
              draggable={false}
            />
          </div>

          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-10'>
            <img
              data-aos='flip-right'
              data-aos-duration='1000'
              loading='lazy'
              src={CISCO_ICON}
              alt='Cisco'
              className='w-16 h-16 p-1 lg:w-20 lg:h-20 object-contain neu bg-[#FFFFFF] pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-down'
              data-aos-duration='1000'
              loading='lazy'
              src={MIKROTIK_ICON}
              alt='Mikrotik'
              className='w-16 h-16 px-1 lg:w-20 lg:h-20 object-contain neu bg-slate-800 pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-left'
              data-aos-duration='1000'
              loading='lazy'
              src={WINBOX_ICON}
              alt='Winbox'
              className='w-16 h-16 p-1 lg:w-20 lg:h-20 object-contain neu bg-[#FFFFFF] pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-right'
              data-aos-duration='1000'
              loading='lazy'
              src={LIVEWIRE_UBUR_ICON}
              alt='Livewire'
              className='w-16 h-16 lg:w-20 lg:h-20 object-contain neu bg-[#d695df] pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-down'
              data-aos-duration='1000'
              loading='lazy'
              src={REACT_ICON}
              alt='React'
              className='w-16 h-16 p-1 lg:w-20 lg:h-20 object-contain neu bg-slate-700 pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-left'
              data-aos-duration='1000'
              loading='lazy'
              src={JS_ICON}
              alt='JavaScript'
              className='w-16 h-16 lg:w-20 lg:h-20 object-contain neu bg-[#EFDB4E] pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-right'
              data-aos-duration='1000'
              loading='lazy'
              src={TAILWIND_ICON}
              alt='Tailwind'
              className='w-16 h-16 p-1 lg:w-20 lg:h-20 object-contain neu bg-[#FFFFFF] pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-down'
              data-aos-duration='1000'
              loading='lazy'
              src={LARAVEL_ICON}
              alt='Laravel'
              className='w-16 h-16 p-1 lg:w-20 lg:h-20 object-contain neu bg-slate-800 pointer-events-none select-none'
              draggable={false}
            />
            <img
              data-aos='flip-left'
              data-aos-duration='1000'
              loading='lazy'
              src={MYSQL_ICON}
              alt='MySQL'
              className='w-16 h-16 p-1 lg:w-20 lg:h-20 object-contain neu bg-[#FFFFFF] pointer-events-none select-none'
              draggable={false}
            />
          </div>
        </section>
      </main>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='block w-full mt-[-1px]'
        preserveAspectRatio='none'
      >
        <rect width='1440' height='320' fill='#E24430' />

        <path
          d='
      M0,96
      L24,128
      C48,160,96,224,144,218.7
      C192,213,240,139,288,106.7
      C336,75,384,85,432,112
      C480,139,528,181,576,181.3
      C624,181,672,139,720,112
      C768,85,816,75,864,85.3
      C912,96,960,128,1008,133.3
      C1056,139,1104,117,1152,96
      C1200,75,1248,53,1296,42.7
      C1344,32,1392,32,1416,32
      L1440,32
      L1440,321 
      L0,321
      Z
    '
          fill='#F88CA6'
        />

        <path
          d='
      M0,96
      L24,128
      C48,160,96,224,144,218.7
      C192,213,240,139,288,106.7
      C336,75,384,85,432,112
      C480,139,528,181,576,181.3
      C624,181,672,139,720,112
      C768,85,816,75,864,85.3
      C912,96,960,128,1008,133.3
      C1056,139,1104,117,1152,96
      C1200,75,1248,53,1296,42.7
      C1344,32,1392,32,1416,32
      L1440,32
    '
          fill='none'
          stroke='#000'
          strokeWidth='8'
          strokeLinejoin='round'
          strokeLinecap='round'
        />
      </svg>
    </>
  );
}
