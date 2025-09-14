import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const VLAN_IMG    = "/kyy-portfolio/assets/topologi/topologi-vlan.png";
const IN_VLAN_IMG = "/kyy-portfolio/assets/topologi/topologi-inter-vlan.png";
const STATIC_IMG  = "/kyy-portfolio/assets/topologi/topologi-static-routing.png";
const DYNAMIC_IMG = "/kyy-portfolio/assets/topologi/topologi-dynamic-routing-ospf.png";

// ubah jadi array objek dengan title sesuai gambar
const IMAGES = [
  { src: VLAN_IMG, detail: 'Switching', title: 'VLAN CONFIGURATION' },
  { src: IN_VLAN_IMG, detail: 'Switching', title: 'INTER VLAN ROUTING' },
  { src: STATIC_IMG, detail: 'Routing', title: 'STATIC ROUTING' },
  { src: DYNAMIC_IMG, detail: 'Routing', title: 'DYNAMIC ROUTING OSPF' },
];

export default function CarouselNetwork() {
  return (
    <div className='w-full flex-col items-center gap-4 flex'>
      <h1 className='text-lg font-gothicexpanded bg-[#f692c0] px-3 neu'>NETWORK TOPOLOGI</h1>
      <Carousel className='w-full max-w-[310px]'>
        <CarouselContent>
          {IMAGES.map((item, index) => (
            <CarouselItem key={index}>
              <div className='p-[10px]'>
                <Card className='shadow-none p-0 bg-main text-main-foreground neu relative overflow-hidden'>
                  <CardContent className='flex flex-col p-0 h-full'>
                    {/* Image area (80% tinggi) */}
                    <div className='relative w-full h-[80%]'>
                      <img
                        src={item.src}
                        alt={item.detail}
                        className='w-full h-full object-cover'
                      />
                      {/* Keterangan di depan gambar */}
                      <div className='absolute font-rocknroll-one top-2 left-2 bg-[#38b042]/80 text-white px-3 py-1 rounded text-sm '>
                        {item.detail}
                      </div>
                    </div>

                    {/* Footer bar (20% tinggi) penuh kiri-kanan */}
                    <CardFooter className='h-[15%] p-1 pb-3 bg-[#38b042]/90 border-t border-border flex items-center gap-x-1 justify-between'>
                      <span className='text-sm font-rocknroll-one items-center  text-white pl-2 '>
                        {item.title}
                      </span>
                      <span className='text-sm font-rocknroll-one rounded-sm bg-[#f692c0]  text-black items-center text-muted neu px-7 py-2 mr-3'>View</span>
                    </CardFooter>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-[#f692c0] text-black' />
        <CarouselNext className='bg-[#f692c0] text-black' />
      </Carousel>
    </div>
  );
}
