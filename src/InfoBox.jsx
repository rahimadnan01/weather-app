import Card from "@mui/material/Card";
import "./InfoBox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function InfoBox({ info }) {
  let IMG_URL =
    "https://images.pexels.com/photos/30238052/pexels-photo-30238052/free-photo-of-foggy-alpine-forest-in-chiavenna-italy.jpeg?auto=compress&cs=tinysrgb&w=400";

  let HOT_URL =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";

  let COLD_URL =
    "https://images.unsplash.com/photo-1613083093144-bfa5c3eb8337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  let RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
  return (
    <>
      <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }} className=" Card">
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp < 15
                ? COLD_URL
                : HOT_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="info"
            >
              {info.city}
              <span style={{ display: "flex", justifyContent: "center " }}>
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp < 15 ? (
                  <AcUnitIcon />
                ) : (
                  <WbSunnyIcon />
                )}
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              className="info"
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Max Temperature = {info.tempMax}&deg;C</p>
              <p>Min Temperature = {info.tempMin}&deg;C</p>
              <p>
                The weather is {info.weather} and Feels as {info.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
