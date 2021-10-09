import React from "react";
import colors from "../constants/colors";
import TwIcon, { IconType } from "./TwIcon";
import TwButton, { ButtonType } from "./TwButton";
import { HashTagIcon } from "./TwIcon.stories";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as HomeRed } from "../assets/homeRed.svg";
import { ReactComponent as HomePrimary } from "../assets/homePrimary.svg";
import { ReactComponent as HashTag } from "../assets/hashtag.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { ReactComponent as Message } from "../assets/message.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as NewTweet } from "../assets/newTweet.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";
import { ReactComponent as List } from "../assets/list.svg";
import TwSpace from "./TwSpace";

export interface NavObject {
  text: string;
  type?: ButtonType;
  Icon: IconType;
}

interface Props {
  elements?: NavObject[];
}

export default function TwNav({ elements, ...props }: Props) {
  return (
    <div>
      {elements?.map((e) => (
        <>
          <TwButton text={e.text} Icon={e.Icon} type={e.type} />
          <TwSpace />
        </>
      ))}
      {/* <TwButton text="Anasayfa" Icon={Home} type={props.type} />
      <TwSpace />
      <TwButton text="Keşfet" Icon={HashTag} type={props.type} />
      <TwSpace />
      <TwButton text="Bildirimler" Icon={Notification} type={props.type} />
      <TwSpace />
      <TwButton text="Mesajlar" Icon={Message} type={props.type} />
      <TwSpace />
      <TwButton text="Yer işaretleri" Icon={Bookmark} type={props.type} />
      <TwSpace />
      <TwButton text="Listeler" Icon={List} type={props.type} />
      <TwSpace />
      <TwButton text="Profil" Icon={Profile} type={props.type} />
      <TwSpace />
      <TwButton text="Daha fazla" Icon={More} type={props.type} /> */}
    </div>
  );
}

const styles = (props: Props) => ({});
