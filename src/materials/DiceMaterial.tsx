import { DiceStyle } from "../types/DiceStyle";
import { GalaxyMaterial } from "./galaxy/GalaxyMaterial";
import { GemstoneMaterial } from "./gemstone/GemstoneMaterial";
import { NebulaMaterial } from "./nebula/NebulaMaterial";

export function DiceMaterial({ diceStyle }: { diceStyle: DiceStyle }) {
  switch (diceStyle) {
    case "GALAXY":
      return <GalaxyMaterial />;
    case "GEMSTONE":
      return <GemstoneMaterial />;
    case "NEBULA":
      return <NebulaMaterial />;
    default:
      throw Error(`Dice style ${diceStyle} error: not implemented`);
  }
}
