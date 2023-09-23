import { useContext, useState } from "react";
import DarkModeContext from '../DarkModeContext';


const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let formErrors = {};

    // Check each field
    for (let field in formData) {
      if (!formData[field].trim()) {
        formErrors[field] = 'Ce champ est obligatoire';
      }
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // All fields are filled, you can send the email or do other actions
      window.location.href = `mailto:lesbonheursenb@gmail.com?subject=Message from ${formData.nom} ${formData.prenom}&body=${formData.message}`;
    }
  };

  return (
    <section id="contacts" className="relative bg-fixed bg-slate-200 dark:bg-slate-900 overflow-hidden">
      <div className="py-20 flex flex-col gap-10 items-center relative content">
        <div className="relative flex items-center justify-center">
          <p className={`font-bold absolute text-[280px] mx-auto z-[0] pointer-events-none ${darkMode ? 'font-stroke-dark' : 'font-stroke-light'}`} data-aos="fade-up" data-aos-delay="200">Contact</p>
          <h2 className={`dancing-font text-6xl font-bold z-[1] ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="300">Contactez nous</h2>
        </div>

        <div className="h-2 w-2 bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[300px] before:h-[1px] before:bg-white/10 before:absolute before:right-5 after:content-[''] after:w-[300px] after:h-[1px] after:bg-white/10 after:absolute after:left-5"></div>
        
        <form className="py-5 w-full lg:max-w-screen-lg flex flex-col items-center gap-10" onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-10 w-full">
            {/* Left Side Inputs */}
            <div className="grid gap-5">
              <input name="prenom" type="text" placeholder="Prénom" value={formData.prenom} onChange={handleChange} className="bg-[#0b0b0b] placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
              {errors.prenom && <p className="text-red-500">{errors.prenom}</p>}
              
              <input name="nom" type="text" placeholder="Nom" value={formData.nom} onChange={handleChange} className="bg-[#0b0b0b] placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
              {errors.nom && <p className="text-red-500">{errors.nom}</p>}
              
              <input name="telephone" type="tel" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} className="bg-[#0b0b0b] placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
              {errors.telephone && <p className="text-red-500">{errors.telephone}</p>}
              
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="bg-[#0b0b0b] placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            {/* Right Side Textarea */}
            <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows="5" className="bg-[#0b0b0b] placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="py-2 px-4 hover:bg-pink-500 hover:border-black hover:text-black tracking-widest uppercase text-white font-light text-sm rounded-sm cursor-pointer w-fit transition-all bg-black border-[1px] border-white/30">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
