import { GoogleMap, InfoWindow } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
import React, { useState } from "react";

// Array of bar data with country, football club, and coordinates
const bars = [
  {
    country: "Australia",
    club: "Arsenal",
    lat: -33.885055433597,
    lng: 151.20966156719123,
  },
  {
    country: "Australia",
    club: "Manchester United",
    lat: -34.94636965495918,
    lng: 138.62657079153266,
  },
  {
    country: "Canada",
    club: "Liverpool",
    lat: 49.28637807745695,
    lng: -123.11695651719553,
  },
  {
    country: "Germany",
    club: "Bayern Munich",
    lat: 48.175002206190136,
    lng: 11.592748746031473,
  },
  {
    country: "Japan",
    club: "Liverpool",
    lat: 35.64857860594483,
    lng: 139.71303475978445,
  },
  {
    country: "South Korea",
    club: "Manchester United",
    lat: 53.4631,
    lng: -2.2913,
  },
  {
    country: "South Korea",
    club: "Tottenham Hotspurs",
    lat: 37.552079094148446,
    lng: 126.9226752350085,
  },
  {
    country: "South Korea",
    club: "Liverpool",
    lat: 37.56004882603966,
    lng: 126.92511388465444,
  },
  {
    country: "United States of America",
    club: "Arsenal",
    lat: 40.74496672417892,
    lng: -73.99249257407631,
  },
  {
    country: "United States of America",
    club: "Arsenal",
    lat: 32.74202567965132,
    lng: -117.1289996550291,
  },
  {
    country: "United States of America",
    club: "Liverpool",
    lat: 34.007969428759544,
    lng: -118.41245218835955,
  },
  {
    country: "United States of America",
    club: "Manchester United",
    lat: 39.750624531403766,
    lng: -104.9853437709032,
  },

  // Add more bar data as needed
];

const mapOptions = {
  mapId: "cb21e6acbb31cd1",
  scrollwheel: true, // Enable scroll wheel zooming
  minZoom: 2,
  maxZoom: 20,
};

function MapComponent({
  center,
  zoom,
  selectedCountry,
  selectedClub,
  searchClicked,
}) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };
  return (
    <GoogleMap
      mapContainerStyle={{ width: "75%", height: "600px", margin: "0 auto" }}
      mapid="map"
      center={center}
      zoom={zoom}
      options={mapOptions}
    >
      {searchClicked &&
        bars.map((bar, index) => {
          if (
            (!selectedCountry || bar.country === selectedCountry) &&
            (!selectedClub || bar.club === selectedClub)
          ) {
            console.log(`Creating marker for: ${bar.country} - ${bar.club}`);
            return (
              <MarkerF
                key={index}
                position={{ lat: bar.lat, lng: bar.lng }}
                onClick={() => onMarkerClick(bar)}
              >
                {selectedMarker === bar && (
                  <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
                    <div>
                      <h4>{`${bar.country} - ${bar.club}`}</h4>
                    </div>
                  </InfoWindow>
                )}
              </MarkerF>
            );
          }
          return null;
        })}
    </GoogleMap>
  );
}

export default MapComponent;
