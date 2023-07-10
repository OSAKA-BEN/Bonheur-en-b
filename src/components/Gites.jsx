const Gites = () => {
  return (
  <section id="gites" className="my-12 z-0" style={{ position: 'relative'}}>
    <div className="absolute z-10 md:bottom-0 right-0 h-96 md:h-full w-full md:w-1/3 lg:w-1/2">
      <div className="flex md:flex-col">
        <img className="md:h-64 w-1/3 md:w-full object-cover" src="src/assets/random2.jpg" alt=""/>
        <div className="md:-ml-20 lg:-ml-0 xl:-ml-24 w-1/3 md:w-auto">
          <img className="h-full md:h-96 w-full object-cover" src="src/assets/random1.jpg" alt=""/>
        </div>
        <img className="md:h-64 w-1/3 md:w-full object-cover" src="src/assets/random3.jpg" alt=""/>
      </div>
    </div>
    <div className="realtive container mx-auto px-4">
      <img className="absolute top-0 left-1/2 -mt-24 md:-mt-0 transform -translate-x-1/2" src="boldui-assets/elements/shadow-blue-full.svg" alt=""/>
      <div className="w-full md:w-1/2 pb-20 pt-52 md:py-20">
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-full order-last md:order-first">
            <div className="inline-flex mb-8 items-center justify-center h-40 lg:h-52 w-40 lg:w-52">
              <a href="#">
                <svg width="26" height="32" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.51932 4.24317L3.51932 16.2532L5.61163 16.2532L5.61163 4.24317L8.75009 4.24317L4.56547 0.253174L0.380859 4.24317L3.51932 4.24317Z" fill="#FFEC3E"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full max-w-md mb-8 text-center">
            <span className="text-lg font-semibold text-blue-400 cursor-pointer hover:underline">Voir ce gîte</span>
            <h2 className="mt-6 mb-4 text-2xl text-white uppercase font-heading">Perle de Sel</h2>
            <ul className="text-white">
              <li>8 adultes 3 bébés</li>
              <li>110m²</li>
              <li>2x Lit Double</li>
              <li>4x Lit Simple</li>
              <li>1 lit bébé, 1 lit crèche, 1 lit parapluie</li>
            </ul>
          </div>
          <div className="w-1/2 md:w-full">
            <div className="inline-flex items-center justify-center h-40 lg:h-52 w-40 lg:w-52">
              <a href="#">
                <svg width="26" height="32" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.42746 12.2517L5.42746 0.241699L3.33515 0.241699L3.33515 12.2517L0.196686 12.2517L4.3813 16.2417L8.56592 12.2517L5.42746 12.2517Z" fill="#FFEC3E"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gites