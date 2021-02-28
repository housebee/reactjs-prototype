import React, { useState } from "react";
import MyButton from './MyButton';
import "./style.css";

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);

  const increaseTemperature = () => {
    setTemperatureValue(temperatureValue + 1);
  };

  const decreaseTemperature = () => {
    setTemperatureValue(temperatureValue - 1);
  };

  return (
    <div class="app-container">
      <div class="temperature-display-container">
        <div class="temperature-display">{temperatureValue}°C</div>
      </div>
      <div class="button-container">
        <MyButton clickHandler={increaseTemperature} label="+" />
        <MyButton clickHandler={decreaseTemperature} label="-" />
      </div>
    </div>
  );
}


