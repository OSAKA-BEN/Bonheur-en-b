const Footer = () => {
  return (
<section className="bg-black">
    <div className="pt-20 pb-8 md:pb-20 border-t border-b border-slate-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <a className="inline-block text-xl text-white font-medium font-heading mb-8 lg:mb-0" href="#">
          <img className="h-8" src="boldui-assets/logo/logo-boldui-light.svg" alt="" width="auto"/>
          </a>
          <div className="w-full lg:w-auto">
          <ul className="flex flex-wrap">
            <li className="w-full sm:w-auto mb-4 md:mb-0 sm:mr-6 md:mr-16"><a className="text-sm text-white uppercase hover:underline font-heading" href="#">Company</a></li>
            <li className="w-full sm:w-auto mb-4 md:mb-0 sm:mr-6 md:mr-16"><a className="text-sm text-white uppercase hover:underline font-heading" href="#">Pages</a></li>
            <li className="w-full sm:w-auto mb-4 md:mb-0 sm:mr-6 md:mr-16"><a className="text-sm text-white uppercase hover:underline font-heading" href="#">Legal</a></li>
            <li className="w-full sm:w-auto"><a className="text-sm text-white uppercase hover:underline font-heading" href="#">Resources</a></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-8 md:pt-20 pb-20 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <div className="flex flex-wrap">
              <a className="mr-8" href="#">
              <img src="boldui-assets/brands/small-logos/facebook.svg" alt=""/>
              </a>
              <a className="mr-8" href="#">
              <img src="boldui-assets/brands/small-logos/twitter.svg" alt=""/>
              </a>
              <a className="mr-8" href="#">
              <img src="boldui-assets/brands/small-logos/instagram.svg" alt=""/>
              </a>
              <a className="mr-8" href="#">
              <img src="boldui-assets/brands/small-logos/github.svg" alt=""/>
              </a>
              <a href="#">
              <img src="boldui-assets/brands/small-logos/linkedin.svg" alt=""/>
              </a>
            </div>
          </div>
          <p className="text-gray-500">All rights reserved © BoldUI 2021</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer