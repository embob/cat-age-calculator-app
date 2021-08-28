import React from "react";
import catCalculator from "cat-age-calculator";

function AgeNumber({age, months, years}) {
  if (!age) return <span style={{ color: "#E6509B" }}>???</span>;
  const calculatedAge = !years ? `${months} months` : `${years} years`;
  return <span style={{ color: "#E6509B" }}>{calculatedAge}</span>;
}

function LifeStageLabel({age, lifeStage}) {
  if (!age) return <div style={{ height: "79px" }}></div>;
  if (age > 116) return null;
  if (lifeStage !== "kitten") lifeStage += " cat";
  lifeStage = lifeStage !== "adult" ? "A " + lifeStage : "An " + lifeStage;
  return <div className="lifestage">{lifeStage}</div>;
}

function getLifeStage(months, years) {
  const lifeStages = new Map();
  lifeStages.set("kitten", (months, years) => years === 0 && months < 7);
  lifeStages.set("junior", (months, years) => years < 3);
  lifeStages.set("adult", (months, years) => years < 7);
  lifeStages.set("mature", (months, years) => years < 11);
  lifeStages.set("senior", (months, years) => years < 15);
  lifeStages.set("super senior", (months, years) => years > 14);

  function matchLifeStage({ months, years }) {
    for (let [key, value] of lifeStages) {
      if (value(months, years)) return key;
    }
  }

  return matchLifeStage({ months, years });
}

export default function CalculatorResult({age, setLifeStage}) {

  if (age === 0 || age > 116)
    return (
      <div className="calculator__oops">
        <span style={{ color: "#E6509B" }}>Oops! </span>The age needs to be
        between 1 and 116
      </div>
    );

  const { years, months } = catCalculator.getCatAgeObject(age);
  const lifeStage = getLifeStage(months, years);
  setLifeStage(lifeStage);
  return (
    <div className="calculator__result">
      <div>
        <div className="calculator__age">
          I would be <AgeNumber age={age} years={years} months={months}/> old
        </div>
        <LifeStageLabel age={age} lifeStage={lifeStage} />
      </div>
    </div>
  );
}
