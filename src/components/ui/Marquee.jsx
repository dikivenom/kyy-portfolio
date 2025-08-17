export default function Marquee() {
  const techIcons = [
    { src: "src/assets/icons/icons8-tailwind-css.png", alt: "tailwind-icon" },
    { src: "src/assets/icons/icons8-react.png", alt: "react-icon" },
    { src: "src/assets/icons/icons8-bootstrap.png", alt: "bootstrap-icon" },
    { src: "src/assets/icons/icons8-php.png", alt: "php-icon" },
    { src: "src/assets/icons/icons8-laravel.png", alt: "laravel-icon" },
  ];

  const repeated = [...techIcons, ...techIcons, ...techIcons];

  return (
    <div className="relative w-full overflow-hidden border-y-5 mt-5 border-border bg-secondary-background">
      {/* Track pertama */}
      <div className="animate-marquee flex flex-nowrap gap-12 min-w-max py-1 sm:py-2">
        {repeated.map((icon, i) => (
          <img key={`m1-${i}`} src={icon.src} alt={icon.alt} className="h-12 w-auto shrink-0" />
        ))}
      </div>

      {/* Track kedua */}
      <div className="absolute top-0 animate-marquee2 flex flex-nowrap gap-12 min-w-max py-1 sm:py-2">
        {repeated.map((icon, i) => (
          <img key={`m2-${i}`} src={icon.src} alt={icon.alt} className="h-12 w-auto shrink-0" />
        ))}
      </div>
    </div>
  );
}
