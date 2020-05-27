import React from "react";
import "./App.css";
import InputContainer from "./conponents/input/InputContainer";
import WeatherUpdate from "./conponents/output/WeatherUpdate";
import { useSelector } from "react-redux";

function App() {
  // getting the weather data from redux store
  const weatherData = useSelector(
    (reduxState: any) => reduxState.weather.weatherData
  );
  // setting the data to valid week data
  const weekweather = weatherData ? [...weatherData] : [];

  // finding the average of 10 days
  const tenDayAvg = Math.round(
    weekweather.reduce((summation: any, day: any) => {
      return summation + day.temp;
    }, 0) / 10
  );

  // setting colors for background on change of average temperature
  const colder: string = "#e7ebf1, #2885e2";
  const cold: string = "#bac9dc, #2c2c86";
  const medium: string = "#9a2e2ebd, #3e80c1";
  const hot: string = "#d03333, #E0B92A";

  const background: number | string =
    tenDayAvg === 0
      ? "white ,lightblue,tomato"
      : tenDayAvg <= 10
      ? colder
      : tenDayAvg > 10 && tenDayAvg <= 20
      ? cold
      : tenDayAvg > 20 && tenDayAvg <= 30
      ? medium
      : hot;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${background} )`,
      }}
      className="App"
    >
      <InputContainer />
      <WeatherUpdate weekweather={weekweather} tenDayAvg={tenDayAvg} />
    </div>
  );
}

export default App;
