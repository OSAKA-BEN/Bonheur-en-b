import PropTypes from 'prop-types';
import { useContext } from 'react';
import DarkModeContext from '../DarkModeContext';

const gites = [
  {
    id: 1,
    name: "Perle de Sel",
    image: "src/assets/perle-de-sel.jpg",
    capacity: "8 personnes et 3 bébés",
    location: "en centre du Crotoy, 200m de la plage",
    description: "3 chambres, 2 salles de douche, 2 salons, 1 séjour, 1 cuisine équipée, un petit extérieur."
  },
  {
    id: 2,
    name: "Le Clos Normand",
    image: "src/assets/le-clos-normand.jpg",
    capacity: "6 personnes et 2 bébés",
    location: "proche du parc du Marquenterre",
    description: "3 chambres, 1 salle de douche, 1 salon-séjour, 1 cuisine équipée, un jardin avec jeux pour enfants, barbecue gaz, cuisine d'été, parking fermé."
  },
  {
    id: 3,
    name: "Le 13 de Gabrielle",
    image: "src/assets/13-de-grabrielle.jpg",
    capacity: "4 personnes et 1 bébé",
    location: "à 800m du centre du Crotoy, 200m de la plage",
    description: "2 chambres, 1 salle de bain, 1 salon, 1 cuisine équipée, 1 salle de jeux pour les enfants, une terrasse bois pour les belles soirées d’été."
  },
  {
    id: 4,
    name: "La Mouette Rieuse",
    image: "src/assets/mouette-rieuse.jpg",
    capacity: "4 personnes et 1 bébé",
    location: "face au marais du Crotoy",
    description: "2 chambres, 1 salle de douche, 1 salon, 1 séjour, 1 cuisine équipée, un jardin avec jeux pour enfants, table de pique-nique, barbecue au charbon de bois, parking fermé."
  },
  {
    id: 5,
    name: "La Grèbe Huppée",
    iimage: "src/assets/grebe-huppee.jpg",
    capacity: "3 personnes et 1 bébé",
    location: "face au marais du Crotoy",
    description: "2 chambres, 1 salle de douche, 1 salon, 1 séjour, 1 cuisine équipée, un jardin avec jeux pour enfants, table de pique-nique, barbecue au charbon de bois, parking fermé."
  }
];

const GiteCard = ({ gite }) => (
  <a href={`#gite-${gite.id}`} className="p-4 backdrop-blur-md bg-[#cbd4e5] bg-opacity-40 border border-opacity-20 rounded shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <img src={gite.image} alt={gite.name} className="w-full h-48 object-cover mb-4 rounded"/>
    <h2 className="font-bold">{gite.name}</h2>
    <p>{gite.capacity}</p>
    <p>{gite.location}</p>
    <p>{gite.description}</p>
  </a>
);

GiteCard.propTypes = {
  gite: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

const WhoAreWe = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="whoarewe" className="relative z-0 pb-20 bg-slate-200 dark:bg-slate-900 overflow-hidden">
    <div className="py-40 flex flex-col gap-10 items-center relative content mx-12">
      <div className="relative flex items-center justify-center">
        <p className={`font-bold absolute text-[280px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">BonheurenB</p>
        <h2 className={`dancing-font text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Qui sommes nous ?</h2>
      </div>

      <div className="h-2 w-2 mb-6 bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[300px] before:h-[1px] before:bg-white/10 before:absolute before:right-5 after:content-[''] after:w-[300px] after:h-[1px] after:bg-white/10 after:absolute after:left-5"></div>

      <p className="uppercase tracking-wider text-black dark:text-white/80 text-sm lg:text-2xl" data-aos="fade-up" data-aos-delay="400">Un séjour dont vous vous souviendrez.</p>
      <p className="uppercase tracking-wider text-black dark:text-white/80 text-sm lg:text-2xl" data-aos="fade-up" data-aos-delay="400">Les Bonheurs en B, sont des meublés de tourisme ouverts à l’année.</p>
      <p className="uppercase tracking-wider text-black dark:text-white/80 text-sm lg:text-2xl" data-aos="fade-up" data-aos-delay="400">Nos gites sont équipés pour accueillir les petits.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 text-black dark:text-white text-center">
        {gites.map((gite, index) => <GiteCard key={index} gite={gite} />)}
      </div>
    </div>
    </section>
  );
};

export default WhoAreWe;
