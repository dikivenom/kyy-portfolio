const ICON_INSTAGRAM = "/kyy-portfolio/assets/icons/icons8-instagram.png";
const ICON_GITHUB    = "/kyy-portfolio/assets/icons/icons8-github-squared.png";
const ICON_LINKEDIN  = "/kyy-portfolio/assets/icons/icons8-linkedin.png";
const ICON_INDEED  = "/kyy-portfolio/assets/icons/indeed.png";


export default function SocialIcons() {
  return (
    <div id='icon-sosmed' className='flex items-center justify-center bg-white border-y-4 border-black mt-10 w-full h-12 sm:mt-11 md:mt-15 [@media(max-width:370px)]:mt-9  lg:mt-4'>
      <ul className='flex items-center justify-center gap-6'>
        <li>
          <a href='https://www.instagram.com/kyynyny/' target="_blank" rel="noopener noreferrer">
            <img src={ICON_INSTAGRAM} className='w-10 h-auto hover:scale-110 transition-transform' alt='instagram' />
          </a>
        </li>
        <li>
          <a href="https://github.com/dikivenom" target="_blank" rel="noopener noreferrer">
            <img src={ICON_GITHUB} className='w-10 h-auto hover:scale-110 transition-transform' alt='github' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/dicky-ramadhan-7141a2288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer">
            <img src={ICON_LINKEDIN} className='w-10 h-auto hover:scale-110 transition-transform' alt='linkedin' />
          </a>
        </li>
        <li>
          <a href='#'  rel="noopener noreferrer">
            <img src={ICON_INDEED} className='w-7 h-auto hover:scale-110 transition-transform' alt='indeed' />
          </a>
        </li>
      </ul>
    </div>
  );
}