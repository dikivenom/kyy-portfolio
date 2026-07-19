import React from 'react';
import TerminalBox from '@/components/ui/TerminalBox';
const STATIC_IMG = '/kyy-portfolio/assets/topologi/topologi-static-routing.png';

export default function StaticRouting() {
  return (
    <div className='space-y-4 text-[#fafaff]'>
      <div className='text-sm font-rocknroll-one bg-[#f0f0f0]/25 p-2 rounded'>
     Static Routing Topology
      </div>

      <div className='mt-2'>
        <img
          loading="lazy"
          src={STATIC_IMG}
          alt='Topologi Static Routing'
          className='w-full object-cover rounded'
        />
      </div>
    </div>
  );
}
