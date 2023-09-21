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
    <section id="contacts" className="relative pb-32 bg-black bg-cover bg-no-repeat" style={{ backgroundImage: "url('src/assets/phoque-baie-de-somme.jpg')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-2">
        <h1 className="pt-8 text-white text-9xl text-center dancing-font">Contacts</h1>
        <div className="max-w-lg py-16">
          <h2 className="mb-4 text-2xl text-white uppercase font-heading">Contactez nous</h2>
          <p className="mb-6 text-lg text-gray-400">Vous souhaitez plus d&#39;informations sur les Bonheurs en B ?</p>
          <p className="mb-6 text-lg text-gray-400 text-center">N&#39;hésitez pas à remplir le formulaire de contact ou appelez nous  au <span className="font-bold">(+33) 6.29.06.85.08</span> ou écrivez nous directement par email à l&#39;adresse suivante: <span className="font-bold">lesbonheursenb@gmail.com</span> en remplissant le formulaire ci-dessous. </p>
          <form action="" onSubmit={handleSubmit}>
            <input
              required
              name="prenom"
              type="text"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full mb-4 py-4 px-6 bg-black rounded-md border text-white outline-none placeholder-gray-500"
            />
            {errors.prenom && <p className="text-red-500">{errors.prenom}</p>}
            <input
              required
              name="nom"
              type="text"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full mb-4 py-4 px-6 bg-black rounded-md border text-white outline-none placeholder-gray-500"
            />
            {errors.nom && <p className="text-red-500">{errors.nom}</p>}
            <input
              required
              name="telephone"
              type="tel"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full mb-4 py-4 px-6 bg-black rounded-md border text-white outline-none placeholder-gray-500"
            />
            {errors.telephone && <p className="text-red-500">{errors.telephone}</p>}
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 py-4 px-6 bg-black rounded-md border text-white outline-none placeholder-gray-500"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <textarea
              required
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mb-4 py-4 px-6 bg-black rounded-md border text-white outline-none placeholder-gray-500"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
            <div className="hidden lg:flex lg:flex-shrink-0 items-center">
              <button className={`btn btn-outline ${darkMode ? 'text-white bg-black hover:bg-white' : 'text-black bg-white hover:bg-black hover:text-white'}`}>Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
