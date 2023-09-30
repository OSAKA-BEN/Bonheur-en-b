import { useContext, useState } from "react";
import DarkModeContext from "../DarkModeContext";
import backgroundImgFaq from '../assets/background-papierpeintblack.jpg';


const FAQ = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
  <section id="faq" className="relative z-0 overflow-hidden bg-no-repeat bg-center bg-cover bg-fixed" style={{ backgroundImage: `url(${backgroundImgFaq})` }}>  
  <div className="py-20 md:py-40 flex flex-col gap-10 items-center relative content mx-4">
      <div className="relative flex items-center justify-center">
        <p className={`font-bold poppins-font absolute text-[120px] md:text-[180px] lg:text-[280px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">FAQ</p>
        <h2 className={`dancing-font text-2xl md:text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Nous répondons à vos questions</h2>
      </div>

      <div className="h-2 w-2 mb-6 mx-auto bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[150px] sm:before:w-[250px] lg:before:w-[300px] before:h-[1px] before:bg-white/30 before:absolute before:right-5 after:content-[''] after:w-[150px] sm:after:w-[250px] lg:after:w-[300px] after:h-[1px] after:bg-white/30 after:absolute after:left-5"></div>

      <div className="flex flex-wrap -mx-4"> {/* Conteneur Flex englobant */}
        {/* Accessibilité */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'accessibility' ? null : 'accessibility')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Accessibilité</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'accessibility' ? 'block' : 'hidden'}`}>
              Tous nos logements sont uniquement accessibles par des escaliers.
              Pour l’accessibilité des personnes à mobilité réduite, veuillez nous contacter.
            </p>
          </div>
          <span className={`${openFAQ === 'accessibility' ? 'block' : 'hidden'}`}>
              <svg className="dark:stroke-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EFE7D2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
              </svg>
          </span>
          <span className={`${openFAQ === 'accessibility' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Heures d'arrivée et de départ */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'hours' ? null : 'hours')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Heures arrivée/départ</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'hours' ? 'block' : 'hidden'}`}>
              Votre logement est disponible à partir de 16h. Si vous avez de la chance, vous pourrez peut-être même vous enregistrer plus tôt. Le départ doit avoir lieu avant 10h le matin. Si vous désirez prolonger votre séjour et réserver un départ tardif à 13h nous facturons 25 € TTC.
              N&#39;hésitez pas à nous contacter à ce sujet.
            </p>
          </div>
          <span className={`${openFAQ === 'hours' ? 'block' : 'hidden'}`}>
            <svg className="dark:stroke-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EFE7D2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className={`${openFAQ === 'hours' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Remise des clés */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'keys' ? null : 'keys')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Remise des clés</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'keys' ? 'block' : 'hidden'}`}>
              Les logements sont accessibles via des codes qui vous seront communiqués 48h avant votre arrivée.
            </p>
          </div>
          <span className={`${openFAQ === 'keys' ? 'block' : 'hidden'}`}>
            <svg className="dark:stroke-[#EFE7D2] dark:fill-[#EFE7D2]" width="48" height="48" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" fill="#EFE7D2">
                <path d="M2.89077 3.01913C-0.963347 6.87325 -0.963347 13.1683 2.89077 17.0224C5.63148 19.7632 9.74255 20.6624 13.3397 19.2921L15.7807 21.733C15.9948 21.9472 16.2946 22.0756 16.5943 22.0756H19.0781V24.5594C19.0781 24.8592 19.2066 25.1589 19.4207 25.373L20.6197 26.5721C20.8338 26.7862 21.1336 26.9147 21.4334 26.9147H23.9171V29.3985C23.9171 29.6982 24.0456 29.998 24.2597 30.2121L25.7157 31.6681C25.9299 31.8822 26.2296 32.0107 26.4866 32.0107L30.7261 32.1392C31.0259 32.1392 31.3685 32.0535 31.6254 31.7966C31.8395 31.5825 31.968 31.2399 31.968 30.8973L31.8395 26.6577C31.8395 26.358 31.6682 26.101 31.4969 25.8869L19.1209 13.5537C20.4484 9.91373 19.592 5.84549 16.8513 3.10478C13.04 -0.834988 6.7449 -0.834988 2.89077 3.01913ZM15.0527 8.71467L10.1708 13.8535C9.91384 14.1533 9.52843 14.3246 9.10019 14.3246C8.67196 14.3246 8.32937 14.1533 8.0296 13.8535L5.33172 10.9843C4.77501 10.3848 4.81783 9.48549 5.37454 8.92879C5.97407 8.37208 6.87337 8.4149 7.43007 8.97161L9.10019 10.7274L12.9543 6.70196C13.511 6.10243 14.4531 6.10243 15.0098 6.65914C15.5666 7.21584 15.6094 8.11514 15.0527 8.71467Z"></path>
            </svg>
          </span>
          <span className={`${openFAQ === 'keys' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Courses */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'courses' ? null : 'courses')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Courses</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'courses' ? 'block' : 'hidden'}`}>
              Parce que nous connaissons les difficultés d&#39;aller les faires des courses un vendredi soir après quelques heures de route, nous pouvons faire quelques courses pour vous. Merci de nous contacter si vous avez besoin de ce service.
            </p>
          </div>
          <span className={`${openFAQ === 'courses' ? 'block' : 'hidden'}`}>
            <svg className="dark:stroke-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EFE7D2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </span>
          <span className={`${openFAQ === 'courses' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Dépôt de garantie */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'guarantee' ? null : 'guarantee')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Dépôt de garantie</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'guarantee' ? 'block' : 'hidden'}`}>
              Lors de votre réservation, nous vous demandons de nous faire parvenir un chèque d’un montant de 350€ (non encaissé) pour garantir votre venue.
            </p>
          </div>
          <span className={`${openFAQ === 'guarantee' ? 'block' : 'hidden'}`}>
            <svg className="dark:stroke-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EFE7D2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
          </span>
          <span className={`${openFAQ === 'guarantee' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Chiens */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'dogs' ? null : 'dogs')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Chiens</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'dogs' ? 'block' : 'hidden'}`}>
                Nous sommes comme vous, nous adorons les chiens. Ils seront accueillis avec Amour et bienveillance et ce sans supplément. Nous demandons qu&#39;ils ne dorment pas sur les lits, ni sur les canapés et fauteuils.
            </p>
          </div>
          <span className={`${openFAQ === 'dogs' ? 'block' : 'hidden'}`}>
            <svg className="dark:stroke-[#EFE7D2] dark:fill-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 400" fill="#EFE7D2" stroke="#EFE7D2">
              <g>
                <path d="M124.755,221.208l4.234,5.813l131.516-101.828c-38.656-49.891-68.422-88.453-68.422-88.453 c-7.359-10.016-17.484-8.922-22.578,2.391l-5.969,13.313c-5.063,11.313-19.109,18.344-31.188,15.594L18.552,42.317 C6.474,39.583-1.729,47.333,0.317,59.567l8.609,51.094c2.031,12.219,13.625,24.359,25.75,27l63.672,13.75 c12.125,2.625,11.875,4.453-0.5,4.109l-35.531-1.094c-12.391-0.344-18.141,8.234-12.766,19.094 c5.375,10.891,19.75,21.594,31.922,23.875l7.891,1.453C101.552,201.114,117.474,211.161,124.755,221.208z"></path>
                <path d="M508.317,245.27c-4.313-18.094-12.516-9.297-15.938-3.094c-2.781,5.047-28.703,58.297-69.813,90.344 c-25.094-31.031-86.219-109.531-139.219-177.859L150.802,257.286l17.188,24.531c-20,53.641-59.109,164.437-59.109,164.437 c-4.953,13.953,2.406,29.297,16.484,34.297c14.016,5.031,27.109-2.469,33.156-16.656l56.328-115.14l18.453,26.313 c-7,7.703-11.516,17.75-11.719,28.938l-0.25,12.078c-1.063,0-2.156,0-3.156,0c-58.469,0-61.719,64.953-3.25,64.953 c16.25,0,94.203,0,94.203,0s26,0,87.703,0c60.813,0,79.938-47.406,60.828-96.015C481.427,360.598,524.896,305.833,508.317,245.27z"></path>
              </g>
            </svg>
          </span>
          <span className={`${openFAQ === 'dogs' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Tabac */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'tabac' ? null : 'tabac')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Tabac</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'tabac' ? 'block' : 'hidden'}`}>
              Fumer est strictement interdit au sein des logements. Des frais de nettoyage de 150 € peuvent être exigés en cas d&#39;odeur ou de cendres dans les logements.
            </p>
          </div>
          <span className={`${openFAQ === 'tabac' ? 'block' : 'hidden'}`}>
            <svg className="dark:stroke-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EFE7D2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>
          </span>
          <span className={`${openFAQ === 'tabac' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Parking */}
        <div className="w-full lg:w-1/2 px-2">
        <button 
        className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
        onClick={() => setOpenFAQ(openFAQ === 'parking' ? null : 'parking')}>
          <div className="max-w-xl pr-5">
            <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
              <h3 className="text-2xl font-semibold">Parking</h3>
            </div>
            <p className={`mt-3 text-lg ${openFAQ === 'parking' ? 'block' : 'hidden'}`}>
              Selon le gîte choisi, un parking privé peut vous être proposé.  Il y a cependant de nombreux parking proche des gites. De plus, une carte de stationnement à la journée, facturée 5€ peut etre proposé.
            </p>
          </div>
          <span className={`${openFAQ === 'parking' ? 'block' : 'hidden'}`}>
            <svg className="dark:stroke-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EFE7D2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
              </svg>
          </span>
          <span className={`${openFAQ === 'parking' ? 'hidden' : 'block'}`}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
            </svg>
          </span>
        </button>
        </div>

        {/* Taxe de séjour */}
        <div className="w-full px-2">
      <button 
      className="flex mb-8 p-8 group w-full items-center justify-between rounded-3xl border border-black bg-black/40 dark:border-[#EFE7D2] text-left"
      onClick={() => setOpenFAQ(openFAQ === 'tax' ? null : 'tax')}>
        <div className="max-w-xl pr-5">
          <div className="flex items-start mb-6"> {/* Conteneur Flex pour l'icône et le titre */}
            <h3 className="text-2xl font-semibold">Taxe de séjour</h3>
          </div>
          <div className={`mt-3 text-lg  ${openFAQ === 'tax' ? 'block' : 'hidden'}`}>
            <p className="mt-3 text-lg ">
              La taxe de séjour est de 0.52€ par jour et par personne pour les gites:
            </p>
            <ul className="">
              <li>- Le 13 de Gabrielle</li>
              <li>- La Grébe Huppée</li>
              <li>- La Mouette Rieuse</li>
            </ul>

            <p className="mt-3 text-lg ">
              La taxe de séjour est de 0.60€ par jour et par personne pour le gite:
            </p>
            <ul className="">
              <li>- Le Clos Normand</li>
            </ul>

            <p className="mt-3 text-lg ">
              La taxe de séjour est de 0.70€ par jour et par personne pour le gite:
            </p>
            <ul className="">
              <li>- Perle de Sel</li>
            </ul>

            <p className="mt-3 text-lg ">
              Elle n&#39;est pas incluse dans le prix du logement.
            </p>
          </div>
        </div>
        <span className={`${openFAQ === 'tax' ? 'block' : 'hidden'}`}>
          <svg className="dark:stroke-[#EFE7D2]" width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EFE7D2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <span className={`${openFAQ === 'tax' ? 'hidden' : 'block'}`}>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="#EFE7D2"></path>
          </svg>
        </span>
      </button>
      </div>

    </div>
  </div>
</section>

  );
};

export default FAQ;