import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Contact() {
  return (
    <section id="ContactSection">
      <h1 className="ContactHeaderText">Top Rated Bars</h1>
      <div className="container">
        <Card
          className="ContactCard"
          sx={{
            minWidth: 350,
            height: 380,
            marginRight: 10,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 280, objectFit: "contain" }}
            image="https://i.imgur.com/xiillOA.jpeg"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              봉황당 Bonghwangdang
            </Typography>

            <Typography variant="body2" color="grey">
              Seoul, South Korea
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="ContactCard"
          sx={{
            minWidth: 350,
            height: 380,
            marginRight: 10,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 280, objectFit: "contain" }}
            image="https://thecraftysquire.com.au/wp-content/uploads/2022/06/Bar-2_2022_03_08_Crafty_Squire_008-1290x650.jpg"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              The Crafty Squire
            </Typography>

            <Typography variant="body2" color="grey">
              Melbourne, Australia
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="ContactCard"
          sx={{
            minWidth: 350,
            height: 380,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 280, objectFit: "contain" }}
            image="https://images.bizbuysell.com/shared/listings/196/1964244/dd13954a-e2b1-42f1-b9eb-42594944306f-W768.jpg"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              Fritz & Franz Bierhaus
            </Typography>

            <Typography variant="body2" color="grey">
              Florida, United States
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
