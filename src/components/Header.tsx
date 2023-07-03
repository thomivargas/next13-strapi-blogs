import React from 'react'

interface Props {
    text: string  
}

const Header = ({text}: Props)=> {
  return (
    <div>
      <h1 className='text-5xl front-extrabold dark:text-white text-center'>{text}</h1>
    </div>
  )
}

export default Header
