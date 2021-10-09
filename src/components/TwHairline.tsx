import React from "react";
import colors from "../constants/colors";

interface Props {
  isVertical?: boolean;
}

export default function TwHairline({ isVertical = false, ...props }: Props) {
  return (
    <div
      style={{
        height: isVertical ? "100vh" : "1px",
        width: isVertical ? "1px" : "initial",
        backgroundColor: colors.hairline,
      }}
      {...props}
    />
  );
}
