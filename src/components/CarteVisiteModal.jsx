import PropTypes from 'prop-types';

const MentionsLegalesModal = ({ closeModal }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-3/4">
      <iframe 
        src="/src/assets/Carte-de-visite.pdf"
        width="100%" 
        height="720" 
        style={{border: 'none'}} 
        title="Mentions Légales"
      ></iframe>
      <button onClick={closeModal} className="pt-4 float-right">Fermer</button>
    </div>
  );
};

MentionsLegalesModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default MentionsLegalesModal;
