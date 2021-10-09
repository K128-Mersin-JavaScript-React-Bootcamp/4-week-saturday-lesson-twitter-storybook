import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwHairline from "./TwHairline";

export default {
  title: "Twitter/Hairline",
  component: TwHairline,
} as ComponentMeta<typeof TwHairline>;

const Template: ComponentStory<typeof TwHairline> = (args) => (
  <TwHairline {...args} />
);

export const TwHairlineLittle = Template.bind({});
TwHairlineLittle.args = {};
