import React from 'react'


interface Props {
  size?: number; 
}

export default function TwSpace({
  size = 12,
  ...props
}: Props) {
  return (
    <div style={{height: size}}/>
  )
}
