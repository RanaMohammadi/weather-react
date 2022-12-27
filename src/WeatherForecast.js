import axios from "axios";
import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import WeatheForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
  }
  useEffect(() => {
    setLoad(false);
  }, [props.coordinates]);
  if (load) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatheForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "cf8403573358fa943fb21dc8f32d6370";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
  }
}
