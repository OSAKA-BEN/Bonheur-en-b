import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "100%",
  width: "100%",
};

const defaultCenter = {
  lat: 50.20605338864312, lng: 1.6298076545309912
}

const location1 = { lat: 50.19703702425432, lng: 1.661961100486396};
const location2 = { lat: 50.186666362562605, lng: 1.5992504723818368};

const WhereToFind = () => {
  return (
    <section id="contacts" className="relative py-20 md:py-32 bg-black overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="w-full md:w-1/2 xl:w-full max-w-xs mb-10 md:mb-0">
          <h2 className="mb-4 text-2xl text-white uppercase font-heading">Localisation</h2>
          <p className="mb-8 text-lg text-gray-500">Venez découvrir la Baie de Somme à travers nos différents gîtes.</p>
          <div>
            <h3 className="text-lg text-blue-500">Adresses</h3>
            <p className="text-lg text-white">13 de Gabrielle</p>
            <p className="text-lg text-white">13 Rue Jacques Dharcourt</p>
            <p className="mb-6 text-lg text-white">80550 Le Crotoy</p>
            <br />
            <p className="text-lg text-white">Le Clos Normand</p>
            <p className="text-lg text-white">24 Rue des écoles</p>
            <p className="mb-6 text-lg text-white">80120 St Quentin en Tourmont</p>
            <br />
            <p className="text-lg text-white">Perle de Sel</p>
            <p className="text-lg text-white">10 Rue Pasteur</p>
            <p className="mb-6 text-lg text-white">80550 Le Crotoy</p>
            <br />
            <p className="text-lg text-white">La Mouette Rieuse et la Grèbe Huppée</p>
            <p className="text-lg text-white">404 Rue des Mouettes</p>
            <p className="mb-6 text-lg text-white">80550 Le Crotoy</p>
          </div>
        </div>
        <div className="hidden md:block absolute top-0 right-0 md:w-1/2 lg:w-3/5 lg:max-w-4xl h-full border-l">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            >
              <Marker position={location1} />
              <Marker position={location2} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default WhereToFind;
