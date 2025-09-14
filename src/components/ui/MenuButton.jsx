const X_BUTTON    = "/kyy-portfolio/assets/buttons/x-button.png";
const MENU_BUTTON = "/kyy-portfolio/assets/buttons/menu-button.png";


export default function MenuButton({ open, onToggle }) {
  return (
    <nav>
      <div className="pt-4 inline-block">
        <button onClick={onToggle} className="focus:outline-none">
          <img
            src={open ? X_BUTTON : MENU_BUTTON}
            alt={open ? 'close' : 'menu'}
            className="neu neu-active neu-focus w-[52px] ml-3.5 lg:w-14 lg:ml-6.5"
          />
        </button>
      </div>
    </nav>
  );
}