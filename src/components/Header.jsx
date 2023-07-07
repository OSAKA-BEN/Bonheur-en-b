const Header = () => {
  return (
  <div className="container mx-auto px-4">
    <div className="relative pt-20 pb-40 md:pb-64">
      <div className="absolute top-0 left-1/2 mt-20 transform -translate-x-1/2 -ml-20 rounded-full h-20 md:h-128 w-80 md:w-128">
        <img className="object-contain transform scale-200" src="boldui-assets/elements/shadow-blue-full.svg" alt=""/>
      </div>
      <div className="absolute top-0 left-1/2 mt-40 lg:mt-20 rounded-full h-20 md:h-128 w-80 md:w-128">
        <img className="object-contain transform scale-200" src="boldui-assets/elements/shadow-light-7.svg" alt=""/>
      </div>
      <div className="absolute top-0 right-1/2 mt-20 sm:mt-0 w-full max-w-3xl transform translate-x-1/2 rotate-45 clip-path">
        <img className="transform -rotate-45" src="boldui-assets/images/photo-women.png" alt=""/>
      </div>
      <div className="relative max-w-6xl mx-auto lg:mt-20">
        <span className="block mb-4 md:absolute top-0 right-0 text-gray-500 lg:text-lg font-semibold uppercase tracking-widest">Develop your skill</span>
        <h2 className="mb-6 md:mb-0 text-2xl sm:text-5xl md:text-6xl text-white uppercase font-heading">
          <span>Take care</span>
          <span className="block">of your performance</span>
          <span className="block text-right">every day</span>
        </h2>
        <a className="inline-flex items-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200" href="#">
          <svg className="mr-3" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black"></path>
          </svg>
          <span className="text-sm uppercase font-heading">Start for free</span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Header