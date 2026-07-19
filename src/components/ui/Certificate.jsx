'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'aos/dist/aos.css';

const DOODLE_AP = '/kyy-portfolio/assets/characters/doodle-ap.png';
const DOODLE_PSU = '/kyy-portfolio/assets/characters/doodle-psu.png';

const ALIBABA_CLOUD = '/kyy-portfolio/assets/certificate/alibaba-cloud.jpeg';
const BNSP = '/kyy-portfolio/assets/certificate/bnsp.webp';
const DICODING_JS = '/kyy-portfolio/assets/certificate/dicoding-js.jpeg';
const MTCNA = '/kyy-portfolio/assets/certificate/mtcna.jpeg';

export default function Certificate() {
  const certificates = [MTCNA, BNSP, ALIBABA_CLOUD, DICODING_JS];

  return (
    <section className='bg-[#F88CA6] relative px-6 pt-2 pb-10 lg:pb-7 items-center justify-center text-center border-b-4'>
      <img
        data-aos='fade-up'
        data-aos-duration='1000'
        className='absolute left-[-10px] bottom-[10%] z-[99] w-[150px] sm:w-[210px] sm:left-[-20px] sm:bottom-[5%]
            lg:w-[250px] lg:left-40 pointer-events-none select-none'
        src={DOODLE_AP}
        alt='Doodle Ap'
        draggable={false}
      />
      <img
        data-aos='fade-up'
        data-aos-duration='1000'
        className='absolute right-0 bottom-[10%] z-[99] w-[150px] sm:w-[180px] sm:right-[-20px] sm:bottom-[5%] 
            md:right-0 lg:w-[250px] lg:right-40 pointer-events-none select-none'
        src={DOODLE_PSU}
        alt='Doodle Psu'
        draggable={false}
      />
      <div className='flex justify-center mb-13'>
        <div className='flex gap-x-3 sm:gap-x-2 justify-center items-center bg-[#3795d5] px-6 sm:px-7 py-3 rounded-4xl neu'>
          <FontAwesomeIcon
            icon={faCertificate}
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
            Certificate
          </h1>
          <FontAwesomeIcon
            icon={faFaceSadCry}
            size='2x'
            className='
         text-[#FB3E29]
         [stroke:#000]
         [stroke-width:35]
          animate-spin-reverse
       '
          />
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        className='w-full max-w-[clamp(200px,60vw,520px)] sm:max-w-[520px] md:max-w-[400px] lg:max-w-[450px] mx-auto'
      >
        <Carousel className='w-full'>
          <CarouselContent>
            {certificates.map((src, index) => (
              <CarouselItem key={index} className='px-4 flex justify-center'>
                <div
                  className='
                    bg-white neu rounded-xl overflow-hidden 
                    w-full h-full
                    max-w-[400px] sm:max-w-[420px] md:max-w-[380px] lg:max-w-[400px]
                  '
                >
                  <img
                    loading='lazy'
                    src={src}
                    alt={`certificate-${index}`}
                    className='w-full h-[55vh] sm:h-[60vh] md:h-[65vh] object-contain'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className='
              bg-white neu-active z-[100]
              !left-[-2.5rem] sm:!left-[-2rem] md:!left-[-5rem] lg:!left-[-5.5rem]
              !h-8 !w-8 text-sm
              sm:!h-10 sm:!w-10 sm:text-base
              md:!h-12 md:!w-12 md:text-xl
            '
          />

          <CarouselNext
            className='
              bg-white neu-active z-[100]
              !right-[-2rem] sm:!right-[-2rem] md:!right-[-4.5rem] lg:!right-[-5rem]
              !h-8 !w-8 text-sm
              sm:!h-10 sm:!w-10 sm:text-base
              md:!h-12 md:!w-12 md:text-xl
            '
          />
        </Carousel>
      </div>
    </section>
  );
}
