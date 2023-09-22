import { useContext } from 'react';
import PropTypes from 'prop-types';
import DarkModeContext from '../DarkModeContext';

const MentionsLegalesModal = ({ closeModal }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div data-theme={darkMode ? "dark" : "light"} id="my_modal_5" className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h2 className="font-bold text-lg">Mentions Légales</h2>
        <p className="text-gray-700 text-base">hello</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={closeModal}>Fermer</button>
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
