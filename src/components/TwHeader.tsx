import React from "react";
import TwButton from "./TwButton";
import TwText from "./TwText";
import { ReactComponent as Glitter } from "../assets/glitter.svg";
import TwHairline from "./TwHairline";
import TwSpace from "./TwSpace";

interface Props {}

export default function TwHeader({ ...props }: Props) {
  return (
    <div style={styles().hairlineContainer}>
      <div style={styles().container}>
        <div style={{ display: "flex" }}>
          <TwSpace isVertical={false} size={24} />
          <TwText style={{ fontWeight: "bold" }}>Anasayfa</TwText>
        </div>
        <div style={{ display: "flex" }}>
          <TwButton Icon={Glitter} type={"secondary"} />
          <TwSpace isVertical={false} size={24} />
        </div>
      </div>

      <TwHairline />
    </div>
  );
}

const styles = () => ({
  hairlineContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as "column",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
