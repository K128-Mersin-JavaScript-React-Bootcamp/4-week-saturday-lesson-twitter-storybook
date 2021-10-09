import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwButton from "./TwButton";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Message } from "../assets/message.svg";

export default {
  title: "Twitter/Button",
  component: TwButton,
} as ComponentMeta<typeof TwButton>;

const Template: ComponentStory<typeof TwButton> = (args) => (
  <TwButton {...args} />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  Icon: Home,
  text: "Tweetle",
  type: "primary",
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  Icon: Home,
  text: "Tweetle",
  type: "secondary",
};
export const WarningButton = Template.bind({});
WarningButton.args = {
  text: "Tweetle",
  type: "warning",
  Icon: Home,
};
export const DangerButton = Template.bind({});
DangerButton.args = {
  text: "Tweetle",
  type: "danger",
  Icon: Home,
};
export const SuccessButton = Template.bind({});
SuccessButton.args = {
  text: "Tweetle",
  type: "success",
  Icon: Home,
};
