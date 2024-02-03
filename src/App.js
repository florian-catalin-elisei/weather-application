import { useState } from "react";
import getWeather from "./api";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const handleChange = (event) => {
    const { value } = event.target;
    setCity(value);
  };

  const handleKeyUp = async (event) => {
    if (event.key === "Enter") {
      const weather = await getWeather(city);
      setWeather(weather);
      setCity("");
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        name="city"
        placeholder="Search..."
        autoComplete="off"
        value={city}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />

      {weather.main ? (
        <div className="weather">
          <h3>
            {weather.name}
            <sup>{weather.sys.country}</sup>
          </h3>

          <div className="weather-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>

          <div className="weather-icon">
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />

            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
