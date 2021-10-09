import React from "react";

interface Props {
  size?: number;
  src: string;
  style?: React.CSSProperties;
}

export default function TwAvatar({ size = 48, src, style, ...props }: Props) {
  return (
    <img
      src={src}
      alt="Avatar"
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
}
