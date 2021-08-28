import React, { useState } from "react";
import "./Calculator.css";
import CalculatorInput from "../CalculatorInput/CalculatorInput";
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import LifeStageImage from "../LifeStageImage/LifeStageImage";

export default function Calculator() {
  const [age, setAge] = useState("");
  const [lifeStage, setLifeStage] = useState("");

  return (
    <div className="calculator">
      <div className="calculator__first">
        <CalculatorInput age={age} setAge={setAge} />

        <div className="calculator__text">if I was a cat...</div>

        <CalculatorResult age={age} setLifeStage={setLifeStage} />
      </div>
      <div className="calculator__second">
        <LifeStageImage age={age} lifeStage={lifeStage} />
      </div>
    </div>
  );
}
