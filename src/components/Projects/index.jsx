"use client"
import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';
// import {jobify} from "images/projects/jobify.png";
const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-start justify-start mt-30 md:mb-30">
      <main className="flex flex-col gap-15 justify-start items-start mt-20 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="heading"
            >
              <div className='w-full md:w-7/12 flex flex-col gap-5 justify-center items-start'>
                <h1 className='text-[36px] text_gradient'>Selected Projects</h1>
                <p className='text-black dark:text-white'>I do deep market research before starting any project the gives an unfair advantage to bring the best result for client</p>
              </div>
            </motion.div>
              {/* Project 1  */}
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
                className="project-1 w-full justify-center items-start rounded-md overflow-hidden"
              >
                  <Image src="/images/projects/jobify.png" height={600} width={1300} alt='jobify'/>
              </motion.div>
              {/* Project 2  */}
              {/* <motion.div
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
              className="project-1 w-full justify-center items-start rounded-md overflow-hidden"
            >
                <Image src="/images/projects/jobify.png" height={600} width={1300} alt='jobify'/>
              </motion.div> */}
      </main>
    </div>
  )
}

export default Projects