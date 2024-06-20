import Image from 'next/image'
import React from 'react'

const BlogCard2 = ({src,title,skills}) => {
  return (
    <div className='w-full p-5 bg-[#ffffff] dark:bg-[#1C1C22] rounded-md shadow-lg flex flex-col md:flex-row justify-start items-center gap-10'>
        <Image src={src} height={200} width={500} alt='blog image' loading='lazy'/>
        <div className='flex flex-col justify-center items-start gap-5'>
            <div className='flex flex-row justify-start items-start gap-3'>
                {skills.map((key) => (<div className='bg-black dark:bg-white px-5 p-2 text-white dark:text-black rounded-full' key={key}>{key}</div>))}
            </div>
            <h3 className='text-black dark:text-white font-semibold text-[24px]'>{title}</h3>
            <p className='text-[#161513] dark:text-[#F0F2F5]'>By Ram Tanniru</p>
        </div>
    </div>
  )
}

export default BlogCard2