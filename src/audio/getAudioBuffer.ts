import * as THREE from "three";
import { PhysicalMaterial } from "../types/PhysicalMaterial";
import { WeightClass } from "../types/WeightClass";

import * as mediumDice from "./medium/dice";
import * as mediumLeather from "./medium/leather";
import * as mediumWood from "./medium/wood";
import * as mediumShake from "./medium/shake";

const buffers: Record<WeightClass, Record<PhysicalMaterial, AudioBuffer[]>> = {
  MEDIUM: {
    DICE: [],
    LEATHER: [],
    WOOD: [],
    SHAKE: [],
  },
};

/**
 * A mapping of weigh class and material to the current index.
 * Used to by the `getNextBuffer` function.
 */
const indices: Record<WeightClass, Record<PhysicalMaterial, number>> = {
  MEDIUM: {
    DICE: 0,
    LEATHER: 0,
    WOOD: 0,
    SHAKE: 0,
  },
};

function loadBuffer(
  url: string,
  weightClass: WeightClass,
  physicalMaterial: PhysicalMaterial,
  audioLoader: THREE.AudioLoader
) {
  audioLoader.load(url, function (buffer) {
    buffers[weightClass][physicalMaterial].push(buffer);
  });
}

function loadBuffers() {
  const audioLoader = new THREE.AudioLoader();

  loadBuffer(mediumDice.a1, "MEDIUM", "DICE", audioLoader);
  loadBuffer(mediumDice.a2, "MEDIUM", "DICE", audioLoader);
  loadBuffer(mediumDice.a3, "MEDIUM", "DICE", audioLoader);
  loadBuffer(mediumDice.a4, "MEDIUM", "DICE", audioLoader);
  loadBuffer(mediumLeather.a1, "MEDIUM", "LEATHER", audioLoader);
  loadBuffer(mediumLeather.a2, "MEDIUM", "LEATHER", audioLoader);
  loadBuffer(mediumLeather.a3, "MEDIUM", "LEATHER", audioLoader);
  loadBuffer(mediumLeather.a4, "MEDIUM", "LEATHER", audioLoader);
  loadBuffer(mediumWood.a1, "MEDIUM", "WOOD", audioLoader);
  loadBuffer(mediumWood.a2, "MEDIUM", "WOOD", audioLoader);
  loadBuffer(mediumWood.a3, "MEDIUM", "WOOD", audioLoader);
  loadBuffer(mediumWood.a4, "MEDIUM", "WOOD", audioLoader);
  loadBuffer(mediumShake.a1, "MEDIUM", "SHAKE", audioLoader);

  window.removeEventListener("click", loadBuffers);
}

window.addEventListener("click", loadBuffers);

export function getAudioBuffers(
  weightClass: WeightClass,
  physicalMaterial: PhysicalMaterial
) {
  return buffers[weightClass][physicalMaterial];
}

export function getRandomBuffer(
  weightClass: WeightClass,
  physicalMaterial: PhysicalMaterial
) {
  const buffers = getAudioBuffers(weightClass, physicalMaterial);
  if (buffers.length === 0) {
    return null;
  }
  return buffers[Math.floor(Math.random() * buffers.length)];
}

/**
 * Get an audio buffer for a given weight class and material ensuring that
 * every consecutive call returns the next buffer in the array
 */
export function getNextBuffer(
  weightClass: WeightClass,
  physicalMaterial: PhysicalMaterial
) {
  const buffers = getAudioBuffers(weightClass, physicalMaterial);
  if (buffers.length === 0) {
    return null;
  }
  const index = indices[weightClass][physicalMaterial];
  const buffer = buffers[index];
  indices[weightClass][physicalMaterial] = (index + 1) % buffers.length;
  return buffer;
}
