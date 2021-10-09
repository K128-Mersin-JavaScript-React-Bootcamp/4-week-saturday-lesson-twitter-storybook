import React from 'react'
import colors from '../constants/colors'
import TwIcon from './TwIcon'
import Home from '../assets/home.svg';
import TwButton from './TwButton';
import { HashTagIcon } from './TwIcon.stories';
import HashTag from '../assets/hashtag.svg';
import Notification from '../assets/notification.svg';
import Message from '../assets/message.svg';
import Bookmark from '../assets/bookmark.svg';
import List from '../assets/list.svg';
import Profile from '../assets/profile.svg';
import More from '../assets/more.svg';
import NewTweet from '../assets/newTweet.svg';
import TwSpace from './TwSpace';


interface Props {
}

export default function TwNav({
  ...props
}: Props) {
  return (
    <div>
      <TwButton text="Anasayfa" icon={Home} />
      <TwSpace/>
      <TwButton text="Keşfet" icon={HashTag} />
      <TwSpace/>
      <TwButton text="Bildirimler" icon={Notification} />
      <TwSpace/>
      <TwButton text="Mesajlar" icon={Message} />
      <TwSpace/>
      <TwButton text="Yer işaretleri" icon={Bookmark} />
      <TwSpace/>
      <TwButton text="Listeler" icon={List} />
      <TwSpace/>
      <TwButton text="Profil" icon={Profile} />
      <TwSpace/>
      <TwButton text="Daha fazla" icon={More} />
    </div>
  )
}


const styles = (props:Props) => ({
  // container: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: '26px',
  //   width: '212px',
  //   height: '52px',
  //   padding: '0 32px',
  //   fontFamily: 'Helvetica, sans-serif',
  //   backgroundColor: type === 'primary' ? colors.primary : colors.background, 
  //   color: type === 'primary' ? colors.background : colors.text,
  //   border: type === 'secondary' ? `2px solid ${colors.text}` : '0px',
  // },
  // text: {
  //   margin: '0 16px 0 20px',

  // }
});