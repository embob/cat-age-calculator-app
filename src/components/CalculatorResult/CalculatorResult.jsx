import React, { useContext } from "react";
import { CalculatorContext } from "../Calculator/Calculator";

function AgeNumber({ age, months, years }) {
  if (!age) return <span class="calculator__age">???</span>;
  const calculatedAge = !years ? `${months} months` : `${years} years`;
  return <span class="calculator__age">{calculatedAge}</span>;
}

function LifeStageLabel({ age, lifeStage }) {
  if (!age) return <div style={{ height: "79px" }}></div>;
  if (age > 116) return null;
  if (lifeStage !== "kitten") lifeStage += " cat";
  lifeStage = lifeStage !== "adult cat" ? "A " + lifeStage : "An " + lifeStage;
  return <div className="lifestage">{lifeStage}</div>;
}

export default function CalculatorResult() {
  const { age, months, years, lifeStage } = useContext(CalculatorContext);
  if (age === 0 || age > 116)
    return (
      <div className="calculator__oops">
        <span class="calculator__age">Oops! </span>The age needs to be
        between 1 and 116
      </div>
    );

  return (
    <div className="calculator__result">
      <div>
        <div className="calculator__age-text">
          I would be <AgeNumber age={age} years={years} months={months} /> old
        </div>
        <LifeStageLabel age={age} lifeStage={lifeStage} />
      </div>
    </div>
  );
}
