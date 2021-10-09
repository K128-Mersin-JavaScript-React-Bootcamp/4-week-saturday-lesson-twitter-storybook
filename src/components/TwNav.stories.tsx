import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwNav from "./TwNav";

export default {
  title: "Twitter/Nav",
  component: TwNav,
} as ComponentMeta<typeof TwNav>;

const Template: ComponentStory<typeof TwNav> = (args) => <TwNav {...args} />;

export const PrimaryNav = Template.bind({});
PrimaryNav.args = {};
