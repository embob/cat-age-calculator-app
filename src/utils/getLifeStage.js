export default function getLifeStage(months, years) {
  const lifeStages = new Map();
  lifeStages.set("kitten", ({ months, years }) => years === 0 && months < 7);
  lifeStages.set("junior", ({ years }) => years < 3);
  lifeStages.set("adult", ({ years }) => years < 7);
  lifeStages.set("mature", ({ years }) => years < 11);
  lifeStages.set("senior", ({ years }) => years < 15);
  lifeStages.set("super senior", ({ years }) => years > 14);

  function matchLifeStage({ months, years }) {
    for (let [key, value] of lifeStages) {
      if (value({ months, years })) return key;
    }
  }

  return matchLifeStage({ months, years });
}
