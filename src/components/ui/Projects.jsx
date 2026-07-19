import CarouselNetwork from './CarouselNetwork';
import CarouselWebdev from './CarouselWebdev';
import 'aos/dist/aos.css';




const BG_PINK_GREEN =
  '/kyy-portfolio/assets/backgrounds/flagrace_pink_green.png';

export default function Projects() {
  return (
    <section className='bg-[#b9255d] border-b-4'>
     <svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 1440 160'
  preserveAspectRatio='none'
  className='block w-full'
  shapeRendering='geometricPrecision'
>
  <rect width='100%' height='160' fill='#9723C9' />

  <path
    d='
      M0,80
      L40,40 L80,80
      L120,40 L160,80
      L200,40 L240,80
      L280,40 L320,80
      L360,40 L400,80
      L440,40 L480,80
      L520,40 L560,80
      L600,40 L640,80
      L680,40 L720,80
      L760,40 L800,80
      L840,40 L880,80
      L920,40 L960,80
      L1000,40 L1040,80
      L1080,40 L1120,80
      L1160,40 L1200,80
      L1240,40 L1280,80
      L1320,40 L1360,80
      L1400,40 L1440,80
      L1440,161 L0,161 Z
    '
    fill='#b9255d'
  />

  <path
    d='
      M0,80
      L40,40 L80,80
      L120,40 L160,80
      L200,40 L240,80
      L280,40 L320,80
      L360,40 L400,80
      L440,40 L480,80
      L520,40 L560,80
      L600,40 L640,80
      L680,40 L720,80
      L760,40 L800,80
      L840,40 L880,80
      L920,40 L960,80
      L1000,40 L1040,80
      L1080,40 L1120,80
      L1160,40 L1200,80
      L1240,40 L1280,80
      L1320,40 L1360,80
      L1400,40 L1440,80
    '
    fill='none'
    stroke='#000000'
    strokeWidth='var(--zigzag-stroke,20)'
    strokeLinejoin='miter'
    strokeLinecap='square'
    className='zigzag-stroke'
  />
</svg>

      <style>{`
        /* default: tebal (20). Pada md+ kurangi ketebalan */
        .zigzag-stroke { --zigzag-stroke: 20; }
        @media (min-width: 768px) {
          .zigzag-stroke { --zigzag-stroke: 8; }
        }
      `}</style>

      <header data-aos="fade-up" data-aos-duration="1000" className='grid grid-cols-3 mb-6 mt-10 items-center w-[90%] lg:w-[60%]  bg-[#21A193] mx-auto border-4 border-black '>
        <img
          loading="lazy"
          src={BG_PINK_GREEN}
          alt=''
          className='w-19 h-full sm:w-24 justify-self-start border-r-2'
        />
        <h1 className='text-2xl font-bold text-center text-[#ffffff] text-stroke-neu font-drinks-fruit sm:text-3xl lg:text-5xl'>
          Projects
        </h1>
        <img
          loading="lazy"
          src={BG_PINK_GREEN}
          alt=''
          className='w-19 h-full sm:w-24 justify-self-end border-l-2 '
        />
      </header>

      <div
        id='carousel-projects'
        className='mt-22 flex-none md:flex-col md:gap-y-2 lg:flex lg:flex-row lg:gap-x-15 xl:gap-x-2'
      >
        <CarouselNetwork />
        <CarouselWebdev />
      </div>
    </section>
  );
}
