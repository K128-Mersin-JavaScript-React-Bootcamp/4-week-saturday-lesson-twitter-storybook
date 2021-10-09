import React from "react";
import colors from "../constants/colors";

interface Props {
  isVertical?: boolean;
}

export default function TwHairline({ isVertical = false, ...props }: Props) {
  return (
    <div
      style={{
        height: isVertical ? "100vh" : "2px",
        width: isVertical ? "2px" : "100vh",
        backgroundColor: colors.hairline,
      }}
      {...props}
    />
  );
}
