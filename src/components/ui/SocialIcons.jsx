const ICON_INSTAGRAM = "/kyy-portfolio/assets/icons/icons8-instagram.png";
const ICON_GITHUB    = "/kyy-portfolio/assets/icons/icons8-github-squared.png";
const ICON_LINKEDIN  = "/kyy-portfolio/assets/icons/icons8-linkedin.png";


export default function SocialIcons() {
  return (
    <div id='icon-sosmed' className='flex items-center justify-center bg-white border-y-4 border-black mt-10 w-full h-12 sm:mt-20 md:mt-15 [@media(max-width:370px)]:mt-9  lg:mt-4'>
      <ul className='flex items-center justify-center gap-6'>
        <li><img src={ICON_INSTAGRAM} className='w-10 h-auto' alt='instagram' /></li>
        <li><img src={ICON_GITHUB} className='w-10 h-auto ' alt='github' /></li>
        <li><img src={ICON_LINKEDIN} className='w-10 h-auto ' alt='linkedin' /></li>
        <li><img src={ICON_INSTAGRAM} className='w-10 h-auto ' alt='instagram' /></li>
      </ul>
    </div>
  );
}