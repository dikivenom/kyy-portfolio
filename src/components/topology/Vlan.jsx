import React from 'react';
import TerminalBox from '@/components/ui/TerminalBox';
const VLAN_IMG = '/kyy-portfolio/assets/topologi/topologi-vlan2.png';

export default function Vlan() {
  return (
    <div className='space-y-4'>
      <div className='text-sm font-rocknroll-one bg-[#f0f0f0]/25 p-2 rounded text-[#fafaff]'>
        VLAN Topology
      </div>

      <div className='mt-2'>
        <img
          loading="lazy"
          src={VLAN_IMG}
          alt='Topologi VLAN'
          className='w-full object-cover rounded'
        />
      </div>

     
    </div>
  );
}
