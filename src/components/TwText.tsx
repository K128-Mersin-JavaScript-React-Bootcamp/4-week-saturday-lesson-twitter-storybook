import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function TwText({ children, style, ...props }: Props) {
  return (
    <span style={{ ...styles().text, ...style }} {...props}>
      {children}
    </span>
  );
}

const styles = () => ({
  text: {
    fontFamily: "Helvetica, sans-serif",
  },
});
