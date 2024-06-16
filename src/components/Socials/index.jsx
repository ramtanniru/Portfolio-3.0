"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Card from './card'
const Socials = () => {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center  md:mt-30 md:mb-30">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-20 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
            <motion.div
            variants={{
                hidden: {
                opacity: 0,
                x: -20,
                },
                visible: {
                opacity: 1,
                x: 0,
                },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="heading w-full"
            >
                <div className='flex flex-col gap-5 justify-center items-start'>
                    <h1 className='text_gradient text-[40px]'>Socials</h1>
                    {/* <p className='text-black text-[40px] font-bold dark:text-white leading-tight'>UI/UX Designer,Full Stack Product Developer.</p> */}
                </div>
            </motion.div>
              
            <div className="w-full grid grid-rows-3 grid-cols-4 gap-5 min-h-screen">
                <div className="row-span-1 col-span-1">
                    <Card app={"Instagram"} username={"ram_tanniru_"} link={"https://www.instagram.com/ram_tanniru_"} src={"images/social/insta.svg"} key={0}/>
                </div>
                <div className="row-span-1 col-span-1 bg-gray-300">

                </div>
                <div className="row-span-1 col-span-2 bg-gray-300"></div>
                <div className="row-span-2 col-span-2 bg-gray-400"></div>
                <div className="row-span-1 col-span-1 bg-gray-500"></div>
                <div className="row-span-1 col-span-1 bg-gray-600"></div>
                <div className="row-span-1 col-span-1 bg-gray-700"></div>
                <div className="row-span-1 col-span-1 bg-gray-700"></div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Socials