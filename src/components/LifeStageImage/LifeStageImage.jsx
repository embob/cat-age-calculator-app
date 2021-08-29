import React, { useContext } from 'react';
import { CalculatorContext } from "../Calculator/Calculator";

export default function LifeStageImage() {
  const { age, lifeStage} = useContext(CalculatorContext);
  if (!age) return null;
  if (age > 116) return <img src={`images/tombstone.jpg`} alt="" />;
  return <img src={`images/${lifeStage}.jpg`} width="488" height="380" alt={`a ${lifeStage} cat`}/>;
};