function GetStarted({ onButtonClick }) {
  return (
    <div className="Start">
      <h1 className="GetStartedHeaderText">Get Started</h1>

      <div className="Steps">
        <div className="StepOne">
          <i
            class="fa-regular fa-futbol"
            style={{
              color: "#050a10",
              fontSize: "xx-large",
              marginBottom: "15px",
            }}
          ></i>
          <h3 style={{ fontFamily: "Rubik" }}>Step 1.</h3>
          <h6>Input which team you wish to find a bar associated with.</h6>
        </div>

        <div className="StepTwo">
          <i
            class="fa-solid fa-earth-europe"
            style={{
              color: "#050a10",
              fontSize: "xx-large",
              marginBottom: "15px",
            }}
          ></i>
          <h3 style={{ fontFamily: "Rubik" }}>Step 2.</h3>
          <h6>Put in where you currently are.</h6>
        </div>

        <div className="StepThree">
          <i
            class="fa-solid fa-champagne-glasses"
            style={{
              color: "#050a10",
              fontSize: "xx-large",
              marginBottom: "15px",
            }}
          ></i>
          <h3 style={{ fontFamily: "Rubik" }}>Step 3.</h3>
          <h6>Choose from a selection of bars and go watch some football.</h6>
        </div>
      </div>

      <button onClick={onButtonClick} className="StartButton">
        Get Started
      </button>
    </div>
  );
}

export default GetStarted;
