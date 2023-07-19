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
  const center = { lat: 0, lng: 0 };
  const zoom = 3;

  return (
    <>
      <NavBar />

      <section id="InputSection">
        <div className="InputDiv">
          <h1 className="MapPageHeaderText">Type in your Location and Club</h1>

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

            <CountryAutoComplete
              suggestions={[
                "Australia",
                "Belgium",
                "Canada",
                "England",
                "France",
                "Germany",
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

            <ClubAutocomplete
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

      <section id="MapSection">
        <h1 className="MapDivText">Results</h1>
        <LoadScript googleMapsApiKey="AIzaSyC5TQRQXVpsBHskHxxifLJfl9w53tp4hqo">
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

        <a href="/map">
          <button className="ResetButton">Reset</button>
        </a>
      </section>

      <Footer />
    </>
  );
}

export default Map;
