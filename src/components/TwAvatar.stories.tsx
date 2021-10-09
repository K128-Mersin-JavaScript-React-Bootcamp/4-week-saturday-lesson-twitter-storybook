import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwAvatar from "./TwAvatar";

export default {
  title: "Twitter/Avatar",
  component: TwAvatar,
} as ComponentMeta<typeof TwAvatar>;

const Template: ComponentStory<typeof TwAvatar> = (args) => (
  <TwAvatar {...args} />
);

export const AvatarExample = Template.bind({});
AvatarExample.args = {
  src:
    "https://pbs.twimg.com/profile_images/1349437841055641601/0k5dOKS0_400x400.jpg",
};
