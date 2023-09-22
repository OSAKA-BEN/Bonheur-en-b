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
    <section id="footer" className="bg-white dark:bg-black overflow-x-hidden">
      <div className="border-t py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

          <p className="text-center text-black dark:text-white text-lg">Tout droits réservés © Les Bonheur en B 2023</p>

          <div className="mb-4 md:mb-0 text-center text-black dark:text-white">
            <p className="cursor-pointer hover:underline" onClick={() => showModal('mentionsLegales')}>Mentions légales</p>
            <p className="cursor-pointer hover:underline" onClick={() => showModal('conditionsGenerales')}>Conditions générales de ventes</p>
            <p className="cursor-pointer hover:underline" onClick={() => showModal('modalitesReservation')}>Modalités de réservation</p>
            <p className="cursor-pointer hover:underline" onClick={() => showModal('carteVisite')}>Carte de visite</p>
          </div>

          <div className="flex justify-center items-center w-full md:w-auto mb-8 md:mb-0">
            <a className="mr-8" href="https://www.facebook.com/groups/470717321340382/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/in/guy-catteau-35604493/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/linkedin.svg" alt="linkedin" />
            </a>
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
