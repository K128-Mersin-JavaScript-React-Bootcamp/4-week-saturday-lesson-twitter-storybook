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
  text: "Tweetle",
  type: "primary",
};
export const HomeButton = Template.bind({});
HomeButton.args = {
  Icon: Home,
  text: "Tweetle",
  type: "primary",
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: "Tweetle",
  type: "secondary",
};
export const DangerButton = Template.bind({});
DangerButton.args = {
  text: "Tweetle",
  type: "danger",
  Icon: Message,
};
export const WarningButton = Template.bind({});
WarningButton.args = {
  text: "Tweetle",
  type: "warning",
  Icon: Message,
};
export const IconButton = Template.bind({});
IconButton.args = {
  text: "Tweetle",
  type: "secondary",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   // label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   // size: 'large',
//   // label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   // size: 'small',
//   // label: 'Button',
// };
