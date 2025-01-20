import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { use, useState } from "react";
import InfoBox from "./InfoBox";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState({ cityName: "" });
  let [error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "984d63eb1a68187b511b98b534dfa0d7";
  let getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city.cityName}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      let result = {
        city: city.cityName,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        weather: data.weather[0].description,
        feelsLike: data.main.feels_like,
      };
      return result;
    } catch (error) {
      throw err;
    }
  };

  let addCity = (e) => {
    setCity((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  let submitData = async (e) => {
    try {
      e.preventDefault();
      setCity({
        cityName: "",
      });

      let newInfo = await getWeather();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <div className="searchBox">
        <form action="">
          <div className="input">
            <TextField
              id="standard-basic"
              label="City Name"
              variant="standard"
              value={city.cityName}
              required
              onChange={addCity}
              name="cityName"
            />
          </div>
          <div>
            <div className="btn">
              <Button
                onClick={submitData}
                type="submit"
                variant="contained"
                endIcon={<SearchIcon />}
              >
                Send
              </Button>
            </div>
          </div>
        </form>
        {error && <p>No such city found</p>}
      </div>
    </>
  );
}
