const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-slate-200 dark:bg-slate-900">
      <h1 className="pt-8 text-black dark:text-white text-9xl text-center dancing-font">Partenaires</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/airbnb.png" alt=""/>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/binance.png" alt=""/>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/coinbase.png" alt=""/>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="h-32 w-full flex items-center justify-center">
              <img className="h-1/2 w-1/2 object-contain" src="src/assets/dropbox.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
