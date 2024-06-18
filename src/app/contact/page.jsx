"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const contactPage = () => {
  return (
<div className="min-h-screen flex flex-col gap-20 items-center justify-center  md:mt-0 md:mb-0">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-20 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
            <div className='w-full flex flex-col md:flex-row justify-center items-center md:justify-between gap-20'>
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
                className="flex flex-col justify-start items-start gap-20 w-full md:w-1/2"
                >
                  <h1 className='text-[40px] font-bold text_gradient'>
                    Get in touch
                  </h1>
                  <p className='text-black dark:text-white'>Have a project in mind? Looking to partner or work together?
                     Reach out through the form and I{`'`}ll get back to you in the next 48 hours.</p>
                  <div className='flex flex-row gap-5'>
                    
                  </div>
              </motion.div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default contactPage