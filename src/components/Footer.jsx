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
        <a className={darkMode ? "text-white border border-white" : "text-black border border-black"} href="https://www.facebook.com/groups/470717321340382/" target="_blank" rel="noopener noreferrer">
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.54 2.65667H12.0007V0.112667C11.7487 0.078 10.882 0 9.87267 0C7.76667 0 6.324 1.32467 6.324 3.75933V6H4V8.844H6.324V16H9.17333V8.84467H11.4033L11.7573 6.00067H9.17267V4.04133C9.17333 3.21933 9.39467 2.65667 10.54 2.65667V2.65667Z" fill="currentColor"/>
          </svg>
        </a>
        <a className={darkMode ? "text-white border border-white" : "text-black border border-black"} href="https://www.linkedin.com/in/guy-catteau-35604493/?originalSubdomain=fr">
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z" fill="currentColor"/>
          <path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z" fill="currentColor"/>
          <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z" fill="currentColor"/>
          </svg>
        </a>
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
