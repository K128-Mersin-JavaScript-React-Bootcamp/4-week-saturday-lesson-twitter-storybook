import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwNav from "./TwNav";
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

export default {
  title: "Twitter/Nav",
  component: TwNav,
} as ComponentMeta<typeof TwNav>;

const Template: ComponentStory<typeof TwNav> = (args) => <TwNav {...args} />;

export const PrimaryNav = Template.bind({});
PrimaryNav.args = {
  elements: [
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
      Icon: Home,
      text: "Anasayfa",
    },
    {
      type: "primary",
      Icon: Home,
      text: "Anasayfa",
    },
  ],
};
