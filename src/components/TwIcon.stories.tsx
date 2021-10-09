import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TwIcon from './TwIcon';
import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as HomeRed } from '../assets/homeRed.svg';
import { ReactComponent as HomePrimary } from '../assets/homePrimary.svg';
import { ReactComponent as HashTag } from '../assets/hashtag.svg';
import { ReactComponent as Notification } from '../assets/notification.svg';
import { ReactComponent as Message } from '../assets/message.svg';
import { ReactComponent as Profile } from '../assets/profile.svg';
import { ReactComponent as More } from '../assets/more.svg';
import { ReactComponent as NewTweet } from '../assets/newTweet.svg';
import colors from '../constants/colors';

export default {
  title: 'TwIcon/Icon',
  component: TwIcon,
} as ComponentMeta<typeof TwIcon>;

const Template: ComponentStory<typeof TwIcon> = (args) => <TwIcon {...args} />;

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  Icon: Home,
  color: colors.primary
};
export const HomePrimaryIcon = Template.bind({});
HomePrimaryIcon.args = {
  Icon: Message,
  color: colors.background
};

export const HashTagIcon = Template.bind({});
HashTagIcon.args = {
  Icon: HashTag,
};

export const NotificationIcon = Template.bind({});
NotificationIcon.args = {
  Icon: Notification,
};
export const MessageIcon = Template.bind({});
MessageIcon.args = {
  Icon: Message,
};
export const ProfileIcon = Template.bind({});
ProfileIcon.args = {
  Icon: Profile,
};
export const MoreIcon = Template.bind({});
MoreIcon.args = {
  Icon: More,
};
export const NewTweetIcon = Template.bind({});
NewTweetIcon.args = {
  Icon: NewTweet,
};

