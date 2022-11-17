import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  const [city, setCity] = useState(" ");
  const [info, setInfo] = useState(" ");
  let apiKey = "cf8403573358fa943fb21dc8f32d6370";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(showInformation);
  }
  function showInformation(response) {
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setInfo(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed} km/h</li>
        <li>
          <img src={icon} alt={response.data.weather[0].description} />
        </li>
      </ul>
    );
  }
  function getCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city..." onChange={getCity} />
        <input type="submit" value="Search" />
      </form>
      <div>{info}</div>
    </div>
  );
}
