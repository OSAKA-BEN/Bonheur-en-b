import { useContext, useState } from "react";
import MentionsLegalesModal from "./MentionsLegalesModal";
import ConditionsGeneralesModal from "./ConditionsGeneralesModal";
import ModalitesReservation from "./ModalitesReservationModal";
import CarteVisiteModal from "./CarteVisiteModal";
import DarkModeContext from "../DarkModeContext";

const Footer = () => {
const { darkMode } = useContext(DarkModeContext);
const [isModalOpen, setIsModalOpen] = useState(false);
const [activeModal, setActiveModal] = useState(null);

const showModal = (modalType) => {
  setActiveModal(modalType);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

return (
  <section id="footer" className="bg-slate-200 dark:bg-slate-900 overflow-x-hidden relative">
    <div className="border-t py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

      <div className="social-icon text-center">
        <a className={darkMode ? "text-white" : "text-black"} href="https://www.facebook.com/groups/470717321340382/"><img src="src/assets/nav-icon2.svg" alt="facebook" target="_blank" rel="noopener noreferrer" /></a>
        <a className={darkMode ? "text-white" : "text-black"} href="https://www.linkedin.com/in/guy-catteau-35604493/?originalSubdomain=fr"><img src="src/assets/nav-icon1.svg" alt="linkdin" target="_blank" rel="noopener noreferrer" /></a>
        <p className="mt-4 text-center text-black dark:text-white text-sm md:text-lg">Copyright © Les Bonheur en B 2023</p>
      </div>

        <div className="my-4 md:mb-0 text-center text-black dark:text-white md:w-1/2">
          <p className="cursor-pointer hover:underline" onClick={() => showModal('mentionsLegales')}>Mentions légales</p>
          <p className="cursor-pointer hover:underline" onClick={() => showModal('conditionsGenerales')}>Conditions générales de ventes</p>
          <p className="cursor-pointer hover:underline" onClick={() => showModal('modalitesReservation')}>Modalités de réservation</p>
          <p className="cursor-pointer hover:underline" onClick={() => showModal('carteVisite')}>Carte de visite</p>
        </div>

      </div>
    </div>
    <div>
      {isModalOpen && (
        <div>
          {activeModal === 'mentionsLegales' && <MentionsLegalesModal closeModal={closeModal} />}
          {activeModal === 'conditionsGenerales' && <ConditionsGeneralesModal closeModal={closeModal} />}
          {activeModal === 'modalitesReservation' && <ModalitesReservation closeModal={closeModal} />}
          {activeModal === 'carteVisite' && <CarteVisiteModal closeModal={closeModal} />}
        </div>
      )}
    </div>
  </section>
)
}

export default Footer;
