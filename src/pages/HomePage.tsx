import React from "react";
// import  Home from '../assets/home.svg';
import TwNav, { NavObject } from "../components/TwNav";
import colors from "../constants/colors";
import { ReactComponent as Home } from "../assets/home.svg";

interface Props {}

const myElements: NavObject[] = [
  {
    type: "primary",
    Icon: Home,
    text: "Anasayfa",
  },
];

export default function HomePage(props: Props) {
  return (
    <div style={{ backgroundColor: colors.success }}>
      <TwNav elements={myElements} />
    </div>
  );
}
