import { useState, useEffect } from "react";

import axios from "axios";

const Weather = ({ capital }) => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [weatherData, setWeatherData] = useState(null);

  console.log("weatherData", weatherData);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`
      )
      .then((response) => setWeatherData(response.data));
  }, [api_key, capital]);
  return (
    <>
      {weatherData && (
        <>
          <h2>Weather in {capital}</h2>
          <p>temperature {weatherData.main.temp}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={`weather in ${capital} is ${weatherData.weather.description}`}
          />
          <p>wind {weatherData.wind.speed} m/s</p>
        </>
      )}
    </>
  );
};

export default Weather;
