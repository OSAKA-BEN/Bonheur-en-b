import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import FeatureCard from "./FeatureCard";
import { useState } from "react";

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
  lat: 50.25001883425659, lng: 1.612555275691095
}

const deGabrielle = { lat: 50.220517160744436, lng: 1.6186063767399088};
const closNormand = { lat: 50.28076483585526, lng: 1.5854827544510293};
const perleDeSel = { lat: 50.21714577949911, lng: 1.6231911256118854};
const mouetteRieuse = { lat: 50.23908278785516, lng: 1.6170857372585838};

const WhereToFind = () => {
  const [activeMarker, setActiveMarker] =  useState(null);

  const addresses = [
    {
      title: '13 de Gabrielle',
      content: '13 Rue Jacques Dharcourt, 80550 Le Crotoy',
      link: 'https://www.google.com/maps?q=13+Rue+Jacques+Dharcourt,80550+Le+Crotoy'
    },
    {
      title: 'Le Clos Normand',
      content: '24 Rue des écoles, 80120 St Quentin en Tourmont',
      link: 'https://www.google.com/maps?q=24+Rue+des+écoles,80120+St+Quentin+en+Tourmont'
    },
    {
      title: 'Perle de Sel',
      content: '10 Rue Pasteur, 80550 Le Crotoy',
      link: 'https://www.google.com/maps?q=10+Rue+pasteur,80550+Le+Crotoy'
    },
    {
      title: 'La Mouette Rieuse',
      content: '404 Rue des Mouettes, 80550 Le Crotoy',
      link: 'https://www.google.com/maps?q=404+Rue+des+Mouettes,80550+Le+Crotoy'
    },
    {
      title: 'La Grèbe Huppée',
      content: '404 Rue des Mouettes, 80550 Le Crotoy',
      link: 'https://www.google.com/maps?q=404+Rue+des+Mouettes,80550+Le+Crotoy'
    },
  ];

  return (
    <section id="location" className="relative bg-slate-200 dark:bg-slate-900 overflow-x-hidden">
      <h1 className="text-black dark:text-white text-9xl text-center dancing-font">Pour nous trouver</h1>
      <p className="mb-8 text-lg text-gray-500 text-center">Venez découvrir la Baie de Somme à travers nos différents gîtes.</p>

      <div className="container mx-auto px-4 py-16">

      <div className="w-full mb-10">
        <div className="flex items-center justify-center mb-8">
          {/* Section Train */}
          <div className="flex flex-col items-center mx-4">
            <h2 className="text-center xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">Train</h2>
            <p className="text-lg text-gray-500 text-center">Entre 12 et 20 minutes de la gare de Noyelles Sur Mer</p>
            <p className="text-lg text-gray-500 text-center">Entre 26 et 30 minutes de la gare d&#39;Abbeville</p>
          </div>

          {/* Section Voiture */}
          <div className="flex flex-col items-center mx-4">
            <h2 className="text-center xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">Voiture</h2>
            <p className="text-lg text-gray-500 text-center">A 3h de Bruxelles</p>
            <p className="text-lg text-gray-500 text-center">A 2h30 de Paris Centre</p>
          </div>
        </div>
      </div>

        <div className="w-full h-[700px]">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
              options={{
                styles: customMapStyle,
              }}
            >
              {activeMarker === 0 && <Marker position={deGabrielle} />}
              {activeMarker === 1 && <Marker position={closNormand} />}
              {activeMarker === 2 && <Marker position={perleDeSel} />}
              {activeMarker === 3 && <Marker position={mouetteRieuse} />}
              {activeMarker === 4 && <Marker position={mouetteRieuse} />}
            </GoogleMap>
          </LoadScript>
        </div>
        <div className={`mt-8 flex`} >
          {addresses.map((address, index) => (
            <FeatureCard
              key={index}
              title={address.title}
              content={address.content}
              link={address.link}
              onHover={() => setActiveMarker(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereToFind;

