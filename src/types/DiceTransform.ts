import { DiceQuaternion } from "./DiceQuaternion";
import { DiceVector3 } from "./DiceVector3";

export interface DiceTransform {
  position: DiceVector3;
  rotation: DiceQuaternion;
}
