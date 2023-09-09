const Footer = () => {
  return (
  <section className="bg-white dark:bg-black overflow-x-hidden">
    <div className="border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-10 md:mb-0">
          <div className="w-full md:w-2/6 md:border-r md:border-gray-800 px-4">
            <div className="max-w-xs mx-auto py-20">
              <a className="inline-block text-xl text-black dark:text-white font-medium font-heading mb-8 md:mb-32" href="#">
                <img className="h-8" src="boldui-assets/logo/logo-boldui-light.svg" alt="" width="auto"/>
              </a>
              <p className="max-w-xs text-black dark:text-white uppercase font-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="w-full md:w-4/6 px-4">
            <div className="md:py-20 px-8 lg:pl-20 lg:pr-10">
              <div className="flex flex-wrap -mx-4">
                <div className="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                  <h3 className="mb-8 text-sm text-black dark:text-white uppercase font-heading">Company</h3>
                  <ul>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Careers</a></li>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Press</a></li>
                    <li><a className="text-gray-500 hover:text-gray-400" href="#">Blog</a></li>
                  </ul>
                </div>
                <div className="w-1/2 md:w-1/4 px-4 mb-12 md:mb-0">
                  <h3 className="mb-8 text-sm text-black dark:text-white uppercase font-heading">Pages</h3>
                  <ul>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Login</a></li>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Register</a></li>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Add list</a></li>
                    <li><a className="text-gray-500 hover:text-gray-400" href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="w-1/2 md:w-1/4 px-4">
                  <h3 className="mb-8 text-sm text-black dark:text-white uppercase font-heading">Legal</h3>
                  <ul>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Terms</a></li>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">About Us</a></li>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Team</a></li>
                    <li><a className="text-gray-500 hover:text-gray-400" href="#">Privacy</a></li>
                  </ul>
                </div>
                <div className="w-1/2 md:w-1/4 px-4">
                  <h3 className="mb-8 text-sm text-black dark:text-white uppercase font-heading">Resources</h3>
                  <ul>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Blog</a></li>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Service</a></li>
                    <li className="mb-8"><a className="text-gray-500 hover:text-gray-400" href="#">Product</a></li>
                    <li><a className="text-gray-500 hover:text-gray-400" href="#">Pricing</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <p className="mb-8 md:mb-0 text-gray-500">Tout droits réservés © Les Bonheur en B 2023</p>
          <div className="flex w-full md:w-auto">
            <a className="mr-8" href="https://www.facebook.com/groups/470717321340382/" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/facebook.svg" alt="facebook"/>
            </a>
            <a className="mr-8" href="#">
              <img src="src/assets/twitter.svg" alt="twitter"/>
            </a>
            <a className="mr-8" href="#">
              <img src="src/assets/instagram.svg" alt="instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/guy-catteau-35604493/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/linkedin.svg" alt="linkedin"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer