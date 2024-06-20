import Image from 'next/image'
import React from 'react'

const BlogCard1 = ({src,title,skills}) => {
  return (
    <div className='p-4 bg-[#ffffff] dark:bg-[#1C1C22] rounded-md shadow-lg flex flex-col justify-start items-start gap-5'>
        <Image src={src} height={200} width={350} alt='blog image'/>
        <div className='flex flex-row justify-start items-start gap-3'>
            {skills.map((key) => (<div className='bg-black dark:bg-white px-5 p-2 text-white dark:text-black rounded-full' key={key}>{key}</div>))}
        </div>
        <h3 className='text-black dark:text-white font-semibold text-[24px]'>{title}</h3>
        <p className='text-[#161513] dark:text-[#F0F2F5]'>By Ram Tanniru</p>
    </div>
  )
}

export default BlogCard1