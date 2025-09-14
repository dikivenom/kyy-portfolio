export default function ProfileCard() {
  
  const BG_POLKADOT = new URL('../../assets/backgrounds/bg-white-polkadot.png', import.meta.url).href;
  const CHAR_DICKY  = new URL('../../assets/characters/karakter-dicky.png', import.meta.url).href;

  return (
    <div
      className="relative mt-13 neu bg-cover bg-center bg-no-repeat w-[80%] h-[30%] md:w-[34%]  "
      style={{ backgroundImage: `url(${BG_POLKADOT})` }}
    >
      <figure className="bg-white border-b-4 w-full h-10 flex justify-between items-center">
        <h2 className="font-black font-lilita text-lg ml-3">About Me</h2>
        <span className="bg-red-500 w-[20%] h-full border-l-4"></span>
      </figure>

      <div id="character" className="w-full px-0">
        <img
          src={CHAR_DICKY}
          className="block mx-auto w-50 h-auto absolute left-0 right-0 bottom-0"
          alt="Karakter Dicky"
        />
      </div>

     
      <div className="absolute left-0 right-0 bottom-0 bg-black">
        <h2 className="text-white px-4 py-2 font-black font-gothicexpanded bg-[#01b2b0] border-t-4 tracking-widest">
          DICKY RAMADHAN
        </h2>
      </div>
    </div>
  );
}
