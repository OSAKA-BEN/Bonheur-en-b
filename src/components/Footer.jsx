import { useState } from "react";
import MentionsLegalesModal from "./MentionsLegalesModal";
import ConditionsGeneralesModal from "./ConditionsGeneralesModal";
import ModalitesReservation from "./ModalitesReservationModal";
import CarteVisiteModal from "./CarteVisiteModal";

const Footer = () => {
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

        <div className="flex justify-center items-center w-full md:w-1/4 mb-4 md:mb-0">
          <a className="mr-8 text-black dark:text-white" href="https://www.facebook.com/groups/470717321340382/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/facebook.svg" alt="facebook" />
          </a>
          <a className="text-black dark:text-white" href="https://www.linkedin.com/in/guy-catteau-35604493/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/linkedin.svg" alt="linkedin" />
          </a>
        </div>

        <div className="mb-4 md:mb-0 text-center text-black dark:text-white md:w-1/2">
          <p className="cursor-pointer hover:underline" onClick={() => showModal('mentionsLegales')}>Mentions légales</p>
          <p className="cursor-pointer hover:underline" onClick={() => showModal('conditionsGenerales')}>Conditions générales de ventes</p>
          <p className="cursor-pointer hover:underline" onClick={() => showModal('modalitesReservation')}>Modalités de réservation</p>
          <p className="cursor-pointer hover:underline" onClick={() => showModal('carteVisite')}>Carte de visite</p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <p className="text-center text-black dark:text-white text-sm md:text-lg">© Les Bonheur en B 2023</p>
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
