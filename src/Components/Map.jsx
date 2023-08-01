import React, { useState } from "react";
import NavBar from "./NavBar";
import Image from "../Haaland.png";
import MapComponent from "./MapComponent";
import { LoadScript } from "@react-google-maps/api";
import Footer from "./Footer";
import CountryAutoComplete from "./CountryAutoComplete";
import ClubAutocomplete from "./ClubAutoComplete";

function Map() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  // Set initial center and zoom level
  const center = { lat: 45, lng: -10 };
  const zoom = 3;

  return (
    <>
      {/* Adds the Nav Bar Component */}
      <NavBar />

      {/* Input section. This will be where the user inputs which country they are looking  for bars in and what club the bars should be associated with */}
      <section id="InputSection">
        <div className="InputDiv">
          <h1 className="MapPageHeaderText">Type in your Location and Club</h1>

          {/* To input country */}
          <div className="CountryDiv">
            <i
              class="fa-solid fa-earth-europe"
              style={{
                color: "white",
                fontSize: "xx-large",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            ></i>

            {/* Component that'll provide auto complete list */}
            <CountryAutoComplete
              setSelectedCountry={setSelectedCountry}
              suggestions={[
                "Australia",
                "Belgium",
                "Canada",
                "England",
                "France",
                "Germany",
                "Hong Kong",
                "Ireland",
                "Italy",
                "Japan",
                "Spain",
                "South Korea",
                "Sweden",
                "United States of America",
              ]}
              onChange={(value) => setSelectedCountry(value)}
            />
          </div>

          {/* To input club */}
          <div className="ClubDiv">
            <i
              class="fa-regular fa-futbol"
              style={{
                color: "white",
                fontSize: "xx-large",
                marginBottom: "15px",
                marginRight: "10px",
              }}
            ></i>

            {/* Component that'll provide auto complete list */}
            <ClubAutocomplete
              setSelectedClub={setSelectedClub}
              suggestions={[
                "Arsenal",
                "AC Milan",
                "Barcelona FC",
                "Bayern Munich",
                "Chelsea",
                "Juventus",
                "Manchester City",
                "Manchester United",
                "Liverpool",
                "Real Madrid",
                "Tottenham Hotspurs",
                "West Ham United",
              ]}
              onChange={(value) => setSelectedClub(value)}
            />
          </div>

          <a href="#MapSection">
            <button
              type="submit"
              className="SearchButton"
              onClick={() => setSearchClicked(true)}
              style={{ width: "300px", height: "50px" }}
            >
              Search
            </button>
          </a>
        </div>

        <div className="ImageDiv">
          <img
            className="PlayerImage2"
            src={Image}
            alt="Erling Haaland holding Premier League Trophy"
          />
        </div>
      </section>

      {/* Stores the map which data is displayed on */}
      <section id="MapSection">
        <h1 className="MapDivText">Results</h1>
        <LoadScript googleMapsApiKey="API-KEY">
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
            }}
          >
            <MapComponent
              center={center}
              zoom={zoom}
              selectedCountry={selectedCountry}
              selectedClub={selectedClub}
              searchClicked={searchClicked}
            />
          </div>
        </LoadScript>

        {/* Will reload the entire page */}
        <a href="/map">
          <button className="ResetButton">Reset</button>
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Map;
