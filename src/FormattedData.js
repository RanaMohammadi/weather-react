import React from "react";
export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.data.getDay()];
  let minute = props.data.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let hour = props.data.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return (
    <div>
      {day} {hour}:{minute}
    </div>
  );
}
