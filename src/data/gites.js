import perleSel1 from '../assets/perle-sel1.jpg';
import perleSel2 from '../assets/perle-sel2.jpg';
import perleSel3 from '../assets/perle-sel3.jpg';
import perleSel4 from '../assets/perle-sel4.jpg';
import perleSel5 from '../assets/perle-sel5.jpg';
import closNormand1 from '../assets/clos-normand1.jpg';
import closNormand2 from '../assets/clos-normand2.jpg';
import closNormand3 from '../assets/clos-normand3.jpg';
import closNormand4 from '../assets/clos-normand4.jpg';
import closNormand5 from '../assets/clos-normand5.jpg';
import gabrielle1 from '../assets/13-gabrielle1.jpg';
import gabrielle2 from '../assets/13-gabrielle2.jpg';
import gabrielle3 from '../assets/13-gabrielle3.jpg';
import gabrielle4 from '../assets/13-gabrielle4.jpg';
import gabrielle5 from '../assets/13-gabrielle5.jpg';
import grebeHuppee1 from '../assets/grebe-huppee1.jpg';
import grebeHuppee2 from '../assets/grebe-huppee2.jpg';
import grebeHuppee3 from '../assets/grebe-huppee3.jpg';
import grebeHuppee4 from '../assets/grebe-huppee4.jpg';
import grebeHuppee5 from '../assets/grebe-huppee5.jpg';
import mouetteRieuse1 from '../assets/mouette-rieuse1.jpg';
import mouetteRieuse2 from '../assets/mouette-rieuse2.jpg';
import mouetteRieuse3 from '../assets/mouette-rieuse3.jpg';
import mouetteRieuse4 from '../assets/mouette-rieuse4.jpg';
import mouetteRieuse5 from '../assets/mouette-rieuse5.jpg';
import terrace from '../assets/terrace.png';
import tv from '../assets/tv.png';
import drying from '../assets/drying.png';
import dishwasher from '../assets/dishwasher.png';
import wifi from '../assets/terrace.png';
import airConditioning from '../assets/air-conditioning.png'

