import { useState } from 'react';
import { gitesData } from '../data/gites';

const Gites = () => {
  const [activeGiteIndex, setActiveGiteIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveGiteIndex((prevIndex) => (prevIndex === 0 ? gitesData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveGiteIndex((prevIndex) => (prevIndex === gitesData.length - 1 ? 0 : prevIndex + 1));
  };

  const activeGite = gitesData[activeGiteIndex];

  return (
    <section id="gites" className="py-4 z-0 bg-black relative">
      <h1 className="text-white text-9xl text-center dancing-font">Nos Gîtes</h1>
      <h2 className="text-white text-4xl text-center dancing-font">Simplement pour vous</h2>
      <p className="text-white text-center text-lg italic">
        Que vous voyagiez seul ou en groupe, il existe forcément un gîte pour vous. Ils sont tous équipés du nécessaire et la
        décoration parle d&#39;elle-même.
      </p>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-wrap py-12">
          <div className="flex justify-between w-full mb-4">
            <button onClick={handlePrevClick} className="bg-[#FFEC3E] rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={handleNextClick} className="bg-[#FFEC3E] rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-1/2 md:py-12">
            <div className="flex flex-wrap items-center">
              <div className="flex justify-between w-full mb-4">
              </div>
              <div className="w-full max-w-md mb-8 text-center">
                <h2 className="mb-4 text-6xl text-white font-heading dancing-font">{activeGite.name}</h2>
                <h3 className="mb-4 text-2xl text-white font-heading">{activeGite.subtitle}</h3>
                <p className="text-white">{activeGite.description}</p>
                <ul className="text-white">
                  {activeGite.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="text-white">{activeGite.price}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex justify-center items-center z-10 h-96 md:h-full w-full md:w-auto">
              <img
                className="h-full w-full object-contain"
                src={activeGite.imageUrl}
                alt={activeGite.name}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gites;
