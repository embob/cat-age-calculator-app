import React, { useContext } from "react";
import { CalculatorContext } from "../Calculator/Calculator";

export default function CalculatorInput() {
  const { age, setAge } = useContext(CalculatorContext);

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
