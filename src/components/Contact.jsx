import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const mailtoLink = `mailto:your-email@example.com?subject=Message from ${formData.name}&body=${formData.message}`;

  return (
    <section className="relative py-32 bg-black bg-cover bg-no-repeat" style={{ backgroundImage: "url('src/assets/phoque-baie-de-somme.jpg')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-md">
          <h2 className="mb-4 text-2xl text-white uppercase font-heading">Contactez nous</h2>
          <p className="mb-6 text-lg text-gray-400">Contactez nous directement par mail pour plus d&#39;informations et nous vous ferons un retour le plus rapidement posible.</p>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 py-4 px-6 bg-black rounded-md border text-white outline-none placeholder-white"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mb-4 py-4 px-6 bg-black rounded-md border text-white outline-none placeholder-white"
            />
            <a href={mailtoLink} className="inline-flex items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200 text-sm font-medium font-heading">
              <svg className="mr-3" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="black"></path>
              </svg>
              Envoyer
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
