import { useContext, useState } from "react";
import { activitiesData } from '../data/activities';
import DarkModeContext from "../DarkModeContext";

const Activities = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [activeCategories, setActiveCategories] = useState([]);

  const toggleCategory = (category) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(prev => prev.filter(cat => cat !== category));
    } else {
      setActiveCategories(prev => [...prev, category]);
    }
  };

  const filteredActivities = activitiesData.filter(activity => 
    activeCategories.length === 0 || activeCategories.includes(activity.category)
  );

  const categoryList = ["Restauration", "Randonnée", "Activités", "Nature", "Découverte"];
  
  const getRandomActivity = () => {
    const randomIndex = Math.floor(Math.random() * activitiesData.length);
    return activitiesData[randomIndex];
  };

  const truncateDescription = (description, length = 50) => {
    if (description.length <= length) return description;
    return description.slice(0, length) + '...';
}
  
  const [mainActivity, setMainActivity] = useState(getRandomActivity());

  return (
    <section id="activities" className={`py-4 z-0 relative ${darkMode ? 'bg-[#0c0d0c] ' : 'bg-slate-200'}`}>
    <div className="py-20 md:py-40 flex flex-col gap-10 items-center relative mx-4">
      <div className="relative flex items-center justify-center">
        <p className={`font-bold poppins-font absolute text-[80px] md:text-[160px] lg:text-[180px] xl:text-[250px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">Activités</p>
        <h2 className={`dancing-font text-2xl md:text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Ressourcez-vous</h2>
      </div>

      <div className="h-2 w-2 mb-6 mx-auto bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[150px] sm:before:w-[250px] lg:before:w-[300px] before:h-[1px] before:bg-white/30 before:absolute before:right-5 after:content-[''] after:w-[150px] sm:after:w-[250px] lg:after:w-[300px] after:h-[1px] after:bg-white/30 after:absolute after:left-5"></div>

      <p className={`uppercase tracking-wider text-center ${darkMode ? '' : 'text-black'} lg:text-2xl`} data-aos="fade-up" data-aos-delay="400">Profitez des paysages magnifiques et des nombreuses activités à proximité.</p>

      <div className="flex flex-wrap justify-center gap-4">
        {categoryList.map(category => (
          <span 
            key={category}
            className={`border-2 border-[#242422] ${activeCategories.includes(category) ? 'bg-pink-500' : 'bg-transparent'} rounded-lg px-2 cursor-pointer`} 
            onClick={() => toggleCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-3/4 px-4 mb-12 lg:mb-0">
          <div className="block group w-full">
            <img className="block w-full h-full object-cover mb-5 rounded-lg" src={mainActivity.imageUrl} alt={mainActivity.title}/>
            <span className="inline-block mb-2 border-2 border-[#242422] bg-pink-500 rounded-lg px-2">{mainActivity.category}</span>
            <h4 className="text-3xl text-white font-semibold group-hover:text-orange-900 mb-5">
              <a href={`https://www.google.com/search?q=${mainActivity.title} ${mainActivity.location}`} target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">{mainActivity.title}</a>
            </h4>
            <p className="w-full text-lg text-justify">{mainActivity.description}</p>
          </div>
        </div>

        <div className="w-full h-screen lg:w-1/4 px-4 overflow-y-auto">
          {filteredActivities.filter(activity => activity !== mainActivity).map((activity, index) => (
            <div key={index} className="flex flex-col md:flex-row group mb-8 cursor-pointer" onClick={() => setMainActivity(activity)}>
              <img className="w-full md:w-48 h-48 rounded-lg mb-4 md:mb-0" src={activity.imageUrl} alt={activity.title}/>
              <div className="mt-4 md:mt-0 md:ml-6 pt-2">
                <span className="inline-block mb-2 border-2 border-[#242422] bg-pink-500 rounded-lg px-2">{activity.category}</span>
                <h4 className="uppercase text-xl text-white font-semibold group-hover:text-orange-900">{activity.title}</h4>
                <p>{truncateDescription(activity.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  </section>
  )
}

export default Activities