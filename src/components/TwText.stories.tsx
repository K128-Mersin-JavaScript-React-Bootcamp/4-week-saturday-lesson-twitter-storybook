import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwText from "./TwText";

export default {
  title: "Twitter/Text",
  component: TwText,
} as ComponentMeta<typeof TwText>;

const Template: ComponentStory<typeof TwText> = (args) => <TwText {...args} />;

export const TextExample = Template.bind({});
TextExample.args = {
  children: "Hello",
};
