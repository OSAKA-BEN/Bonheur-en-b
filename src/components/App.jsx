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
    <section className="bg-black overflow-hidden">
      <Header />
      <Gites />
      <Activities />
      <Partners />
      <FAQ />
      <Contact />
      <WhereToFind />
      <Footer />
    </section>
  )
}

export default App
