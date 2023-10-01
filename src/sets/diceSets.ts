import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";

import * as galaxyPreviews from "../previews/galaxy";
import * as gemstonePreviews from "../previews/gemstone";
import * as nebulaPreviews from "../previews/nebula";

import allPreview from "../previews/all.png";

const standardPreviews: Record<DiceStyle, string> = {
  GALAXY: galaxyPreviews.Set,
  GEMSTONE: gemstonePreviews.D100,
  NEBULA: nebulaPreviews.D20,
};

function createStandardSet(style: DiceStyle): DiceSet {
  const id = `${style}_STANDARD`;
  return {
    id,
    name: `${style.toLowerCase()} dice`,
    dice: [
      { id: `${id}_D6`, type: "D6", style},
      { id: `${id}_D8`, type: "D8", style },
      { id: `${id}_D10`, type: "D10", style },
      { id: `${id}_D12`, type: "D12", style },
      { id: `${id}_D6ammo`, type: "D6", style: "GEMSTONE" },
      { id: `${id}_D6location`, type: "D6", style: "NEBULA" },
    ],
    previewImage: standardPreviews[style],
  };
}

function createSecondarySet(style: DiceStyle): DiceSet {
  const id = `${style}_STANDARD`;
  return {
    id,
    name: `${style.toLowerCase()} dice`,
    dice: [
      { id: `${id}_D4`, type: "D4", style: "GALAXY" },
      { id: `${id}_D20`, type: "D20", style: "GALAXY" },
      { id: `${id}_D100`, type: "D100", style },
    ],
    previewImage: standardPreviews[style],
  };
}

const standardSets = [
  createStandardSet("GALAXY"), createSecondarySet("GEMSTONE"),
];

const allSet: DiceSet = {
  id: "all",
  name: "all",
  dice: standardSets.reduce(
    (prev, curr) => [...prev, ...curr.dice],
    [] as Die[]
  ),
  previewImage: allPreview,
};

export const diceSets: DiceSet[] = [...standardSets, allSet];
