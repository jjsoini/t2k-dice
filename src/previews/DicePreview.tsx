import { styled } from "@mui/material/styles";

import { DiceStyle } from "../types/DiceStyle";
import { DiceType } from "../types/DiceType";

import * as t2k1Previews from "./t2k1";
import * as t2k2Previews from "./t2k2";
import * as t2k3Previews from "./t2k3";

const previews: Record<DiceStyle, Record<DiceType, string>> = {
  T2K1: t2k1Previews,
  T2K2: t2k2Previews,
  T2K3: t2k3Previews,
};

interface PreviewImageProps {
  size?: "small" | "medium" | "large";
}

const PreviewImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "size",
})<PreviewImageProps>(({ size }) => ({
  width: size === "small" ? "28px" : size === "medium" ? "34px" : "38px",
  height: size === "small" ? "28px" : size === "medium" ? "34px" : "38px",
}));

type DiePreviewProps = {
  diceType: DiceType;
  diceStyle: DiceStyle;
  size?: "small" | "medium" | "large";
};

export function DicePreview({ diceType, diceStyle, size }: DiePreviewProps) {
  return (
    <PreviewImage
      src={previews[diceStyle][diceType]}
      alt={`${diceStyle} ${diceType} preview`}
      size={size}
    />
  );
}
