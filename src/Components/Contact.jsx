import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Contact() {
  return (
    <section id="ContactSection">
      <h1 className="ContactHeaderText">Top Rated Bars</h1>
      <div className="container">
        <Card
          className="ContactCard"
          sx={{
            minWidth: 350,
            height: 200,
            marginRight: 10,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardContent>
           
          </CardContent>
        </Card>

        <Card
          className="ContactCard"
          sx={{
            minWidth: 350,
            height: 200,
            marginRight: 10,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardContent>
           
          </CardContent>
        </Card>

        <Card
          className="ContactCard"
          sx={{
            minWidth: 350,
            height: 200,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardContent>
           
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
