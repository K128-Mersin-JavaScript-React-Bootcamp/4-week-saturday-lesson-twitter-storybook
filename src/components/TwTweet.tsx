import React from "react";
import colors from "../constants/colors";
import TwAvatar from "./TwAvatar";
import TwButton from "./TwButton";
import TwText from "./TwText";
import { ReactComponent as Comment } from "../assets/comment.svg";
import { ReactComponent as Retweet } from "../assets/retweet.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { ReactComponent as Share } from "../assets/share.svg";
import TwSpace from "./TwSpace";
import TwSpaceH from "./TwSpaceH";
import TwSpaceV from "./TwSpaceV";
import TwHairline from "./TwHairline";

interface Props {
  imageUrl: string;
  userNameSurname: string;
  username: string;
  date: string;
  tweetText: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function TwTweet({
  children,
  imageUrl,
  userNameSurname,
  username,
  date,
  tweetText,
  style,
  ...props
}: Props) {
  return (
    <div style={{ flexDirection: "row" }}>
      <TwSpaceV />
      <div style={{ display: "flex" }}>
        <TwSpaceH />
        <TwAvatar src={imageUrl} />
        <TwSpaceH />
        <div style={{ flexDirection: "row", flex: 1, maxWidth: 500 }}>
          <div style={{ display: "flex" }}>
            <TwText style={{ fontWeight: "bold" }}>{userNameSurname}</TwText>
            <TwSpaceH size={6} />
            <TwText style={{ color: colors.textLighter }}>@{username}</TwText>
            <TwSpaceH size={6} />
            <TwText style={{ color: colors.textLighter }}>{"·"}</TwText>
            <TwSpaceH size={6} />
            <TwText style={{ color: colors.textLighter }}>{date}</TwText>
          </div>
          <TwSpaceV size={6} />
          <div>
            <TwText>{tweetText}</TwText>
          </div>
          <TwSpaceV size={6} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TwButton Icon={Comment} type={"secondary"} />
            <TwButton Icon={Retweet} type={"secondary"} />
            <TwButton Icon={Like} type={"secondary"} />
            <TwButton Icon={Share} type={"secondary"} />
          </div>
        </div>
      </div>
      <TwSpaceV size={6} />
      <TwHairline isVertical={false} />
    </div>
  );
}
