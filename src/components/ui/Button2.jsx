import React from 'react'

const Button2 = ({text,link}) => {
  return (
    <a href={link} target='_blank' className='border border-black dark:border-white border-md rounded-3xl p-3 px-5 uppercase text-sm text-black dark:text-white'>
      {text}
    </a>
  )
}

export default Button2