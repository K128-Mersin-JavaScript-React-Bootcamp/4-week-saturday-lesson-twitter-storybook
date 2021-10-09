import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomePage from "./HomePage";

export default {
  title: "Twitter/Page",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const HomePagePrimary = Template.bind({});
HomePagePrimary.args = {
  type: "primary",
};
