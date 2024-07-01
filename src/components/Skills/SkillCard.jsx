import Image from 'next/image'
import React from 'react'

const SkillCard = ({src,srcDark,name}) => {
  return (
    <div className='w-5/12 md:w-1/6 flex flex-col justify-center items-center gap-5 p-5 py-10 dark:bg-[#1C1C22] bg-[#ffffff] rounded-md'>
        <Image src={src} height={100} width={100} alt='skill logo' className='dark:hidden'/>
        <Image src={srcDark} height={100} width={100} alt='skill logo' className='dark:block hidden'/>
        <h3 className='text-[24px] dark:text-white text-black'>{name}</h3>
    </div>
  )
}

export default SkillCard