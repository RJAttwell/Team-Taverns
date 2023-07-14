import { GoogleMap } from "@react-google-maps/api";

const mapOptions = {
  mapId: "cb21e6acbb31cd1",
  scrollwheel: true, // Enable scroll wheel zooming
  minZoom: 2,
  maxZoom: 20
  
};



function MapComponent({ center, zoom }) {
    
  return (
    <GoogleMap
      mapContainerStyle={{ width: "75%", height: "600px", margin: "0 auto" }}
      mapTypeId=""
      center={center}
      zoom={zoom}
      options={mapOptions}
    >
      {/* Render markers here */}
    </GoogleMap>
  );
}

export default MapComponent;
