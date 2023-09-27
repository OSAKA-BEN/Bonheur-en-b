import { useContext } from 'react';
import DarkModeContext from '../DarkModeContext';
import perleSel1 from '../assets/perle-sel1.jpg';
import closNormand from '../assets/clos-normand2.jpg';
import le13Gabrielle from '../assets/13-gabrielle2.jpg';
import grebeHuppee from '../assets/grebe-huppee1.jpg';
import mouetteRieuse from '../assets/mouette-rieuse3.jpg';

export const gitesImg = [
  {
    id: 1,
    name: 'Perle de Sel',
    imageUrl: perleSel1,
  },
  {
    id: 2,
    name: 'Le Clos Normand',
    imageUrl: closNormand,
  },
  {
    id: 3,
    name: 'Le 13 de Gabrielle',
    imageUrl: le13Gabrielle,
  },
  {
    id: 4,
    name: 'La brèbe Huppée',
    imageUrl: grebeHuppee,
  },
  {
    id: 5,
    name: 'La Mouette Rieuse',
    imageUrl: mouetteRieuse,
  },
];

const WhoAreWe = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="whoarewe" className="relative z-0 bg-slate-200 dark:bg-[#0c0d0c] overflow-hidden">
    <div className="py-20 md:py-40 flex flex-col gap-10 items-center relative content mx-4">
      <div className="relative flex items-center justify-center">
        <p className={`font-bold poppins-font absolute text-[60px] md:text-[180px] lg:text-[280px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">BonheurenB</p>
        <h2 className={`dancing-font text-2xl md:text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Qui sommes nous ?</h2>
      </div>

      <div className="h-2 w-2 mb-6 bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[300px] before:h-[1px] before:bg-white/30 before:absolute before:right-5 after:content-[''] after:w-[300px] after:h-[1px] after:bg-white/30 after:absolute after:left-5"></div>

      <div className="text-center mx-12">
        <p className="uppercase tracking-wide lg:text-2xl" data-aos="fade-up" data-aos-delay="400">
            Un séjour dont vous vous souviendrez.
        </p>
        <p className="uppercase tracking-wider lg:text-2xl" data-aos="fade-up" data-aos-delay="400">
            Les Bonheurs en B, sont des meublés de tourisme ouverts à l’année.
        </p>
        <p className="uppercase tracking-wider lg:text-2xl" data-aos="fade-up" data-aos-delay="400">
            Nos gites sont équipés pour accueillir les petits.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between w-full">
        <div className="w-full lg:w-3/4 mb-4 lg:mb-0 relative z-10 h-[300px] lg:h-[800px] rounded-2xl overflow-hidden">
          <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/gzxQWHmRC-k?si=od4QJu_q5l073Hf7&amp;clip=UgkxSrdD0kVdzuCJaMzFOeCNkdUA0P9nb07K&amp;clipt=EPfzARjr2QI" 
              title="YouTube video player" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          ></iframe>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col gap-4 mt-4 lg:mt-0 lg:pl-4 lg:overflow-y-auto lg:h-[800px]">
          {gitesImg.map((gite) => (
            <div key={gite.id} className="relative flex-grow flex flex-col mb-2 items-center justify-center">
              <img 
                  className="w-full rounded-xl h-[253px] object-cover" 
                  src={gite.imageUrl} 
                  alt={gite.name} 
              />
              <div className="absolute uppercase text-xl bottom-0 right-0 pr-2 bg-[#0c0d0c] px-4 py-2 rounded-tl-xl">
                {gite.name}
                <div className="social-icon text-center">
                  <a className={darkMode ? "border border-[#EFE7D2]" : "text-black border border-black"} href={`#gite-${gite.id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </a>
                </div>
              </div> 
          </div>
          ))}
        </div>
      </div>

    </div>
    </section>
  );
};

export default WhoAreWe;
