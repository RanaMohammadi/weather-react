import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input type="search" placeholder="Type a city.." autoFocus="on" />
        <input type="submit" value="Search" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednnesday 7:00</li>
        <li>Clear sky</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="float-start"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            />
            <div className="float-end ">
              <span className="temperature">17</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Description</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
