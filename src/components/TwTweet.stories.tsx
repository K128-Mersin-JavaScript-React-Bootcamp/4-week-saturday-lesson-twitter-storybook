import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwTweet from "./TwTweet";

export default {
  title: "Twitter/Tweet",
  component: TwTweet,
} as ComponentMeta<typeof TwTweet>;

const Template: ComponentStory<typeof TwTweet> = (args) => (
  <TwTweet {...args} />
);

export const TweetExample = Template.bind({});
TweetExample.args = {
  username: "ZaferAyan",
  userNameSurname: "Zafer AYAN",
  imageUrl:
    "https://pbs.twimg.com/profile_images/1349437841055641601/0k5dOKS0_400x400.jpg",
  tweetText: "Merhaba Dünya",
  date: "13h",
};
