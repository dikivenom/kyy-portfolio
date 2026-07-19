import Marquee from 'react-fast-marquee';

export default function MarqueeIcons() {
  const TAILWIND_ICON = '/kyy-portfolio/assets/icons/tailwind-css-seeklogo.svg';
  const REACT_ICON = '/kyy-portfolio/assets/icons/react-seeklogo.svg';
  const LIVEWIRE_ICON = '/kyy-portfolio/assets/icons/livewire-seeklogo.svg';
  const LARAVEL_ICON = '/kyy-portfolio/assets/icons/laravel-3kb.png';

  const CISCO_ICON = '/kyy-portfolio/assets/icons/cisco.png';
  const MIKROTIK_ICON = '/kyy-portfolio/assets/icons/mikrotik-seeklogo.svg';
  const WINBOX_ICON = '/kyy-portfolio/assets/icons/winbox.png';

  const techIcons = [
    { src: TAILWIND_ICON, alt: 'tailwind-icon' },
    { src: REACT_ICON, alt: 'react-icon' },
    { src: LIVEWIRE_ICON, alt: 'livewire-icon' },
    { src: LARAVEL_ICON, alt: 'laravel-icon' },
    { src: CISCO_ICON, alt: 'cisco-icon' },
    { src: MIKROTIK_ICON, alt: 'mikrotik-icon' },
    { src: WINBOX_ICON, alt: 'winbox-icon' },
  ];

  return (
    <div className='w-full border-y-5 border-border bg-secondary-background'>
      <Marquee speed={130} gradient={false} className='py-2 sm:py-3'>
        {techIcons.map((icon, i) => (
          <img
            loading='lazy'
            key={i}
            src={icon.src}
            alt={icon.alt}
            className='h-8 w-auto sm:h-10 md:h-12 shrink-0 mx-8 sm:mx-10 md:mx-12 lg:mx-14'
          />
        ))}
      </Marquee>
    </div>
  );
}
