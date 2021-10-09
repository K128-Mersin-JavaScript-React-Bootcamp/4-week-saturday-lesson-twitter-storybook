import React, { useState } from 'react'
import colors from '../constants/colors'
import TwIcon from './TwIcon'


interface Props {
  type?: 'primary' | 'secondary' | 'warning' | 'error'
  icon?: string;
  text?: string; 
}

export default function TwButton({
  type = 'primary',
  icon,
  text,
  ...props
}: Props) {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" style={styles({type, hover}).container} onMouseEnter={toggleHover} onMouseLeave={toggleHover} {...props}>
      {icon && <TwIcon src={icon} />}
      <span style={styles({type}).text}>{text}</span>
      </a>
  )
}

const handlePrimaryStyle = (hover: boolean) => {
  return hover ? colors.primaryDark : colors.primary;
}


const styles = ({type, hover}:any) => ({
  container: {
    textDecoration: 'none',
    display: 'flex',
     justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '26px',
    width: '212px',
    height: '52px',
    padding: '0 32px',
    fontFamily: 'Helvetica, sans-serif',
    backgroundColor: type === 'primary' ? handlePrimaryStyle(hover) : colors.background, 
    color: type === 'primary' ? colors.background : colors.text,
    border: type === 'secondary' ? `2px solid ${colors.text}` : '0px',
  
  },
  text: {
    margin: '0 16px 0 20px',

  }
});