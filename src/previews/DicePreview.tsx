import { styled } from "@mui/material/styles";

import { DiceStyle } from "../types/DiceStyle";
import { DiceType } from "../types/DiceType";

import * as galaxyPreviews from "./galaxy";
import * as gemstonePreviews from "./gemstone";
import * as nebulaPreviews from "./nebula";

const previews: Record<DiceStyle, Record<DiceType, string>> = {
  GALAXY: galaxyPreviews,
  GEMSTONE: gemstonePreviews,
  NEBULA: nebulaPreviews,
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
