"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center  md:mt-0 md:mb-0">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-20 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
            
            {/* hero section  */}

            <div className='w-full flex flex-col gap-5 md:flex-row justify-between items-center mt-10 md:mt-30 mb-10 md:mb-20'>
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
              className="w-full md:w-5/12"
              >
                <div className='text-[40px] font-bold text-black dark:text-white'>
                  Hi, I am<br/>
                  <span className='text-[40px] font-bold text_gradient'>Tanniru Leela Sai Ram</span>
                </div>
              </motion.div>
              <motion.div
              variants={{
                  hidden: {
                  opacity: 0,
                  x: 20,
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
              className="w-full md:w-7/12 flex flex-col justify-start items-start gap-5"
              >
                <p className='text-black dark:text-white'>I am in my final year of BTech at VIT-AP University,
                   specializing in computer science. As a coding enthusiast,
                    I am a self-driven individual and a quick learner. I love 
                    crafting interfaces that delight users and helo businesses grow.
                </p>
                <div className='flex flex-row gap-5 justify-center items-center'>
                    <Image src="images/about/insta.svg" height={50} width={50} alt='insta'/>
                    <Image src="images/about/github.svg" height={50} width={50} alt='github'/>
                    <Image src="images/about/twitter.svg" height={50} width={50} alt='twitter'/>
                    <Image src="images/about/linkedin.svg" height={50} width={50} alt='linkein'/>
                </div>
              </motion.div>
            </div>

            {/* images  */}

            <div className='w-full h-[600px] grid grid-rows-2 grid-cols-4 gap-5'>
                <div className='row-span-2 col-span-1 bg-white'>
                    
                </div>
                <div className='row-span-2 col-span-2 bg-white'></div>
                <div className='row-span-1 col-span-1 bg-white'></div>
                <div className='row-span-1 col-span-1 bg-white'></div>
            </div>

            <div className='w-full flex flex-col gap-5 md:flex-row justify-center items-center my-5 md:my-10'>
                <div className='flex flex-row md:flex-col justify-start md:justify-center items-center gap-3 w-full md:w-1/3'>
                    <h1 className='text-[40px] font-bold text_gradient'>
                        6+
                    </h1>
                    <p className='text-black dark:text-white'>Successfully Completed Projects</p>
                </div>

                <div className='flex flex-row md:flex-col justify-start md:justify-center items-center gap-3 w-full md:w-1/3'>
                    <h1 className='text-[40px] font-bold text_gradient'>
                        6+
                    </h1>
                    <p className='text-black dark:text-white'>Awards In University Level Hackathons</p>
                </div>

                <div className='flex flex-row md:flex-col justify-start md:justify-center items-center gap-3 w-full md:w-1/3'>
                    <h1 className='text-[40px] font-bold text_gradient'>
                        1564
                    </h1>
                    <p className='text-black dark:text-white'>Contest Rating In Leetcode</p>
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default AboutPage