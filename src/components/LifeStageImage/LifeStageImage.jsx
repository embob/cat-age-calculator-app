import React from 'react';

export default function LifeStageImage({age, lifeStage}) {
  if (!age) return null;
  if (age > 116) return <img src={`images/tombstone.jpg`} alt="" />;
  return <img src={`images/${lifeStage}.jpg`} alt={`a ${lifeStage} cat`}/>;
};