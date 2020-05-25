import React from "react";
import { useSelector } from "react-redux";

export default function WeatherUpdate() {
  const weatherData = useSelector(
    (reduxState: any) => reduxState.weather.weatherData
  );
  console.log("#############", weatherData);

  return <div></div>;
}
