const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-slate-200 dark:bg-slate-900 overflow-hidden">
    <h1 className="text-white text-9xl text-center dancing-font">Les Activités</h1>
    <div className="container mx-auto px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="mt-6 mb-20 text-2xl text-white uppercase font-heading">Take quick action that increases your brand's regular profit.</h2>
      </div>
      <div className="flex flex-wrap -mx-4 mb-20">
        <div className="w-full px-4 mb-6">
          <a className="block group" href="#">
            <div className="h-full px-8 md:px-24 py-32 md:py-52 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/activity1.jpg')" }}>
              <div className="max-w-xl mb-6 lg:mb-0">
                <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                <h2 className="mt-2 text-2xl text-white font-heading group-hover:underline">Take quick action that increases your brand's regular profit.</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
          <a className="block group" href="#">
            <img className="h-80 md:h-112 w-full object-cover" src="src/assets/activity2.jpg" alt=""/>
            <div className="relative -mt-20 px-10">
              <div className="relative">
                <div className="max-w-xs mb-5">
                  <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                  <h3 className="text-2xl text-white font-heading group-hover:underline">Quick contact to solve problems</h3>
                </div>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
          <a className="block group" href="#">
            <img className="h-80 md:h-112 w-full object-cover" src="src/assets/activity3.jpg" alt=""/>
            <div className="relative -mt-20 px-10">
              <div className="relative">
                <div className="max-w-xs mb-5">
                  <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                  <h3 className="text-2xl text-white font-heading group-hover:underline">Donec nec cursus nulla, quis aliquet ipsum</h3>
                </div>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat.</p>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <a className="block group" href="#">
            <img className="h-80 md:h-112 w-full object-cover" src="src/assets/activity4.jpg" alt=""/>
            <div className="relative -mt-20 px-10">
              <div className="relative">
                <div className="max-w-xs mb-5">
                  <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                  <h3 className="text-2xl text-white font-heading group-hover:underline">In suscipit tellus convallis scelerisque</h3>
                </div>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Activities