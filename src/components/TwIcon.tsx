import React from 'react'
// import  Home from '../assets/home.svg';
import { ReactComponent as Home } from '../assets/home.svg';
import colors from '../constants/colors';

export type IconType = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}>

interface Props {
  Icon: IconType;
  alt?: string;
  size?: number; 
  color?: string;
}

export default function TwIcon({
  Icon = Home,
  size = 24,
  alt="Icon",
  color=colors.text,
  ...props
}: Props) {
  return (
    <Icon width={size} height={size} title={alt} fill={color} {...props}/>
    
  )
}
