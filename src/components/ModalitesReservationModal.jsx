import { useContext } from 'react';
import PropTypes from 'prop-types';
import DarkModeContext from '../DarkModeContext';

const MentionsLegalesModal = ({ closeModal }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div data-theme={darkMode ? "dark" : "light"} id="my_modal_5" className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box" style={{ maxWidth: "800px" }}>
        <h2 className="font-bold text-lg text-center">Modalités de réservation</h2>
        <p>Frais de ménage optionnel: 50 €
        Caution pour séjour: 350 €
        Votre Animal de compagnie est accueillis avec bienveillance et sans frais supplémentaire
        </p>

        <div className="text-justify">
          <h3 className='font-bold'>Inclus</h3>
          <p className='pb-2'>Tous les tarifs incluent la TVA, la consommation d’eau et d’électricité, le chauffage, Les tarifs sont affichés à la nuit (minimum de 2 nuits) et par semaine, de samedi 16h à samedi 10h (pour les mois de juillet et aout).</p>

          <h3 className='font-bold'>Non Inclus</h3>
          <p className='pb-2'>Le linge de lit et les draps de bain ne sont pas fournis (prestation optionnelle)</p>

          <h3 className='font-bold'>Procédure de réservation</h3>
          <p className='pb-2'>Si vous demandez une réservation et que vos dates sont disponibles, nous vous envoyons votre contrat de location par mail. Le contrat est à nous retourner signé, le virement ou le chèque  (du montant du loyer uniquement) doit nous parvenir sous 8 jours. Les options et Taxe de Séjour sont à régler à votre arrivée en espèces.
          • Dès réception de ce montant, nous envoyons la confirmation ainsi que les détails pour votre arrivée. Votre réservation sera définitive.
          </p>

          <h3 className='font-bold'>Frais de ménage de départ</h3>
          <p className='pb-2'>Les frais de ménage de départ sont optionnels, c’est-à-dire que vous pouvez réaliser le nettoyage de fin de séjour si vous le souhaitez et vous devez nous rendre une maison aussi propre que vous l’avez reçue.
          L’objectif étant de présenter à chaque visiteur une maison propre et accueillante.
          A la fin de votre séjour, nous vous prions de faire la vaisselle et de vider les ordures ménagères et tri sélectif dans les poubelles extérieures adéquates
          </p>

          <h3 className='font-bold'>Caution</h3>
          <p className='pb-2'>La caution payée sera rendue dans la semaine après le départ, après déduction des frais de ménage et d’autres frais éventuels.</p>

          <h3 className='font-bold'>Annulation de séjour</h3>
          <p className='pb-2'>Nous vous conseillons de prendre une assurance annulation de séjour. Nous ne remboursons pas le séjour mais vous proposons des dates ultérieures.</p>
        
          <h3 className='font-bold'>Frais de réservation</h3>
          <p className='pb-2'>Nous ne comptons pas de frais de réservation.</p>
        
          <h3 className='font-bold'>Transactions financières</h3>
          <p className='pb-2'>Tous les paiements se font par virement, ou chèque.</p>
        
          <h3 className='font-bold'>Chèques vacances</h3>
          <p className='pb-2'>Désolé, Nous n’acceptons pas les chèques vacances.</p>
        
          <h3 className='font-bold'>Louer plusieurs gîtes en même temps ?</h3>
          <p className='pb-2'>C’est possible. Demandez-nous ! </p>
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
