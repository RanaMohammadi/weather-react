import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "wu wu-black wu-64 wu-clear",
    "01n": "wu wu-black wu-64 wu-clear",
    "02d": "wu wu-black wu-64 wu-mostlycloudy",
    "02n": "wu wu-black wu-64 wu-mostlycloudy",
    "03d": "wu wu-black wu-64 wu-cloudy",
    "03n": "wu wu-black wu-64 wu-cloudy",
    "04d": "wu wu-black wu-64 wu-partlycloudy",
    "04n": "wu wu-black wu-64 wu-partlycloudy",
    "09d": "wu wu-black wu-64 wu-rain",
    "09n": "wu wu-black wu-64 wu-rain",
    "10d": "wu wu-black wu-64 wu-chancerain",
    "10n": "wu wu-black wu-64 wu-chancerain",
    "11d": "wu wu-black wu-64 wu-tstorms",
    "11n": "wu wu-black wu-64 wu-tstorms",
    "13d": "wu wu-black wu-64 wu-snow",
    "13n": "wu wu-black wu-64 wu-snow",
    "50d": "wu wu-black wu-64 wu-fog",
    "50n": "wu wu-black wu-64 wu-fog",
  };
  return <i className={codeMapping[props.code]}></i>;
}
