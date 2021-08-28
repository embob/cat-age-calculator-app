import React from "react";

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

export default function CalculatorResult({age, years, months, lifeStage}) {

  if (age === 0 || age > 116)
    return (
      <div className="calculator__oops">
        <span style={{ color: "#E6509B" }}>Oops! </span>The age needs to be
        between 1 and 116
      </div>
    );

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
