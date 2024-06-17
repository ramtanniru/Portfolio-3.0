"use client"
import React from 'react'
import { motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center  md:mt-0 md:mb-0">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-20 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
            <div className='w-full flex flex-col md:flex-row justify-center items-center'>
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
              className=""
              >
                <div className='text-[40px] font-bold text-black dark:text-white'>
                  Hi, I am<br/>
                  <span className='text-[40px] font-bold text_gradient'>Ram Tanniru</span>
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
              className="flex flex-col justify-start items-center gap-5"
              >
                <p className='text-black dark:text-white'>I am in my final year of BTech at VIT-AP University,
                   specializing in computer science. As a coding enthusiast,
                    I am a self-driven individual and a quick learner.</p>
              </motion.div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default AboutHero