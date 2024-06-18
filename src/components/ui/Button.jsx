import React from 'react'

const Button = ({text}) => {
  return (
    <div className='rounded-3xl gradient p-3 px-5 uppercase text-sm font-medium text-black dark:text-white'>
        {text}
    </div>
  )
}

export default Button