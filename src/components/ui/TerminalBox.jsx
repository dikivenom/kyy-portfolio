import React from 'react';

export default function TerminalBox({ children, className = '' }) {
  return (
    <pre
      className={
        'bg-[#eef2f3] border-2 border-[#6b4b2e] rounded text-sm font-mono text-[#0b1220] p-4 overflow-x-auto whitespace-pre-wrap ' +
        className
      }
      aria-label='terminal'
    >
      {children}
    </pre>
  );
}