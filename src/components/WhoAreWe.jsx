import PropTypes from 'prop-types';

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
  <a href={`#gite-${gite.id}`} className="p-4 border border-black dark:border-white rounded shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
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

const WhoAreWe = () => (
  <section id="whoarewe" className="relative z-0 pb-20 bg-[#e9e9e9] dark:bg-black overflow-hidden">
    <h1 className="text-black dark:text-white text-9xl text-center dancing-font">Qui Sommes Nous ?</h1>
    <p className="text-black dark:text-white text-center text-lg italic">Un séjour dont vous vous souviendrez.</p>
    <p className="text-black dark:text-white text-center text-lg italic">Les Bonheurs en B, sont des meublés de tourisme ouverts à l’année.</p>
    <p className="text-black dark:text-white text-center text-lg italic">Nos gites sont équipés pour accueillir les petits.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 text-black dark:text-white text-center">
      {gites.map((gite, index) => <GiteCard key={index} gite={gite} />)}
    </div>
  </section>
);

export default WhoAreWe;
