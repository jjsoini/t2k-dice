import { DiceStyle } from "../types/DiceStyle";
import { T2K1Material } from "./t2k1/T2K1Material";
import { T2K2Material } from "./t2k2/T2K2Material";
import { T2K3Material } from "./t2k3/T2K3Material";

export function DiceMaterial({ diceStyle }: { diceStyle: DiceStyle }) {
  switch (diceStyle) {
    case "T2K1":
      return <T2K1Material />;
    case "T2K2":
      return <T2K2Material />;
    case "T2K3":
      return <T2K3Material />;
    default:
      throw Error(`Dice style ${diceStyle} error: not implemented`);
  }
}
