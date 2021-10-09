import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwNav, { NavObject } from "./TwNav";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as HashTag } from "../assets/hashtag.svg";
import { ReactComponent as Notification } from "../assets/notification.svg";
import { ReactComponent as Message } from "../assets/message.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as NewTweet } from "../assets/newTweet.svg";
import { ReactComponent as Bookmark } from "../assets/bookmark.svg";
import { ReactComponent as List } from "../assets/list.svg";

export default {
  title: "Twitter/Nav",
  component: TwNav,
} as ComponentMeta<typeof TwNav>;

const Template: ComponentStory<typeof TwNav> = (args) => <TwNav {...args} />;

const elements: NavObject[] = [
  {
    type: "primary",
    Icon: Home,
    text: "Anasayfa",
  },
  {
    type: "primary",
    Icon: HashTag,
    text: "Keşfet",
  },
  {
    type: "primary",
    Icon: Notification,
    text: "Bildirimler",
  },
  {
    type: "primary",
    Icon: Message,
    text: "Mesajlar",
  },
  {
    type: "primary",
    Icon: Bookmark,
    text: "Yer işaretleri",
  },
  {
    type: "primary",
    Icon: List,
    text: "Listeler",
  },
  {
    type: "primary",
    Icon: Profile,
    text: "Profil",
  },
  {
    type: "primary",
    Icon: More,
    text: "Daha fazla",
  },
];

export const PrimaryNav = Template.bind({});
PrimaryNav.args = {
  elements: elements.map((e) => ({ ...e, type: "secondary" })),
};
