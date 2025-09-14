import CarouselNetwork from './CarouselNetwork';
import CarouselWebdev from './CarouselWebdev';

const BG_PINK_GREEN = new URL(
  '../../assets/backgrounds/flagrace_pink_green.png',
  import.meta.url
).href;

export default function Projects() {
  return (
    <section className='bg-[#f7c82e]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 160'
        preserveAspectRatio='none'
        className='block w-full'
        style={{ marginTop: '-1px', marginBottom: '-2px', display: 'block' }}
        shapeRendering='geometricPrecision'
      >
        {/* Background ungu */}
        <rect width='100%' height='160' fill='#9810fa' />

        {/* Zigzag kuning dengan outline hitam hanya di atas */}
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
            L1440,160 L0,160 Z
          '
          fill='#f7c82e'
        />

        {/* Stroke hitam hanya di bagian zigzag */}
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
          strokeWidth='20'
          strokeLinejoin='miter'
          strokeLinecap='square'
        />
      </svg>
     
        <header className='grid grid-cols-3 mb-6 mt-10 items-center w-[90%] bg-[#38b042] mx-auto border-4 border-black '>
          <img
            src={BG_PINK_GREEN}
            alt=''
            className='w-19 h-full sm:w-24 justify-self-start border-r-2'
          />
          <h1 className='text-2xl font-bold text-center text-[#f591bf] text-stroke-neu font-gothicexpanded'>
           Projects
          </h1>
          <img
            src={BG_PINK_GREEN}
            alt=''
            className='w-19 h-full sm:w-24 justify-self-end border-l-2 '
          />
        </header>
    
       <div id='carousel-projects' className='mt-22'>
        <CarouselNetwork />
        <CarouselWebdev />
          </div>
    </section>
  );
}
