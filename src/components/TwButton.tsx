import React, { useState } from "react";
import colors from "../constants/colors";
import TwIcon, { IconType } from "./TwIcon";
import "./twButton.css";

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
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      // style={styles({ type }).container}
      className={["twButton", `twButton--${type}`].join(" ")}
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

const styles = ({ type }: any) => ({
  container: {
    // textDecoration: "none",
    // display: "flex",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // borderRadius: "26px",
    // width: "212px",
    // height: "52px",
    // padding: "0 32px",
    // fontFamily: "Helvetica, sans-serif",
    // backgroundColor: handleStyle({ type }),
    // color: type === "secondary" ? colors.text : colors.background,
  },
  text: {
    margin: "0 16px",
  },
});
