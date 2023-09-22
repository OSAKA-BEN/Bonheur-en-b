import { useContext, useEffect, useState } from "react";
import DarkModeContext from "../DarkModeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isScrolled, setIsScrolled] = useState(false);

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
  <section id="header" style={{ backgroundImage: `url('src/assets/phoque-baie-de-somme.jpg')`, backgroundSize: 'cover', height: '100vh' }}>
  {/* Navbar */}
    <nav className={`fixed top-0 z-10 flex px-16 justify-between min-h-12 w-full ${isScrolled ? 'bg-white dark:bg-slate-900 bg-opacity-40' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between">
            {/* Section gauche */}
            <div className="flex-shrink-0 pr-14 lg:flex items-center ">
              <a className={`font-medium font-heading flex text-xl ${darkMode && isScrolled ? 'text-white' : 'text-black'}`} href="#">
                <img className="h-8" width="auto" src="boldui-assets/logo/logo-boldui-light.svg" alt=""/>
                <span className="dancing-font text-4xl">Les bonheur en B</span>
              </a>
            </div>

            {/* Section du milieu: Liens (prend tout l'espace restant) */}
            <div className="hidden lg:flex lg:flex-grow justify-center items-center py-8">
              <ul className={`flex justify-center text-xl ${darkMode && isScrolled ? 'text-white' : 'text-black'}`}>
                <li className="mr-12"><a className="hover:underline" href="#gites">Gîtes</a></li>
                <li className="mr-12"><a className="hover:underline" href="#contacts">Contacts</a></li>
                <li className="mr-12"><a className="hover:underline" href="#location">Localisation</a></li>
                <li className="mr-12"><a className="hover:underline" href="#faq">FAQ</a></li>
                <li className="mr-12"><a className="hover:underline" href="#activities">Activités</a></li>
                <li className="mr-12"><a className="hover:underline" href="#partners">Partenaires</a></li>
              </ul>
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full  hover:bg-gray-600">
                {darkMode ? <span className={`${isScrolled ? 'text-white' : 'text-black'}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}    stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                </span> : <span className='text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                </span>}
              </button>
            </div>

            {/* Section droite: Bouton Réserver */}
            <div className="hidden lg:flex lg:flex-shrink-0 items-center">
              <button className={`btn btn-outline ${darkMode ? 'text-white bg-slate-900 hover:bg-white' : 'text-black bg-white bg-opacity-20 hover:bg-black hover:text-white'}`}>Réserver</button>
            </div>

              {/* Bouton du menu burger (affiché uniquement sur les petits écrans) */}
            <button className="navbar-burger lg:hidden self-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6" width="24" height="2" fill="white"></rect><rect y="11" width="24" height="2" fill="white"></rect><rect y="16" width="24" height="2" fill="white"></rect></svg>
            </button>
        </div>
      </div>
    </nav>


    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="relative flex flex-col py-8 px-10 w-full h-full bg-black border-r border-slate-500 overflow-y-auto">
        <a className="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32" href="#">
          <img className="h-8" width="auto" src="boldui-assets/logo/logo-boldui-light.svg" alt=""/>
        </a>
        <ul className="mb-32">
          <li className="mb-10">
            <a className="flex items-center" href="#">
              <span className="mr-3 text-lg text-white">About</span>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg>
            </a>
          </li>
          <li className="mb-10">
            <a className="flex items-center" href="#">
              <span className="mr-3 text-lg text-white">Company</span>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg>
            </a>
          </li>
          <li className="mb-10">
            <a className="flex items-center" href="#">
              <span className="mr-3 text-lg text-white">Services</span>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg>
            </a>
          </li>
          <li>
            <a className="flex items-center" href="#">
              <span className="mr-3 text-lg text-white">Contact</span>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z" fill="#FFEC3E"></path>
              </svg>
            </a>
          </li>
        </ul>
        <a className="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200" href="#">
          <svg className="mr-3" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black"></path>
          </svg>
          <span className="text-sm font-medium uppercase tracking-wider">Sign Up</span>
        </a>
        <a className="flex mb-10 items-center text-white hover:underline" href="#">
          <span className="mr-2 text-sm">Log In</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z" fill="#FFEC3E"></path>
          </svg>
        </a>
        <p className="text-sm text-gray-500">All rights reserved © BoldUI 2021</p>
      </nav>
    </div>

    {/* Header section */}
    <div className="container px-4">
      <div className="relative pt-20 pb-40 md:pb-64">
        <div className="relative max-w-6xl mx-auto lg:mt-36">
          <h2 className="mb-6 md:mb-0 text-2xl sm:text-5xl md:text-6xl text-white font-heading raleway-font custom-text-effect">
            <span className="md:text-4xl dancing-font">Venez profitez de</span>
            <span className="block md:text-9xl uppercase tracking-widest">La Baie de Somme</span>
          </h2>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header