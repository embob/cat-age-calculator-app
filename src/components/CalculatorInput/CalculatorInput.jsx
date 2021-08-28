import React from "react";

export default function CalculatorInput({ age, setAge }) {
  function handleInput(e) {
    setAge(Number.parseInt(e.target.value) || "");
  }
  return (
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
  );
}
