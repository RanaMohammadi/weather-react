import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherIInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    let apiKey = "cf8403573358fa943fb21dc8f32d6370";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city.."
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="searchBotton" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
  }
}
