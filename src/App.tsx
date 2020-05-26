import React from "react";
import "./App.css";
import InputContainer from "./conponents/input/InputContainer";
import WeatherUpdate from "./conponents/output/WeatherUpdate";

function App() {
  const colds = ["lightblue", "skyblue", "#00ccff", "#8080ff", "#4dffff"];
  const hots = ["orange", "pink", "tomato", "red", "#ff9933", "#ff0000"];

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${
          hots[Math.round(Math.random() * 2)]
        },  ${colds[Math.round(Math.random() * 2)]})`,
      }}
      className="App"
    >
      <InputContainer />
      <WeatherUpdate />
    </div>
  );
}

export default App;
