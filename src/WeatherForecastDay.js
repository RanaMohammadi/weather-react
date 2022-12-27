import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatheForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temp.max);
    return temp;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temp.min);
    return temp;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="WeatherForecast=temperature">
        <span className="WeatheForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="WeatheForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
