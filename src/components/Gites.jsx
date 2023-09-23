import { useContext } from 'react';
import { gitesData } from '../data/gites';
import DarkModeContext from '../DarkModeContext';

const Gites = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="gites" className={`py-4 z-0 relative ${darkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>

      <div className="py-20 flex flex-col gap-10 items-center relative content">
        <div className="relative flex items-center justify-center">
          <p className={`font-bold absolute text-[280px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">Gîtes</p>
          <h2 className={`dancing-font text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Simplement pour vous</h2>
        </div>

        <div className="h-2 w-2 mb-6 bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[300px] before:h-[1px] before:bg-white/10 before:absolute before:right-5 after:content-[''] after:w-[300px] after:h-[1px] after:bg-white/10 after:absolute after:left-5"></div>

        <p className={`uppercase tracking-wider text-center mx-12 ${darkMode ? 'text-white/80' : 'text-black'} lg:text-2xl`} data-aos="fade-up" data-aos-delay="400">Que vous voyagiez seul ou en groupe, il existe forcément un gîte pour vous. Ils sont tous équipés du nécessaire et la décoration parle d'elle-même.</p>

        <div className="relative">
          {gitesData.map((gite, index) => (
            <div id={`gite-${gite.id}`} key={index} className="py-12">
              <div className="mx-auto">
                <div className="w-full max-w-2xl mx-auto mb-8 text-center">
                  <h2 className={`mb-4 text-6xl ${darkMode ? 'text-white' : 'text-black'} font-heading dancing-font`}>{gite.name}</h2>
                  <h3 className={`mb-4 text-2xl ${darkMode ? 'text-white' : 'text-black'} font-heading`}>{gite.subtitle}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>{gite.description}</p>
                  <ul className={`${darkMode ? 'text-white' : 'text-black'}`}>
                    {gite.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p className={`${darkMode ? 'text-white' : 'text-black'}`}>{gite.price}</p>
                </div>
                <div className="w-full flex flex-wrap">
                  {gite.imageUrl.map((image, imgIndex) => (
                    <div key={imgIndex} className="w-full md:w-1/5 group">
                      <div className="h-full w-full relative group-hover:scale-150 transition-all duration-500 cursor-pointer">
                        <img
                          className="h-96 w-full object-cover"
                          src={image}
                          alt={gite.name}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gites;
