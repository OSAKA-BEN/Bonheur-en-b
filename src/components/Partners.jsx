import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";

const Partners = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="partners" className="py-20 bg-slate-200 dark:bg-[#0c0d0c]">
    <div className="py-20 flex flex-col gap-10 items-center relative content mx-12">
      <div className="relative flex items-center justify-center">
        <p className={`font-bold absolute poppins-font text-[280px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">Partenaires</p>
      </div>

      <div className="h-2 w-2 mb-6 bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[300px] before:h-[1px] before:bg-white/30 before:absolute before:right-5 after:content-[''] after:w-[300px] after:h-[1px] after:bg-white/30 after:absolute after:left-5"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/airbnb.png" alt=""/>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/binance.png" alt=""/>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/coinbase.png" alt=""/>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/dropbox.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Partners
