import "./App.css";
import Spline from "@splinetool/react-spline";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import GetStarted from "./Components/GetStarted";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact";
import PopularTeams from "./Components/PopularTeams";
import NavBar from "./Components/NavBar";
import {useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/map");
  };

  return (
    <div className="App">
      <NavBar />
      <Spline scene="https://prod.spline.design/fBT5XNSuperpwklS/scene.splinecode" />      <Content />
      <PopularTeams />
      <Stats />
      <GetStarted onButtonClick={handleButtonClick} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
