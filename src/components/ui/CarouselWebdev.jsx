import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import VlanTutorial from '@/components/topology/Vlan';
import InterVlanTutorial from '@/components/topology/InterVlan';
import StaticRoutingTutorial from '@/components/topology/StaticRouting';
import OspfTutorial from '@/components/topology/DynamicRoutingOspf';

import 'aos/dist/aos.css';

const X_BUTTON = '/kyy-portfolio/assets/buttons/x-button.png';

const VLAN_IMG = '/kyy-portfolio/assets/topologi/topologi-vlan2.png';
const IN_VLAN_IMG = '/kyy-portfolio/assets/topologi/topologi-inter-vlan.png';
const STATIC_IMG = '/kyy-portfolio/assets/topologi/topologi-static-routing.png';
const DYNAMIC_IMG =
  '/kyy-portfolio/assets/topologi/topologi-dynamic-routing-ospf.png';

const IMAGES = [
  { src: VLAN_IMG, detail: 'Switching', title: 'VLAN CONFIGURATION' },
  { src: IN_VLAN_IMG, detail: 'Switching', title: 'INTER VLAN ROUTING' },
  { src: STATIC_IMG, detail: 'Routing', title: 'STATIC ROUTING' },
  { src: DYNAMIC_IMG, detail: 'Routing', title: 'DYNAMIC ROUTING OSPF' },
];

const TUTORIAL_COMPONENTS = [
  VlanTutorial,
  InterVlanTutorial,
  StaticRoutingTutorial,
  OspfTutorial,
];

export default function CarouselNetwork() {
  const [openIndex, setOpenIndex] = useState(null);

  function openTutorial(idx) {
    setOpenIndex(idx);
    document.body.style.overflow = 'hidden';
  }
  function closeTutorial() {
    setOpenIndex(null);
    document.body.style.overflow = '';
  }

  const SelectedTutorial =
    openIndex !== null ? TUTORIAL_COMPONENTS[openIndex] : null;

  return (
    <div className='w-full flex-col items-center gap-4 flex'>
      <h1
        data-aos='fade-up'
        data-aos-duration='1000'
        className='text-lg text-stroke-neu text-[#ffffff] sm:text-xl md:text-2xl  font-drinks-fruit bg-[#21A193] px-5 sm:px-4 md:px-6 neu'
      >
        WEB PROJECTS
      </h1>

      <Carousel
        data-aos='fade-up'
        data-aos-duration='1000'
        className='w-full max-w-[clamp(315px,60vw,520px)] sm:max-w-[520px] md:max-w-[400px] lg:max-w-[400px]'
      >
        <CarouselContent>
          {IMAGES.map((item, index) => (
            <CarouselItem key={index}>
              <div className='p-[10px]'>
                <Card className='shadow-none p-0 bg-main text-main-foreground neu relative overflow-hidden mr-1 sm:mr-2'>
                  <CardContent className='flex flex-col p-0 h-full'>
                    <div className='relative w-full h-[80%]'>
                      <img
                        loading='lazy'
                        src={item.src}
                        alt={item.detail}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute font-gothicexpanded top-2 left-2 bg-[#21A193]/80 text-white px-3 py-1 rounded text-sm '>
                        {item.detail}
                      </div>
                    </div>

                    <CardFooter className='h-[15%] p-1 pb-3 bg-[#21A193] border-t border-border flex items-center gap-x-1 justify-between'>
                      <span className='text-sm font-drinks-fruit items-center  text-white pl-2 '>
                        {item.title}
                      </span>
                      <button
                        onClick={() => openTutorial(index)}
                        className='text-sm font-gothicexpanded rounded-sm bg-[#F692C0] text-black items-center text-muted neu neu-active neu-focus px-7 py-2 mr-3'
                        aria-haspopup='dialog'
                        aria-expanded={openIndex === index}
                      >
                        View
                      </button>
                    </CardFooter>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-[#F692C0] text-black neu-active left-4 top-1/3 -translate-y-1/2  sm:-left-12 sm:top-1/2' />
        <CarouselNext className='bg-[#F692C0] text-black neu-active right-4 top-1/3 -translate-y-1/2 sm:-right-12 sm:top-1/2' />
      </Carousel>

      {openIndex !== null && SelectedTutorial && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className='absolute inset-0 bg-black/50'
            onClick={closeTutorial}
          />
          <div className='relative w-[97%] max-w-[700px] font-gothicexpanded max-h-[80vh] bg-[#21A193] text-main-foreground neu rounded-lg overflow-hidden'>
            <div className='flex items-center justify-between px-4 py-3 border-b border-border'>
              <h3 className='text-lg font-gothicexpanded text-[#fafaff]'>
                {IMAGES[openIndex].detail}
              </h3>
              <button onClick={closeTutorial} aria-label='Close tutorial'>
                <img
                  src={X_BUTTON}
                  alt='close'
                  className='neu neu-active neu-focus w-[45px] ml-3.5 lg:w-14 lg:ml-6.5'
                />
              </button>
            </div>

            <div className='h-[calc(80vh-64px)]'>
              <ScrollArea className='h-full'>
                <div className='p-4'>
                  <SelectedTutorial />
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
