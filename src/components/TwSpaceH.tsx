import React from "react";
import TwSpace from "./TwSpace";

interface Props {
  size?: number;
  isVertical?: boolean;
}

export default function TwSpaceH({
  size = 12,
  isVertical = true,
  ...props
}: Props) {
  return <TwSpace size={size} isVertical={false} />;
}
