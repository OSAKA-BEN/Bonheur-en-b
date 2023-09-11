const Footer = () => {
  return (
    <section className="bg-white dark:bg-black overflow-x-hidden">
      <div className="border-t py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

          {/* Première colonne pour les liens */}
          <div className="mb-4 md:mb-0 text-center text-black dark:text-white">
            <p>Mentions légales</p>
            <p>Carte de visite</p>
            <p>Conditions générales de ventes</p>
            <p>Modalités de réservation</p>
          </div>

          {/* Deuxième colonne pour le copyright */}
          <p className="my-8 text-black dark:text-white">Tout droits réservés © Les Bonheur en B 2023</p>

          {/* Troisième colonne pour les icônes de médias sociaux */}
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
    </section>
  )
}

export default Footer;
