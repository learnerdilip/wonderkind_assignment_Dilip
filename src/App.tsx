import React from "react";
import "./App.css";
import InputContainer from "./conponents/input/InputContainer";
import WeatherUpdate from "./conponents/output/WeatherUpdate";

function App() {
  const randr = Math.round(Math.random() * 100);
  const randb = Math.round(Math.random() * 100);
  const blue = `#${randb}6755`;
  const red = `#ff43${randr}`;
  
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${blue}, ${red}`,
      }}
      className="App"
    >
      <InputContainer />
      <WeatherUpdate />
    </div>
  );
}

export default App;
