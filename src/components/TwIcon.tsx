import React from 'react'
import Home from '../assets/home.svg';


interface Props {
  src: string;
  alt?: string;
  size?: number; 
}

export default function TwIcon({
  src = Home,
  alt = "Icon",
  size = 24,
  ...props
}: Props) {
  return (
    <img src={src} alt={alt} {...props} width={size} height={size}/>
  )
}
