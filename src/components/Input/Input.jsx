import React, { useState, useContext } from "react";
import catCalculator from "cat-age-calculator";

const AgeContext = React.createContext();

function AgeNumber() {
  const { age } = useContext(AgeContext);
  if (!age) return <span className="calculated-age" style={{ color: "hotpink" }}>???</span>;
  const calculatedAge = catCalculator.getCatAgeString(age);
  return <span className="calculated-age" style={{ color: "hotpink" }}>{calculatedAge}</span>;
}

function AgeTitle() {
  const { age } = useContext(AgeContext);
  if (age === 0 || age > 116) return 'Oops! Human age must be between 1 and 116';
  return (
    <h1>
      I am <AgeNumber /> old if I was a cat.
    </h1>
  );
}

export default function Input() {
  const [age, setAge] = useState("");

  function handleInput(e) {
    setAge(Number.parseInt(e.target.value));
  }

  return (
    <AgeContext.Provider value={{ age }}>
      <div className="input">
        I am <input type="number" min="1" max="116" value={age} onChange={handleInput} /> human years old
      </div>
      <AgeTitle />
    </AgeContext.Provider>
  );
}
