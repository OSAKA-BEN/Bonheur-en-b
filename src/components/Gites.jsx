import { useContext } from 'react';
import { gitesData } from '../data/gites';
import DarkModeContext from '../DarkModeContext';

const Gites = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="gites" className={`py-4 z-0 relative ${darkMode ? 'bg-[#0c0d0c] ' : 'bg-slate-200'}`}>

      <div className="py-20 flex flex-col gap-10 items-center relative content mx-4">
        <div className="relative flex items-center justify-center">
          <p className={`font-bold poppins-font absolute text-[100px] md:text-[180px] lg:text-[200px] xl:text-[250px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">Gîtes</p>
          <h2 className={`dancing-font text-2xl md:text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Simplement pour vous</h2>
        </div>

        <div className="h-2 w-2 mb-6 mx-auto bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[150px] sm:before:w-[250px] lg:before:w-[300px] before:h-[1px] before:bg-white/30 before:absolute before:right-5 after:content-[''] after:w-[150px] sm:after:w-[250px] lg:after:w-[300px] after:h-[1px] after:bg-white/30 after:absolute after:left-5"></div>

        <p className={`uppercase tracking-wider text-center lg:text-2xl ${darkMode ? '' : 'text-black'} `} data-aos="fade-up" data-aos-delay="400">Que vous voyagiez seul ou en groupe, il existe forcément un gîte pour vous. Ils sont tous équipés du nécessaire et la décoration parle d&#39;elle-même.</p>

        <div className="relative">
          {gitesData.map((gite, index) => (
            <div id={`gite-${gite.id}`} key={index} className="py-12">
              <div className="mx-auto">
                <div className="w-full max-w-4xl mx-auto mb-8 text-center">
                  <h2 className={`mb-4 text-4xl lg:text-8xl ${darkMode ? '' : 'text-black'} font-heading dancing-font`}>{gite.name}</h2>
                  <h3 className={`uppercase tracking-wider mb-4 lg:text-2xl ${darkMode ? '' : 'text-black'} font-heading`}>{gite.subtitle}</h3>
                  <ul className={`flex justify-center lg:gap-4 mb-4 ${darkMode ? '' : 'text-black'}`}>
                    {gite.icons.map((icon, idx) => (
                      <li key={idx}>
                        <img className="p-4 filter invert w-20 h-20" src={icon} alt={`Icone pour ${gite.name}`} />
                      </li>
                    ))}
                  </ul>
                  <p className={`mb-4 lg:text-xl ${darkMode ? '' : 'text-black'}`}>{gite.description}</p>
                  <ul className={`flex flex-col lg:flex-row justify-center gap-4 text-xl mb-4 ${darkMode ? '' : 'text-black'}`}>
                    {gite.caracteristics.map((feature, idx) => (
                      <li className="border border-[#242422] rounded-xl p-4" key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a href={gite.airBnbUrl} target="_blank" rel="noopener noreferrer" className="border border-[#EFE7D2] rounded text-xl px-4 py-2 hover:bg-[#EFE7D2] hover:text-black">Réserver</a>
                  <p className={`text-2xl mt-4 font-bold ${darkMode ? '' : 'text-black'}`}>{gite.price}</p>
                </div>
                <div className="w-full flex flex-wrap">
                  {gite.imageUrl.map((image, imgIndex) => (
                    <div key={imgIndex} className="w-full md:w-1/5 group">
                      <div className="h-full w-full relative md:group-hover:scale-150 transition-all duration-500 cursor-pointer">
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
