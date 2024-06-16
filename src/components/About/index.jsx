"use client"
import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-start justify-start  md:mt-30 md:mb-30">
      <main className="flex flex-col md:flex-row gap-15 justify-start items-start mt-20 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
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
              className="heading w-full md:w-5/12"
            >
              <div className='w-full flex flex-col gap-5 justify-center items-start'>
                <h1 className='text_gradient text-[24px]'>Ram Tanniru</h1>
                <p className='text-black text-[40px] font-bold dark:text-white leading-tight'>UI/UX Designer,Full Stack Product Developer.</p>
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
              className="heading w-full md:w-7/12"
            >
              <div className='w-full flex flex-col gap-5 justify-center items-start'>
                <h1 className='text-[36px] text-black dark:text-white'>I Enjoy Solving Problems With Scalable Solutions And Latest Technologies</h1>
                <p className='text-black dark:text-white'>I want to secure a challenging position in a reputable organization to expand my learnings,
                     knowledge, and skills. Secure a responsible career opportunity to fully utilize my training and skills, while making a significant
                      contribution to the success of the company.
                </p>
                <div className='w-full flex flex-col md:flex-row gap-3 justify-between items-start'>
                    <div className='flex flex-col justify-center items-start'>
                        <h6 className='text-[24px] text_gradient uppercase'>Projects done</h6>
                        <p className='text-black dark:text-white text-[48px]'>6+</p>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h6 className='text-[24px] text_gradient uppercase'>Education</h6>
                        <div className='flex flex-row gap-3 justify-center items-baseline'>
                            <p className='text-black dark:text-white text-[48px] p-0 m-0'>B.Tech</p>
                            <div className='flex items-end'>
                                <p className='text-black dark:text-white uppercase'>VIT-AP University</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
      </main>
    </div>
  )
}

export default About