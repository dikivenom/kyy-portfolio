export default function Marquee() {
  // Import aset dengan cara B (path relatif terhadap file ini: src/components/ui/Marquee.jsx)
const ICON_TAILWIND = "/kyy-portfolio/assets/icons/icons8-tailwind-css.png";
const ICON_REACT    = "/kyy-portfolio/assets/icons/icons8-react.png";
const ICON_JS       = "/kyy-portfolio/assets/icons/icons8-javascript.png";
const ICON_PHP      = "/kyy-portfolio/assets/icons/icons8-php.png";
const ICON_LARAVEL  = "/kyy-portfolio/assets/icons/icons8-laravel.png";


  const techIcons = [
    { src: ICON_TAILWIND,  alt: 'tailwind-icon' },
    { src: ICON_REACT,     alt: 'react-icon' },
     { src: ICON_JS, alt: "javascript-icon" },
    { src: ICON_PHP,       alt: 'php-icon' },
    { src: ICON_LARAVEL,   alt: 'laravel-icon' },
  ];

  const repeated = [...techIcons, ...techIcons, ...techIcons, ...techIcons, ...techIcons];

  return (
    <div className="relative w-full overflow-hidden border-y-5  border-border bg-secondary-background">
      {/* Track pertama */}
      <div className="animate-marquee flex flex-nowrap gap-y-4 gap-x-10 sm:gap-8 md:gap-12 w-max py-1 sm:py-2">
        {repeated.map((icon, i) => (
          <img
            key={`m1-${i}`}
            src={icon.src}
            alt={icon.alt}
            className="h-8 w-auto sm:h-10 md:h-12 shrink-0"
          />
        ))}
      </div>

      {/* Track kedua */}
      <div className="absolute top-0 animate-marquee2 flex flex-nowrap gap-y-4 gap-x-10 sm:gap-8 md:gap-12 w-max py-1 sm:py-2">
        {repeated.map((icon, i) => (
          <img
            key={`m2-${i}`}
            src={icon.src}
            alt={icon.alt}
            className="h-8 w-auto sm:h-10 md:h-12 shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
