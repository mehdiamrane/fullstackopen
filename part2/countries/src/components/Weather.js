import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  const [weatherData, setWeatherData] = useState([]);

  const fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setWeatherData(response.data);
    });
  }, [fetchURL]);

  if (weatherData.length === 0) {
    return <p>Getting weather data...</p>;
  } else {
    return (
      <>
        <h3>Weather in {city}</h3>
        <p>Temperature: {weatherData.main.temp} °C</p>
        <p>
          Wind: {weatherData.wind.speed} m/s at {weatherData.wind.deg}°{' '}
        </p>
        <p>
          Icon:{' '}
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt='Weather icon'
          />
        </p>
      </>
    );
  }
};

export default Weather;
