import React from 'react';
import TerminalBox from '@/components/ui/TerminalBox';
const IN_VLAN_IMG = '/kyy-portfolio/assets/topologi/topologi-inter-vlan.png';

export default function InterVlan() {
  return (
    <div className='space-y-4 text-[#fafaff]'>
      <div className='text-sm font-rocknroll-one bg-[#f0f0f0]/25 p-2 rounded'>
        Inter VLAN Topology
      </div>

      <div className='mt-2'>
        <img
          loading="lazy"
          src={IN_VLAN_IMG}
          alt='Topologi Inter-VLAN'
          className='w-full object-cover rounded'
        />
      </div>

    </div>
  );
}
