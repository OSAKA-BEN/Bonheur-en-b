import { gitesData } from '../data/gites';

const Gites = () => {

  return (
    <section id="gites" className="py-4 z-0 bg-[#e9e9e9] dark:bg-black  relative">
      <h1 className="text-black dark:text-white text-9xl text-center dancing-font">Nos Gîtes</h1>
      <h2 className="text-black dark:text-white text-4xl text-center dancing-font">Simplement pour vous</h2>
      <p className="text-black dark:text-white text-center text-lg italic">
        Que vous voyagiez seul ou en groupe, il existe forcément un gîte pour vous. Ils sont tous équipés du nécessaire et la
        décoration parle d&#39;elle-même.
      </p>

      <div className="relative container mx-auto px-4">
        {gitesData.map((gite, index) => (
          <div id={`gite-${gite.id}`} key={index} className="flex flex-wrap py-12">
            <div className="w-full md:w-1/2 md:py-12">
              <div className="w-full max-w-md mb-8 text-center">
                <h2 className="mb-4 text-6xl dark:text-white text-black font-heading dancing-font">{gite.name}</h2>
                <h3 className="mb-4 text-2xl dark:text-white text-black font-heading">{gite.subtitle}</h3>
                <p className="mb-4 dark:text-white text-black">{gite.description}</p>
                <ul className="dark:text-white text-black">
                  {gite.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <p className="dark:text-white text-black">{gite.price}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                className="h-full w-full object-contain"
                src={gite.imageUrl}
                alt={gite.name}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Gites;
