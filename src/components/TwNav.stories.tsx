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
import { ReactComponent as Twitter } from "../assets/twitter.svg";

export default {
  title: "Twitter/Nav",
  component: TwNav,
} as ComponentMeta<typeof TwNav>;

const Template: ComponentStory<typeof TwNav> = (args) => <TwNav {...args} />;

export const PrimaryNav = Template.bind({});
PrimaryNav.args = {};
