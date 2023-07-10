const Activities = () => {
  return (
  <section id="activities" className="z-0">
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="h-full py-52 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/activity1.jpg')" }}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="max-w-xl mb-6 lg:mb-0">
                <span className="font-semibold text-md text-blue-500 bg-black/80 p-2">10 jun 2021 | 19:40</span>
                <h2 className="mt-2 text-3xl text-white font-heading">Take quick action that increases your brand regular profit.</h2>
                <p className="italic"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
              </div>
              <a className="inline-flex w-full md:w-auto items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200" href="#">
                <svg className="text-black mr-3" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="currentColor"></path>
                </svg>
                <span className="text-sm font-heading">Read article</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <a className="flex h-full px-4 py-40 items-center justify-center bg-cover bg-center bg-no-repeat" href="#" style={{ backgroundImage: "url('src/assets/activity2.jpg')" }}>
          <div className="relative max-w-xs px-10 text-center">
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64" src="boldui-assets/elements/ellipse-dark.svg" alt=""/>
            <div className="relative">
              <span className="font-semibold text-xs text-blue-500 bg-black/80 p-2">10 jun 2021 | 19:40</span>
              <h3 className="mt-2 text-2xl text-white font-heading">Quick problem&nbsp;-&nbsp;solving contact</h3>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full lg:w-1/3">
        <a className="flex px-4 py-40 items-center justify-center bg-cover bg-center bg-no-repeat" href="#" style={{ backgroundImage: "url('src/assets/activity3.jpg')" }}>
          <div className="relative max-w-xs px-10 text-center">
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64" src="boldui-assets/elements/ellipse-dark.svg" alt=""/>
            <div className="relative">
              <span className="font-semibold text-xs text-blue-500 bg-black/80 p-2">10 jun 2021 | 19:40</span>
              <h3 className="mt-2 text-2xl text-white font-heading">Donec nec cursus nulla, quis aliquet ipsum</h3>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full lg:w-1/3">
        <a className="flex px-4 py-40 items-center justify-center bg-cover bg-center bg-no-repeat" href="#" style={{ backgroundImage: "url('src/assets/activity4.jpg')" }}>
          <div className="relative max-w-xs px-10 text-center">
            <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64" src="boldui-assets/elements/ellipse-dark.svg" alt=""/>
            <div className="relative">
              <span className="font-semibold text-xs text-blue-500 bg-black/80 p-2">10 jun 2021 | 19:40</span>
              <h3 className="mt-2 text-2xl text-white font-heading">In suscipit tellus convallis scelerisque consequat</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  )
}

export default Activities