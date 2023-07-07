const WhereToFind = () => {
  return (
  <section className="relative py-20 md:py-32 bg-black overflow-x-hidden">
    <div className="container mx-auto px-4">
      <div className="w-full md:w-1/2 xl:w-full max-w-xs mb-10 md:mb-0">
        <h2 className="mb-4 text-2xl text-white uppercase font-heading">Get questions?</h2>
        <p className="mb-8 text-lg text-gray-500">Take a big step forward in growing your business with this great tool.</p>
        <div>
          <h3 className="text-lg text-blue-500">Address</h3>
          <p className="text-lg text-white">1686 Geraldine Lane</p>
          <p className="mb-6 text-lg text-white">New York, NY 10013</p>
          <h3 className="text-lg text-blue-500">Contacts</h3>
          <a className="inline-block mb-8 text-lg text-white" href="mailto:hello@shuffle.dev">hello@shuffle.dev</a>
        </div>
      </div>
      <img className="md:hidden h-64 w-full object-cover" src="boldui-assets/images/map2.png" alt=""/>
    </div>
    <div className="hidden md:block absolute top-0 right-0 md:w-1/2 lg:w-3/5 lg:max-w-4xl h-full border-l">
      <img className="h-full w-full object-cover" src="boldui-assets/images/map2.png" alt=""/>
    </div>
  </section>
  )
}

export default WhereToFind