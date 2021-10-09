import React from "react";
import TwSpace from "./TwSpace";

interface Props {
  size?: number;
  isVertical?: boolean;
}

export default function TwSpaceV({
  size = 12,
  isVertical = true,
  ...props
}: Props) {
  return <TwSpace size={size} isVertical={true} />;
}
