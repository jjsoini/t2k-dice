import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";

import * as t2k1Previews from "../previews/t2k1";
import * as t2k2Previews from "../previews/t2k2";
import * as t2k3Previews from "../previews/t2k3";

import allPreview from "../previews/all.png";

const standardPreviews: Record<DiceStyle, string> = {
  T2K1: t2k1Previews.Set,
  T2K2: t2k2Previews.D100,
  T2K3: t2k3Previews.D20,
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
      { id: `${id}_D6ammo`, type: "D6", style: "T2K2" },
      { id: `${id}_D6location`, type: "D6", style: "T2K3" },
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
      { id: `${id}_D4`, type: "D4", style: "T2K1" },
      { id: `${id}_D20`, type: "D20", style: "T2K1" },
      { id: `${id}_D100`, type: "D100", style },
    ],
    previewImage: standardPreviews[style],
  };
}

const standardSets = [
  createStandardSet("T2K1"), createSecondarySet("T2K2"),
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
