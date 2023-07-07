const Partners = () => {
  return (
  <section className="py-20 bg-black">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <div className="relative h-64 w-full flex items-center justify-center">
            <img className="absolute top-0 left-0 h-full w-full object-contain" src="boldui-assets/elements/ellipse.svg" alt=""/>
            <img className="h-6" src="boldui-assets/brands/logo-clouds/slack.svg" alt=""/>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <div className="relative h-64 w-full flex items-center justify-center">
            <img className="absolute top-0 left-0 h-full w-full object-contain" src="boldui-assets/elements/ellipse.svg" alt=""/>
            <img className="h-6" src="boldui-assets/brands/logo-clouds/spotify.svg" alt=""/>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <div className="relative h-64 w-full flex items-center justify-center">
            <img className="absolute top-0 left-0 h-full w-full object-contain" src="boldui-assets/elements/ellipse.svg" alt=""/>
            <img className="h-6" src="boldui-assets/brands/logo-clouds/dropbox.svg" alt=""/>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <div className="relative h-64 w-full flex items-center justify-center">
            <img className="absolute top-0 left-0 h-full w-full object-contain" src="boldui-assets/elements/ellipse.svg" alt=""/>
            <img className="h-6" src="boldui-assets/brands/logo-clouds/stripe.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Partners