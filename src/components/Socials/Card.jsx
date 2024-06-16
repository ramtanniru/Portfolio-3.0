import Image from 'next/image'
import React from 'react'

const Card = ({src,app,username,link}) => {
  return (
    <a className='w-full h-full px-10 flex flex-col justify-center items-start gap-5 rounded-md border border-[#BABABA]
     dark:border-white shadow-md' href={link}>
        <Image src={src} height={30} width={30} alt="social media logo"/>
        <h6 className='text-black dark:text-white'>{app}</h6>
        <p className='text-[#86888a] dark:text-[#BABABA]'>@{username}</p>
        <button className='rounded-full p-3 px-5 bg-blue-500 text-white'>Follow me</button>
    </a>
  )
}

export default Card