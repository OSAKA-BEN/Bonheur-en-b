import { DarkModeProvider } from "../DarkModeContext"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Activities from "./Activities"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Footer from "./Footer"
import Gites from "./Gites"
import Header from "./Header"
import Partners from "./Partners"
import WhereToFind from "./WhereToFind"
import WhoAreWe from "./WhoAreWe"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      // Vous pouvez également passer des options ici si nécessaire
    });
  }, []);

  return (
    <DarkModeProvider>
      <Header />
      <WhoAreWe />
      <Gites />
      <WhereToFind />
      <Contact />
      <FAQ />
      <Activities />
      <Partners />
      <Footer />
    </DarkModeProvider>
  )
}

export default App
