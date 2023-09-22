import { DarkModeProvider } from "../DarkModeContext"

import Activities from "./Activities"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Footer from "./Footer"
import Gites from "./Gites"
import Header from "./Header"
import Partners from "./Partners"
import WhereToFind from "./WhereToFind"

function App() {

  return (
    <DarkModeProvider>
      <Header />
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
