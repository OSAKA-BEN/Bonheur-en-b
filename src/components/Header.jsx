import { useContext, useEffect, useState } from "react";
import DarkModeContext from "../DarkModeContext";
import phoqueImage from '../assets/phoque-baie-de-somme.jpg';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
  <section id="header" style={{ backgroundImage: `url(${phoqueImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
  {/* Navbar */}
    <nav className={`fixed top-0 z-10 flex justify-between px-8 min-h-16 w-full items-center ${isScrolled ? 'bg-white dark:bg-[#0c0d0c] dark:bg-opacity-70' : 'bg-transparent'}`}>
        <div className="flex justify-start items-center flex-grow">
          {/* Section gauche - Titre */}
            <a className={`font-medium font-heading flex text-xl ${darkMode && isScrolled ? 'text-white' : 'text-black'}`} href="#">
              <span className="dancing-font text-4xl">Les bonheur en B</span>
            </a>
          </div>

            {/* Section du milieu: Liens (prend tout l'espace restant) */}
            <div className="hidden lg:flex flex-grow items-center justify-center lg:justify-start py-8">
              <ul className={`flex justify-center text-2xl ${darkMode && isScrolled ? 'text-white' : 'text-black'}`}>
                <li className="mr-12"><a className="hover:underline" href="#gites">Gîtes</a></li>
                <li className="mr-12"><a className="hover:underline" href="#contacts">Contacts</a></li>
                <li className="mr-12"><a className="hover:underline" href="#location">Localisation</a></li>
                <li className="mr-12"><a className="hover:underline" href="#faq">FAQ</a></li>
                <li className="mr-12"><a className="hover:underline" href="#activities">Activités</a></li>
                <li className="mr-12"><a className="hover:underline" href="#partners">Partenaires</a></li>
              </ul>
              {/* Boutton pour le DarkMode */}
              {/* <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full  hover:bg-pink-500">
                {darkMode ? <span className={`${isScrolled ? 'text-white' : 'text-black'}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}    stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                </span> : <span className='text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                </span>}
              </button> */}
            </div>

          {/* Bouton du menu burger (affiché uniquement sur les petits écrans) */}
          <button className={`navbar-burger lg:hidden self-center ${darkMode && isScrolled ? 'text-white' : 'text-black'}`} onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0" width="24" height="4" fill="currentColor"></rect>
                <rect y="8" width="24" height="4" fill="currentColor"></rect>
                <rect y="16" width="24" height="4" fill="currentColor"></rect>
            </svg>
          </button>

      <a href="#" className="fixed bottom-5 lg:bottom-10 right-5 lg:right-10 z-40"><button type="button" className="h-8 w-8 p-2 tracking-widest uppercase text-white font-light text-sm rounded-sm cursor-pointer transition-all bg-pink-500 hover:opacity-75"><svg fill="none" viewBox="0 0 24 24" className="h-full w-full"><path fill="currentColor" d="M17.657 16.243l1.414-1.414-7.07-7.072-7.072 7.072 1.414 1.414L12 10.586l5.657 5.657z"></path></svg></button></a>
    </nav>

    {/* Header section */}
    <div className="px-4 flex flex-col text-center items-center justify-center lg:justify-end h-full">  {/* Ajustez h-[400px] selon la hauteur souhaitée */}
        <p className="my-4 poppins-font uppercase font-bold font-stroke-header tracking-wider mx-auto pointer-events-none text-4xl md:text-[50px] lg:text-[80px]" data-aos="fade-up" data-aos-delay="200">Venez découvrir</p>
        <p className="my-8 poppins-font uppercase font-bold font-stroke-header tracking-wider mx-auto pointer-events-none text-6xl md:text-[80px] lg:text-[130px]" data-aos="fade-up" data-aos-delay="200">La Baie de Somme</p>
    </div>

    <div className={menuOpen ? "navbar-menu fixed top-0 left-0 bottom-0 right-0 z-50" : "hidden"}>
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="relative flex flex-col items-center justify-center text-center text-3xl h-full bg-black bg-opacity-70 text-white">
        <button  className="mb-4" onClick={() => setMenuOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button> {/* Fermer le menu */}
        <ul className="space-y-4">
          <li><a href="#gites" onClick={() => setMenuOpen(false)}>Gîtes</a></li>
          <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a></li>
          <li><a href="#location" onClick={() => setMenuOpen(false)}>Localisation</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
          <li><a href="#activities" onClick={() => setMenuOpen(false)}>Activités</a></li>
          <li><a href="#partners" onClick={() => setMenuOpen(false)}>Partenaires</a></li>
        </ul>
      </nav>
    </div>

  </section>
  )
}

export default Header