import React, { useState } from "react";
import "./Calculator.css";
import catCalculator from "cat-age-calculator";
import getLifeStage from "../../utils/getLifeStage";
import CalculatorInput from "../CalculatorInput/CalculatorInput";
import CalculatorResult from "../CalculatorResult/CalculatorResult";
import LifeStageImage from "../LifeStageImage/LifeStageImage";

const CalculatorContext = React.createContext();

function Calculator() {
  const [age, setAge] = useState("");
  const { years, months } = catCalculator.getCatAgeObject(age);
  const lifeStage = getLifeStage(months, years);

  return (
    <CalculatorContext.Provider value={{age, months, years, lifeStage, setAge}}>
      <div className="calculator">
        <div className="calculator__first">
          <CalculatorInput />
          <div className="calculator__text">if I was a cat...</div>
          <CalculatorResult />
        </div>
        <div className="calculator__second">
          <LifeStageImage />
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export { Calculator, CalculatorContext };
