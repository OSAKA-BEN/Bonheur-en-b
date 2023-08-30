import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "100%",
  width: "100%",
};

const customMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

const defaultCenter = {
  lat: 50.20605338864312, lng: 1.6298076545309912
}

const location1 = { lat: 50.19703702425432, lng: 1.661961100486396};
const location2 = { lat: 50.186666362562605, lng: 1.5992504723818368};

const WhereToFind = () => {
  return (
    <section id="contacts" className="relative bg-black overflow-x-hidden">
      <h1 className="text-white text-9xl text-center w-1/2 dancing-font">Localisation</h1>

      <div className="container mx-auto px-4 py-32">
        <div className="w-full md:w-1/2 xl:w-full max-w-sm mb-10 md:mb-0">
          <h2 className="mb-4 text-2xl text-white uppercase font-heading">Nos adresses</h2>
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
              options={{
                styles: customMapStyle,
              }}
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

