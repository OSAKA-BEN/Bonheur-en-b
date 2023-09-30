import { useState } from "react";
import backgroundImgContact from '../assets/background-papierpeint.jpg';


const Contact = () => {

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
    <section id="contacts" className="min-h-screen relative bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: `url(${backgroundImgContact})` }}>
      <div className="py-20 md:py-40 flex flex-col gap-10 items-center relative content">
        <div className="relative flex items-center justify-center">
          <p className={`font-bold poppins-font absolute text-[90px] md:text-[180px] lg:text-[280px] mx-auto z-[0] pointer-events-none font-stroke-light`} data-aos="fade-up" data-aos-delay="200">Contact</p>
          <h2 className={`dancing-font text-2xl md:text-6xl font-bold z-[1] text-black`} data-aos="fade-up" data-aos-delay="300">Contactez nous</h2>
        </div>

        <div className="h-2 w-2 mb-6 mx-auto bg-pink-500 rounded-sm relative flex items-center before:content-[''] before:w-[150px] sm:before:w-[250px] lg:before:w-[300px] before:h-[1px] before:bg-black before:absolute before:right-5 after:content-[''] after:w-[150px] sm:after:w-[250px] lg:after:w-[300px] after:h-[1px] after:bg-black after:absolute after:left-5"></div>

          <form className="py-5 w-full lg:max-w-screen-lg flex flex-col items-center gap-10" onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-10 w-full px-4">
              {/* Left Side Inputs */}
              <div className="grid gap-5">
                <input name="prenom" type="text" placeholder="Prénom" value={formData.prenom} onChange={handleChange} className="bg-[#0b0b0b] bg-opacity-80 placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
                {errors.prenom && <p className="text-red-500">{errors.prenom}</p>}
                
                <input name="nom" type="text" placeholder="Nom" value={formData.nom} onChange={handleChange} className="bg-[#0b0b0b] bg-opacity-80 placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
                {errors.nom && <p className="text-red-500">{errors.nom}</p>}
                
                <input name="telephone" type="tel" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} className="bg-[#0b0b0b] bg-opacity-80 placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
                {errors.telephone && <p className="text-red-500">{errors.telephone}</p>}
                
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="bg-[#0b0b0b] bg-opacity-80 placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"/>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              {/* Right Side Textarea */}
              <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows="5" className="bg-[#0b0b0b] bg-opacity-80 placeholder-white/50 text-white py-4 px-4 rounded-md focus:outline-none"></textarea>
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
