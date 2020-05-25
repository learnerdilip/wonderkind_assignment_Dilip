import React from "react";
import "./App.css";
import InputContainer from "./conponents/input/InputContainer";
import WeatherUpdate from "./conponents/output/WeatherUpdate";

function App() {
  return (
    <div className="App">
      <InputContainer />
      <WeatherUpdate />
    </div>
  );
}

export default App;
