import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TwIcon from './TwIcon';
import Home from '../assets/home.svg';
import HomeRed from '../assets/homeRed.svg';
import HomePrimary from '../assets/homePrimary.svg';
import HashTag from '../assets/hashtag.svg';
import Notification from '../assets/notification.svg';
import Message from '../assets/message.svg';
import Profile from '../assets/profile.svg';
import More from '../assets/more.svg';
import NewTweet from '../assets/newTweet.svg';

export default {
  title: 'TwIcon/Icon',
  component: TwIcon,
} as ComponentMeta<typeof TwIcon>;

const Template: ComponentStory<typeof TwIcon> = (args) => <TwIcon {...args} />;

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  src: Home
};
export const HomeRedIcon = Template.bind({});
HomeRedIcon.args = {
  src: Message
};
export const HomePrimaryIcon = Template.bind({});
HomePrimaryIcon.args = {
  src: Message
};

export const HashTagIcon = Template.bind({});
HashTagIcon.args = {
  src: HashTag,
};

export const NotificationIcon = Template.bind({});
NotificationIcon.args = {
  src: Notification,
};
export const MessageIcon = Template.bind({});
MessageIcon.args = {
  src: Message,
};
export const ProfileIcon = Template.bind({});
ProfileIcon.args = {
  src: Profile,
};
export const MoreIcon = Template.bind({});
MoreIcon.args = {
  src: More,
};
export const NewTweetIcon = Template.bind({});
NewTweetIcon.args = {
  src: NewTweet,
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
