import React, { useState } from "react";
import MyButton from "./MyButton";
import MyDisplay from "./MyDisplay";
import "./style.css";

export default function App() {
  const TEMP_HOT = "hot";
  const TEMP_COLD = "cold";
  const TEMP_BAR = 16;
  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColor, setTemperatureColor] = useState(TEMP_COLD);

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    if (newTemperature >= TEMP_BAR) {
      setTemperatureColor(TEMP_HOT);
    }
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);

    if (newTemperature < TEMP_BAR) {
      setTemperatureColor(TEMP_COLD);
    }
  };

  return (
    <div class="app-container">
      <MyDisplay value={temperatureValue} color={temperatureColor} />
      <div class="button-container">
        <MyButton clickHandler={increaseTemperature} label="+" />
        <MyButton clickHandler={decreaseTemperature} label="-" />
      </div>
    </div>
  );
}
