import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwHeader from "./TwHeader";

export default {
  title: "Twitter/Header",
  component: TwHeader,
} as ComponentMeta<typeof TwHeader>;

const Template: ComponentStory<typeof TwHeader> = (args) => (
  <TwHeader {...args} />
);

export const HeaderExample = Template.bind({});
HeaderExample.args = {};
