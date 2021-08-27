import React, { useState, useContext } from "react";
import catCalculator from "cat-age-calculator";
import "./Calculator.css";

const AgeContext = React.createContext();

function getLifeStage(months, years) {
  const lifeStages = new Map();
  lifeStages.set("kitten", (months, years) => years === 0 && months < 7);
  lifeStages.set("junior", (months, years) => years < 3);
  lifeStages.set("adult", (months, years) => years < 7);
  lifeStages.set("mature", (months, years) => years < 11);
  lifeStages.set("senior", (months, years) => years < 15);
  lifeStages.set("superSenior", (months, years) => years > 14);

  function matchLifeStage({ months, years }) {
    for (let [key, value] of lifeStages) {
      if (value(months, years)) return key;
    }
  }

  return matchLifeStage({ months, years });
}

function LifeStageLabel() {
  const { age } = useContext(AgeContext);
  if (!age || age > 116) return null;
  const { years, months } = catCalculator.getCatAgeObject(age);
  const lifeStage = getLifeStage(months, years);
  let label = lifeStage;
  if (label === "superSenior") label = "super senior"
  label !== "adult" ? (label = "A " + label) : (label = "An " + label);
  if (label !== "a kitten") label += " cat";
  return <div>{label}</div>;
}

function LifeStageImage() {
  const { age } = useContext(AgeContext);
  if (!age || age > 116) return null;
  const { years, months } = catCalculator.getCatAgeObject(age);
  const lifeStage = getLifeStage(months, years);
  const img = `${lifeStage}`;
  console.log(img);
  return <img src={`images/${img}.png`} alt="" />;
}

function AgeNumber() {
  const { age } = useContext(AgeContext);
  if (!age) return <span style={{ color: "#E6509B" }}>???</span>;
  const { years, months } = catCalculator.getCatAgeObject(age);
  const calculatedAge = !(years) ? `${months} months` : `${years} years`;
  return <span style={{ color: "#E6509B" }}>{calculatedAge}</span>;
}

function CatAge() {
  const { age } = useContext(AgeContext);
  if (age === 0 || age > 116)
    return "Oops! 🙀 The age must be between 1 and 116";
  return (
    <div className="calculator__result">
      <div>
        <div className="calculator__age">I would be <AgeNumber /> old</div>
        <LifeStageLabel />
      </div>
    </div>
  );
}

export default function Calculator() {
  const [age, setAge] = useState("");

  function handleInput(e) {
    setAge(Number.parseInt(e.target.value) || "");
  }

  return (
    <AgeContext.Provider value={{ age }}>
      <div className="calculator">
        <div className="left">
          <div className="calculator__input">
            I am{" "}
            <input
              type="number"
              min="1"
              max="116"
              value={age}
              onChange={handleInput}
              autoFocus
              placeholder="..."
            />{" "}
            years old
          </div>
          <div className="calculator__text">if I was a cat...</div>
          <CatAge />
        </div>
        <div className="right">
          <LifeStageImage />
        </div>
      </div>
    </AgeContext.Provider>
  );
}
