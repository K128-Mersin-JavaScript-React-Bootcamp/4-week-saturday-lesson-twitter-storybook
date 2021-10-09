import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TwButton from './TwButton';
import HomePrimary from '../assets/homePrimary.svg';


export default {
  title: 'Twitter/Button',
  component: TwButton,
} as ComponentMeta<typeof TwButton>;

const Template: ComponentStory<typeof TwButton> = (args) => <TwButton {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: 'Tweetle',
  type: 'primary'
};
export const HomeButton = Template.bind({});
HomeButton.args = {
  icon: HomePrimary,
  text: 'Tweetle',
  type: 'primary'
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: 'Tweetle',
  type: 'secondary'
};
export const IconButton = Template.bind({});
IconButton.args = {
  text: 'Tweetle',
  type: 'secondary'
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
