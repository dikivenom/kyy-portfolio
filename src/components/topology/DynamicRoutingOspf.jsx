import React from 'react';
const DYNAMIC_IMG =
  '/kyy-portfolio/assets/topologi/topologi-dynamic-routing-ospf.png';

export default function DynamicRoutingOspf() {
  return (
    <div className='space-y-4 text-[#fafaff]'>
      <div className='text-sm font-rocknroll-one bg-[#f0f0f0]/25 p-2 rounded'>
        Dynamic Routing (OSPF) Topology
      </div>

      <div className='mt-2'>
        <img
          loading="lazy"
          src={DYNAMIC_IMG}
          alt='Topologi OSPF'
          className='w-full object-cover rounded'
        />
      </div>
    </div>
  );
}
