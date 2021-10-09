import React from "react";

interface Props {
  size?: number;
  isVertical?: boolean;
}

export default function TwSpace({
  size = 12,
  isVertical = true,
  ...props
}: Props) {
  return (
    <div
      style={{
        height: isVertical ? size : "initial",
        width: isVertical ? "initial" : size,
      }}
      {...props}
    />
  );
}
