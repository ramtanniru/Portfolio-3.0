"use client"
import React from 'react'
import { motion } from 'framer-motion'
const End = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center  md:mt-20 md:mb-50">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-20 mb-20 mx-7 md:mt-30 md:mb-0 md:mx-30">
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
                <h1 className='text-black dark:text-white font-bold text-3xl md:text-[64px] leading-tight'>
                    See the impact of good, conversion-oriented design on your business.<br/>
                    <span>
                        <a className='text-3xl md:text-[64px] underline underline-offset-[20px] text_gradient'>
                            Let{`'`}s work together {`->`}
                        </a>
                    </span>
                </h1>
            </motion.div>
        </main>
      </div>
    </div>
  )
}

export default End