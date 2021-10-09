import React, { useState } from "react";
import colors from "../constants/colors";
import TwIcon, { IconType } from "./TwIcon";

export type ButtonType =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "success";

interface Props {
  type?: ButtonType;
  Icon?: IconType;
  text?: string;
}

export default function TwButton({
  type = "primary",
  Icon,
  text,
  ...props
}: Props) {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      style={styles({ type, hover }).container}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      {...props}
    >
      {Icon && (
        <TwIcon
          Icon={Icon}
          color={type === "secondary" ? colors.text : colors.background}
        />
      )}
      <span style={styles({ type }).text}>{text}</span>
    </a>
  );
}

const handleStyle = ({ type, hover }: any) => {
  if (hover) {
    return colors.primaryDark;
  }

  switch (type) {
    case "primary":
      return colors.primary;
    case "secondary":
      return colors.background;
    case "warning":
      return colors.warning;
    case "danger":
      return colors.danger;
    case "success":
      return colors.success;
    default:
      return colors.background;
  }
};

const styles = ({ type, hover }: any) => ({
  container: {
    textDecoration: "none",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "26px",
    width: "212px",
    height: "52px",
    padding: "0 32px",
    fontFamily: "Helvetica, sans-serif",
    backgroundColor: handleStyle({ type, hover }),
    color: type === "secondary" ? colors.text : colors.background,
    border: type === "secondary" ? `2px solid ${colors.text}` : "0px",
  },
  text: {
    margin: "0 16px 0 20px",
  },
});
