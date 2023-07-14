import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function PopularTeams() {
  return (
    <section id="popularTeams">
      <h1 className="TeamsHeaderText">Popular Teams</h1>

      <div className="container">
        <Card
          className="teamCard1"
          sx={{
            minWidth: 210,
            height: 350,
            marginRight: 3,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 260, objectFit: "contain" }}
            image="https://cdn.vox-cdn.com/thumbor/m4E1_GjIMEGTndi2YZYrZsYJu2Y=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20108137/1257685557.jpg.jpg"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              Liverpool
            </Typography>

            <Typography variant="body2" color="grey">
              Premier League
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="teamCard2"
          sx={{
            minWidth: 210,
            height: 350,
            marginRight: 3,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 260, objectFit: "contain" }}
            image="https://focus.sundayworld.com/thumbor/5YE9gTTKHZ6dBKgnScZgRIwTEwU=/113x0:3054x2206/960x720/prod-mh-ireland/64b3ca47-50d2-46ef-b357-728e5a0d6a55/eb3169c4-bc83-4a26-bf81-ae64052e4e91/64b3ca47-50d2-46ef-b357-728e5a0d6a55.jpg"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              Man United
            </Typography>

            <Typography variant="body2" color="grey">
              Premier League
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="teamCard3"
          sx={{
            minWidth: 210,
            height: 350,
            backgroundColor: "#383838",
            marginRight: 3,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 260, objectFit: "contain" }}
            image="https://api.internationalchampionscup.com/v1/storage/611adc47-ea5a-47aa-84a0-c7dad31745d5?w=1600"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              Real Madrid
            </Typography>

            <Typography variant="body2" color="grey">
              La Liga
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="teamCard4"
          sx={{
            minWidth: 210,
            height: 350,
            marginRight: 3,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 260, objectFit: "contain" }}
            image="https://images.prothomalo.com/prothomalo-english/2023-05/42ee9339-45f2-4ee9-8d3b-a9d1fabdbf4a/2023_05_20T213144Z_1479321339_UP1EJ5K1NSVD7_RTRMADP_3_SOCCER_SPAIN_FCB_SOC_REPORT.JPG?w=1200&h=872"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              FC Barcelona
            </Typography>

            <Typography variant="body2" color="grey">
              La Liga
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="teamCard5"
          sx={{
            minWidth: 210,
            height: 350,
            marginRight: 3,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 260, objectFit: "contain" }}
            image="https://www.reuters.com/resizer/RbxjtPvDDjpaeFSaMc7s_ayFtc8=/960x960/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KQIOMJ6DSJOPBGICTR6QBVCD6Q.jpg"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              Bayern Munich
            </Typography>

            <Typography variant="body2" color="grey">
              Bundesliga
            </Typography>
          </CardContent>
        </Card>

        <Card
          className="teamCard6"
          sx={{
            minWidth: 210,
            height: 350,
            backgroundColor: "#383838",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          <CardMedia
            sx={{ height: 260, objectFit: "contain" }}
            image="https://i.guim.co.uk/img/media/eb6caf6db81be662905ee1230f1eddc6a9831624/0_206_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0f2236596712182911c4fef6b47c55e2"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="white"
              style={{ fontFamily: "Alfa Slab One" }}
            >
              Chelsea
            </Typography>

            <Typography variant="body2" color="grey">
              Premier League
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default PopularTeams;
