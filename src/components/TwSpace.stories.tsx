import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwSpace from "./TwSpace";

export default {
  title: "Twitter/Space",
  component: TwSpace,
} as ComponentMeta<typeof TwSpace>;

const Template: ComponentStory<typeof TwSpace> = (args) => (
  <TwSpace {...args} />
);

export const SpaceLittle = Template.bind({});
SpaceLittle.args = {
  size: 12,
};
