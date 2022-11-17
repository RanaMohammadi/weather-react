import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
export default function Weather(props) {
  let apiKey = "cf8403573358fa943fb21dc8f32d6370";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric
&appid=${apiKey}`;
  function handleresponse(response) {
    alert(`It is now ${response.data.main.temp} in ${response.data.name}`);
  }
  axios.get(apiUrl).then(handleresponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
