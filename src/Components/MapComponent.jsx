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
    country: "Hong Kong",
    club: "Liverpool",
    barName: "The Lockhart Bar",
    link: "https://www.google.com/maps/place/The+Lockhart+Bar/@22.2784273,114.1705255,16.75z/data=!4m6!3m5!1s0x340401b5e93e97e3:0xdf81c65e6cf958b1!8m2!3d22.2779776!4d114.1718072!16s%2Fg%2F11fj_01ttq?entry=ttu",
    lat: 22.27824430610633,
    lng: 114.17178226129263,
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
    country: "Spain",
    club: "Real Madrid",
    barName: "Peña Madridista Capote and Montera",
    link: "https://goo.gl/maps/whAtgi8avqviNWuJ8",
    lat: 40.38152938866714,
    lng: -3.67015242330952,
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
    club: "Arsenal",
    barName: "The Cannon",
    link: "https://goo.gl/maps/5Y21QnRZ4aEN4Lkt7",
    lat: 41.309374702765105,
    lng: -72.93693976658136,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Edelweiss Biergarten",
    link: "https://goo.gl/maps/CfAPYjKP2Urxij9j6",
    lat: 33.64065597498165,
    lng: -112.02288748676752,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Tom's Watch Bar",
    link: "https://goo.gl/maps/BdjmEy17Ci2Z6KXr7",
    lat: 34.04401333561921,
    lng: -118.26509074086474,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Fritz & Franz Bierhaus",
    link: "https://goo.gl/maps/SA5miNtBGN5ywPmV8",
    lat: 25.751371448970257,
    lng: -80.25651863070934,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Bayern Brewing, Inc.",
    link: "https://goo.gl/maps/8gMhEBQnTq3HZsfN6",
    lat: 46.87286956985399,
    lng: -114.01996322327994,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Bärchen Beer Garden",
    link: "https://goo.gl/maps/v1Jh2XH9jkC5WK39A",
    lat: 41.28622911178625,
    lng: -96.00873651791261,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Sobremesa",
    link: "https://goo.gl/maps/uUqm7fiTDLmEmQfs5",
    lat: 35.12289897684169,
    lng: -106.70212547724793,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Prost Grill & Garten",
    link: "https://goo.gl/maps/tAEP5r2g2ms9azJB7",
    lat: 40.72473498319739,
    lng: -73.63383985027117,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Zum Stammtisch",
    link: "https://goo.gl/maps/onKUx2k1XQU8y8h27",
    lat: 40.702029556151025,
    lng: -73.88115984623094,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "A Touch of Germany",
    link: "https://goo.gl/maps/R4KPXj3mr9gu9zP26",
    lat: 31.766151986419782,
    lng: -106.3633584177239,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Siegi's Sausage Factory",
    link: "https://goo.gl/maps/eHSjwcWVvUPYJSxV7",
    lat: 36.045610919917166,
    lng: -95.9041997714235,
  },
  {
    country: "United States of America",
    club: "Bayern Munich",
    barName: "Old German Beer Hall",
    link: "https://goo.gl/maps/9fsVLj7USa7pg4sbA",
    lat: 43.0433858413462,
    lng: -87.91453944048278,
  },
  {
    country: "United States of America",
    club: "Manchester United",
    barName: "The British Bulldog",
    link: "https://goo.gl/maps/zoeDLAjpa8oV5c4g9",
    lat: 39.750624531403766,
    lng: -104.9853437709032,
  },
  {
    country: "United States of America",
    club: "Liverpool",
    lat: 34.007969428759544,
    lng: -118.41245218835955,
  },
  {
    country: "United States of America",
    club: "Liverpool",
    barName: "Skinny Slim's",
    link: "https://goo.gl/maps/XgKx1efctVrDBcc58",
    lat: 35.467814725201244,
    lng: -97.50875667606236,
  },
  {
    country: "United States of America",
    club: "Liverpool",
    barName: "Union Jack Pub",
    link: "https://goo.gl/maps/HDojzXU7E8Jfm3qN8",
    lat: 39.86964111823851,
    lng: -86.14217209933652,
  },
  {
    country: "United States of America",
    club: "Liverpool",
    barName: "Amsterdam Tavern",
    link: "https://goo.gl/maps/bhsKrmJFZgwWTE9W8",
    lat: 38.602412203984684,
    lng: -90.26156618096024,
  },
  {
    country: "United States of America",
    club: "Liverpool",
    barName: "White Lion Pub",
    link: "https://goo.gl/maps/ePdPxecMFJB36ymd9",
    lat: 36.061994396332906,
    lng: -95.91846377975992,
  },
  {
    country: "United States of America",
    club: "Liverpool",
    barName: "Henry's Pub",
    link: "https://goo.gl/maps/PgbZtfHyNXYmbLf17",
    lat: 32.712119557890496,
    lng: -117.16029386441778,
  },
  {
    country: "United States of America",
    club: "Arsenal",
    barName: "Yucca Tap Room",
    link: "https://goo.gl/maps/FX8GwxEKJ3G2Bt1S8",
    lat: 33.392692616602574,
    lng: -111.94052810708884,
  },
  {
    country: "United States of America",
    club: "Tottenham Hotspurs",
    barName: "Ireland's Four Courts",
    link: "https://goo.gl/maps/pyLsxw7MbbT6ksX36",
    lat: 38.8926844492764,
    lng: -77.0835661698541,
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
                      <h6>{`${bar.country} - ${bar.club}`}</h6>
                      <p>{bar.barName}</p>
                      <a href={bar.link}>Link</a>
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
