import { IconType } from "./TwIcon";
import TwButton, { ButtonType } from "./TwButton";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as HashTag } from "../assets/hashtag.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { ReactComponent as Message } from "../assets/message.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";
import { ReactComponent as List } from "../assets/list.svg";
import TwSpace from "./TwSpace";

export interface NavObject {
  text?: string;
  type?: ButtonType;
  Icon?: IconType;
}

interface Props {
  elements?: NavObject[];
}

const defaultElements: NavObject[] = [
  {
    type: "brand",
    Icon: Twitter,
  },
  {
    type: "secondary",
    Icon: Home,
    text: "Anasayfa",
  },
  {
    type: "secondary",
    Icon: HashTag,
    text: "Keşfet",
  },
  {
    type: "secondary",
    Icon: Notification,
    text: "Bildirimler",
  },
  {
    type: "secondary",
    Icon: Message,
    text: "Mesajlar",
  },
  {
    type: "secondary",
    Icon: Bookmark,
    text: "Yer işaretleri",
  },
  {
    type: "secondary",
    Icon: List,
    text: "Listeler",
  },
  {
    type: "secondary",
    Icon: Profile,
    text: "Profil",
  },
  {
    type: "secondary",
    Icon: More,
    text: "Daha fazla",
  },
  {
    type: "primary",
    text: "Tweetle",
  },
];

export default function TwNav({ elements = defaultElements, ...props }: Props) {
  return (
    <div>
      {elements?.map((e) => (
        <>
          <TwButton text={e.text} Icon={e.Icon} type={e.type} />
          <TwSpace />
        </>
      ))}
    </div>
  );
}
