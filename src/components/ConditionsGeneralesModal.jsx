import { useContext } from 'react';
import PropTypes from 'prop-types';
import DarkModeContext from '../DarkModeContext';

const MentionsLegalesModal = ({ closeModal }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div data-theme={darkMode ? "dark" : "light"} id="my_modal_5" className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box" style={{ maxWidth: "800px" }}>
        <h2 className="font-bold text-lg text-center">Conditions générales de ventes</h2>
        
        <div className="text-justify">
          <h3 className='font-bold'>Durée de séjour :</h3>
          <p className='pb-2'>Le client signataire du contrat conclu pour une durée déterminée ne pourra en aucune circonstance se prévaloir d’un quelconque droit au maintien dans les lieux.</p>
          
          <h3 className='font-bold'>Contrat de location :</h3>
          <p className='pb-2'>La réservation en ligne devient effective dès lors que le client l’aura garantie par carte bancaire valide à la date du début du séjour.</p>

          <h3 className='font-bold'>Annulation :</h3>
          <p className='pb-2'>En cas d’annulation ou de modification jusqu’à 7 jours avant la date d’arrivée, aucun frais ne sera prélevé.
            En cas d’annulation ou de modification tardive ou de non-présentation, les Bonheurs en B exigera 100% du montant du séjour.
            En cas de séjour écourté, le prix correspondant au coût de l’hébergement reste acquis à la Maison Cachée.
          </p>

          <h3 className='font-bold'>Réglement :</h3>
          <p className='pb-2'>Règlement au propriétaire par : Espèces, Chéques ou virement.</p>
          
          <h3 className='font-bold'>Respect :</h3>
          <p className='pb-2'>Le client devra respecter le caractère paisible des lieux, en faire un usage conforme à leur destination. Il s’engage à rendre les hébergements en bon état.</p>

          <h3 className='font-bold'>Capacité :</h3>
          <p className='pb-2'>Le contrat est établi pour un nombre précis de personnes. Si le nombre de clients dépasse ce nombre, le propriétaire est en mesure de refuser les clients supplémentaires. Ce refus ne peut en aucun cas être considéré comme une modification ou une rupture du contrat à l’initiative du propriétaire, de sorte qu’en cas de départ d’un nombre de clients supérieur à ceux refusés, le prix correspondant au coût de l’hébergement reste acquis au propriétaire.</p>

          <h3 className='font-bold'>Assurance :</h3>
          <p className='pb-2'>Le client est responsable de tous les dommages survenant de son fait. Il doit donc vérifier si son contrat d’habitation principale prévoit l’extension villégiature (location de vacances). Le locataire atteste être couvert par une assurance de responsabilité civile couvrant sa propre responsabilité et celle des personnes l’accompagnant.</p>

          <h3 className='font-bold'>Capacité et Accès :</h3>
          <p className='pb-2'>La réservation est établie pour un nombre de personnes déterminé. Si le nombre de personnes qui se présente est supérieur à la réservation initiale, le montant du séjour sera   revu en conséquence. Si toutefois, le nombre de personnes devait être supérieur à la capacité des gîtes, les personnes supplémentaires seraient alors refusées.
          Lors de la prise des clés, une clé d’accès à la maison et à la chambre vous sera remise.
          Merci de prêter attention à votre trousseau de Clefs, toute perte engendrera des frais supplémentaires s’élevant à 250 € TTC. A titre de dédommagement, ce montant sera ajouté à votre facture au moment de votre départ.

          L’accès aux Gites Les Bonheurs en B est strictement réservé à notre clientèle. Le client s’engage à ne pas faire visiter les lieux par des visiteurs s’il n’en a pas été expressément autorisé. En cas de non-respect de ce principe, la réservation pourra prendre fin immédiatement. Le solde du séjour sera alors à régler dans son intégralité sans aucune indemnité.
          </p>

          <h3 className='font-bold'>Respect :</h3>
          <p className='pb-2'>Le client devra respecter le caractère paisible des lieux, en faire un usage conforme à leur destination. Il s’engage à rendre les hébergements en bon état.</p>

          <h3 className='font-bold'>Services :</h3>
          <p className='pb-2'>En cas de force majeure, Les Bonheurs en B ne peut garantir la régularité des services d’eau et d’électricité quelle que soit la durée des coupures ou dysfonctionnement ainsi que toute fermeture brutale du site provoquée par un cas de force majeure indépendant de notre volonté.
          Les Bonheurs en B décline donc toute responsabilité, au-delà de sa responsabilité légale, pour toute privation ou diminution de jouissance ne provenant pas de son fait.
          La responsabilité de  Les Bonheurs en B, au-delà de sa responsabilité légale, ne peut être engagée en cas de panne ou de mise hors service des équipements techniques, si le mauvais fonctionnement et les réparations étaient non prévisibles.
          </p>

          <h3 className='font-bold'>Utilisation des lieux :</h3>
          <p className='pb-2'>Afin de garantir la tranquillité des lieux et le confort de tous, le respect d’un certain « art de vivre » est exigé.
          Il est notamment demandé de ne pas fumer à l’intérieur de la maison. En cas de non-respect de cette consigne, des détecteurs de fumée pourraient se déclencher de manière intempestive et perturber le confort de tous. C’est pourquoi, pour nos clients fumeurs, nous avons entreposé à leur intention des cendriers à l’extérieur, accessibles à toute heure. Le client s’engage également à respecter les consignes de savoir-vivre qui lui seront indiquées et les présentes conditions générales de vente.
          Le client s’engage à rendre les gîtes en parfait état à la fin du séjour et à déclarer systématiquement et à assumer financièrement toute dégradation dont il serait responsable. Ceci est également valable pour tout le matériel qui serait mis à sa disposition au cours du séjour.
          L’attention des clients est attirée sur le fait que les mineurs évoluant au sein de la maison sont placés sous l’unique et entière responsabilité de leurs parents ou des personnes ayant autorité sur eux. Les Bonheurs en B n’acceptera aucune responsabilité en cas de perte, de vol et/ou de dommages et/ou de blessures causés aux biens et/ou aux personnes se trouvant sur la propriété, et ce quelle qu’en soit la cause.
          </p>

          <h3 className='font-bold'>Tabac :</h3>
          <p className='pb-2'>Le tabac est strictement interdit au sein des logements. Des frais de nettoyage de 150 € peuvent être exigés en cas d&#39;odeur ou de cendres dans les logements.
          </p>

          <h3 className='font-bold'>Loi informatique et liberté :</h3>
          <p className='pb-2'>Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, vous bénéficiez d’un droit d’accès et de rectification aux données vous concernant. Nous nous engageons à ne transmettre en aucun cas les informations que vous nous avez communiquées à d’autres sociétés ou organismes.
          </p>

          <p><i>Les Bonheurs en B</i></p>
          <p>© 2023 lesbonheursenB - Tous droits réservés CGV FAQ Emplois</p>
          <p>+33 6 29 06 85 08</p>
          <p>lesbonheursenb@gmail.com</p>
        </div>
        
        <div className="modal-action">
          <form method="dialog">
            <button className="btn text-[#EFE7D2]" onClick={closeModal}>Fermer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

MentionsLegalesModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default MentionsLegalesModal;
