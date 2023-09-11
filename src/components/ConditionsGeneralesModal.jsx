import { useContext } from 'react';
import PropTypes from 'prop-types';
import DarkModeContext from '../DarkModeContext';

const MentionsLegalesModal = ({ closeModal }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div data-theme={darkMode ? "dark" : "light"} id="my_modal_5" className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box max-w-full">
        <h2 className="font-bold text-lg">Conditions générales de ventes</h2>
        <p className="text-gray-700 text-base">Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine Urbem urbem Ptolomaeo deleto veneno eius et classi exuviae urbem insulam quam hanc hausto culpa nostri nunc populum piget et et eius exuviae socio culpa velut iusso deleto et iusso sunt socio est iuste dicere rege dicere aerarii ideoque advectae urbem advectae velut per culpa in culpa culpa tributaria sine</p>
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
