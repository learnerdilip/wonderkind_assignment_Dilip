import React from "react";
import "./App.css";
import InputContainer from "./conponents/input/InputContainer";
import WeatherUpdate from "./conponents/output/WeatherUpdate";

function App() {

  const rand = Math.round(Math.random() * 100);
  const blue = `#679955`;
  const red = `#ff43${rand}`;
  return (
    <div
      style={{ backgroundImage: `linear-gradient(to right, ${blue}, ${red}` }}
      className="App"
    >
      <InputContainer />
      <WeatherUpdate />
    </div>
  );
}

export default App;
