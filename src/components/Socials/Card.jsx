import Image from 'next/image'
import React from 'react'

const Card = ({src,srcDark,app,username,link}) => {
  return (
    <a className='w-full h-full px-10 flex flex-col justify-center items-start gap-5 rounded-lg border border-[#BABABA]
     dark:border-white shadow-md' href={link}>
        <Image src={src} height={50} width={50} alt="social media logo" className='dark:hidden'/>
        <Image src={srcDark} height={50} width={50} alt="social media logo" className='hidden dark:block'/>
        <div className='flex flex-col gap-1'>
            <h6 className='text-black dark:text-white'>{app}</h6>
            <p className='text-[#86888a] dark:text-[#BABABA]'>@{username}</p>
        </div>
        <button className='rounded-md p-3 px-5 bg-blue-500 text-white'>Follow me</button>
    </a>
  )
}

export default Card