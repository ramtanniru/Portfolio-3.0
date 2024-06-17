import Image from 'next/image'
import React from 'react'

const SkillCard = ({src,name}) => {
  return (
    <div className='w-5/12 md:w-1/6 flex flex-col justify-center items-center gap-5 p-5 py-10 bg-[#1C1C22] rounded-md'>
        <Image src={src} height={100} width={100} alt='skill logo'/>
        <h3 className='text-[24px]'>{name}</h3>
    </div>
  )
}

export default SkillCard