import Image from "../Alisson.png";

function Content() {
  return (
    <section id="infoSection">
      <div className="InfoTextSection">
        <h1 className="InfoHeaderText1" style={{marginBottom: "30px"}}>Welcome to Team Taverns</h1>
        <h3 className="InfoHeaderText">What is Team Taverns?</h3>
        <p className="InfoText">
          Your ultimate destination for locating bars around the world that
          cater to fans of specific soccer club teams or national teams. Whether
          you're a die-hard supporter or simply looking to immerse yourself in
          the exhilarating atmosphere of a match, Team Taverns is here to
          connect you with the perfect venue. With our user-friendly interface,
          you can easily search for bars associated with your favorite soccer
          team in any country.
        </p>
        <h3 className="InfoHeaderText">Soccer is for everyone, everywhere</h3>
        <p className="InfoText">
          Experience the thrill of cheering alongside fellow fans, savoring
          authentic cuisine, and celebrating victories in an electrifying
          environment. Use Team Taverns today and never miss a moment of the
          beautiful game, no matter where you are in the world.
        </p>
      </div>

      <div>
        <img
          className="PlayerImage1"
          src={Image}
          alt="Alisson, goalkeeper of Liverpool"
        />
      </div>
    </section>
  );
}

export default Content;
