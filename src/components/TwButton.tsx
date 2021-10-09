import React, { useState } from "react";
import colors from "../constants/colors";
import TwIcon, { IconType } from "./TwIcon";
import "./twButton.css";

export type ButtonType =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "success"
  | "brand";

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
  const handleColor = (type: ButtonType) => {
    if (type === "secondary") return colors.text;
    if (type === "brand") return colors.primary;
    return colors.background;
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      // style={styles({ type }).container}
      className={[
        "twButton",
        `twButton--${type}`,
        !text && "twButton--only-icon",
        !Icon && "twButton--only-text",
      ].join(" ")}
      {...props}
    >
      {Icon && <TwIcon Icon={Icon} color={handleColor(type)} />}
      {text && <span style={styles({ type }).text}>{text}</span>}
    </a>
  );
}

const styles = ({ type }: any) => ({
  container: {},
  text: {
    margin: "0 16px",
  },
});