export const gitesData = [
  {
    id: 1,
    name: 'Perle de Sel',
    subtitle: 'Idéal pour les grandes familles',
    description: "Ce gîte familial offre à nos clients le confort et la souplesse dont ils ont besoin. Il s'agit de l'option idéale pour les amis ou les grandes familles. Perle de Sel est un gîte avec 1 étage. Il comprend une pièce de vie (la salle à manger), 2 salons, 1 cuisine, 2 salles de douche avec 2 WC, 3 chambres. Chambre 1: lit en 160x190. Chambre 2: 4 lits en 90x190 et 1 lit parapluie. Chambre 3: la suite parentale avec lit en 160x190 avec 1 lit bébé et 1 lit créche. Petit extérieur avec 1 table et 2 chaises pour fumer ou boire son café le matin.",
    caracteristics: [
      '105 m2',
      '8 Personnes',
      '3 Chambres',
      '2 Salles de bain',
      '2-3 Nuits minimum',
    ],
    icons: [terrace, tv, drying, dishwasher, wifi],
    price: '180€ (minimum de 2 nuits)',
    rental: 'Location de 3 nuits minimum en juillet et aout.',
    imageUrl: [perleSel1, perleSel2, perleSel3, perleSel4, perleSel5],
    airBnbUrl: 'https://www.airbnb.fr/rooms/41968856?source_impression_id=p3_1695606865_waIzLc8E6Qwgq52a',
  },
  {
    id: 2,
    name: 'Le Clos Normand',
    subtitle: 'Idéal pour les familles',
    description: "Une option confortable et en campagne pour les familles ou les groupes en voyage. Le Clos Normand *** est un gite de plain pied, il comprend une pièce de vie (salon-salle à manger), une cuisine, une salle de douche avec WC, 3 chambres. Il comprend une pièce de vie (la salle à manger), 2 salons, 1 cuisine, 2 salles de douche avec 2 WC, 3 chambres. Chambre 1: lit en 160x190. Chambre 2: 4 lits en 90x190 et 1 lit parapluie. Chambre 3: la suite parentale avec lit en 160x190 avec 1 lit bébé et 1 lit créche. Petit extérieur avec 1 table et 2 chaises pour fumer ou boire son café le matin.",
    caracteristics: [
      '70 m2',
      '6 Personnes',
      '3 Chambres',
      '1 Salle de bain',
      '2 Nuits minimum',
    ],
    icons: [terrace, tv, drying, dishwasher],
    price: '90€ (minimum de 2 nuits)',
    rental: 'Location à la semaine du samedi au samedi en juillet et aout',
    imageUrl: [closNormand1, closNormand2, closNormand3, closNormand4, closNormand5],
    airBnbUrl: 'https://www.airbnb.fr/rooms/26598723?source_impression_id=p3_1695611709_%2BOc2dfB%2FCL%2FfxZDL',
  },
  {
    id: 3,
    name: 'Les 13 de Gabrielle',
    subtitle: 'Proche de la plage du Crotoy',
    description: "Conçu pour votre confort, Le 13 de Gabrielle vous offre des caractéristiques et des équipements adaptés pour un séjour plaisant avec les enfants. Il comprend une pièce de vie: salon, une cuisine, une salle de bain avec WC, 2 chambres. Chambre 1: lit en 140x190. Chambre 2: lit en 140x190 et 1 lit parapluie. Terrasse bois avec salon de jardin pour les belles soirées et les apéritifs entre amis. Pour les enfants, une salle de jeux rien que pour eux.",
    caracteristics: [
      '43 m2',
      '4 Personnes',
      '2 Chambres',
      '1 Salle de bain',
      '2 Nuits minimum',
    ],
    icons: [terrace, tv, drying, dishwasher, wifi],
    price: '80€ (minimum de 2 nuits)',
    rental: 'Location à la semaine du samedi au samedi en juillet et aout.',
    imageUrl: [gabrielle1, gabrielle2, gabrielle3, gabrielle4, gabrielle5],
    airBnbUrl: 'https://www.airbnb.fr/rooms/26477517?source_impression_id=p3_1695611729_l7O2KPRafXe0VZTa',
  },
  {
    id: 4,
    name: 'La Grèbe Huppée',
    subtitle: 'ressourçant et dépaysant',
    description: "La Grèbe Huppée est un gîte face au marais du Crotoy, alliant simplicité et confort, pour les familles ou les groupes en voyage. Il comprend une pièce de vie: salon, une cuisine, une salle de douche avec WC, 2 chambres. Chambre 1: lit en 140x190. Chambre 2: 1 lit en 90 x 190 et 1 lit parapluie. Jardin privatif avec portique de jeux pour les enfants, Tables de pique-nique, avec barbecue au charbon de bois, salon de jardin, chaises longues. Parking réservé au Gîte. Les équipements extérieurs sont à partager avec le gite accolé: la Mouette Rieuse. Ces deux gîtes peuvent être loués séparément ou ensemble.",
    caracteristics: [
      '50 m2',
      '3 Personnes',
      '1 Chambre',
      '1 Salle de bain',
      '1-7 Nuits minimum',
    ],
    icons: [terrace, tv, drying, dishwasher, airConditioning],
    price: '75€ (minimum de 2 nuits)',
    rental: 'Location à la semaine du vendredi au vendredi en juillet et aout.',
    imageUrl: [grebeHuppee1, grebeHuppee2, grebeHuppee4,grebeHuppee3, grebeHuppee5],
    airBnbUrl: 'https://www.airbnb.fr/rooms/41949614?source_impression_id=p3_1695611757_ieAzhwcT7vnJczJn',
  },
  {
    id: 5,
    name: 'La Mouette Rieuse',
    subtitle: 'Idéale pour les couples avec enfants',
    description: "La Mouette Rieuse est un gîte face au marais du Crotoy, alliant simplicité et confort, pour les familles ou les groupes en voyage. Il comprend une pièce de vie: salon, une cuisine, une salle de douche avec WC, 2 chambres. Chambre 1: lit en 140x190. Chambre 2: 1 lit en 90 x 190 et 1 lit parapluie. Jardin privatif avec portique de jeux pour les enfants, Tables de pique-nique, avec barbecue au charbon de bois, salon de jardin, chaises longues. Parking réservé au Gîte. Les équipements extérieurs sont à partager avec le gite accolé: la Grèbe Huppée. Ces deux gîtes peuvent être loués séparément ou ensemble.",
    caracteristics: [
      '60 m2',
      '4 Personnes',
      '2 Chambres',
      '1 Salle de bain',
      '1-7 Nuits minimum',
    ],
    icons: [terrace, tv, drying, dishwasher, airConditioning],
    price: '85€ (minimum de 2 nuits)',
    rental: 'LLocation à la semaine du vendredi au vendredi en juillet et aout.',
    imageUrl: [mouetteRieuse2, mouetteRieuse3, mouetteRieuse1, mouetteRieuse4, mouetteRieuse5],
    airBnbUrl: 'https://www.airbnb.fr/rooms/41947438?source_impression_id=p3_1695612041_GYphKLMV9e18Su3p',
  },
];
