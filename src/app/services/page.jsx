"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const ServicesPage = () => {
  return (
<div className="min-h-screen flex flex-col gap-20 items-center justify-center  md:mt-0 md:mb-0">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-30 mb-30 mx-7 md:mt-50 md:mb-30 md:mx-30">
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
              className="flex justify-start w-full items-start"
              >
                <div className='text-[40px] font-bold text-black dark:text-white'>
                  Our
                  <span className='text-[40px] font-bold text_gradient'> Services</span>
                </div>
            </motion.div>
            <div className='w-full flex flex-col justify-center items-center gap-30'>
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
                    className="w-full flex flex-col md:flex-row gap-20 justify-between items-center"
                    >
                        <div className='flex flex-col gap-5 justify-center items-start w-full md:w-1/2'>
                            <h1 className='text-[36px] font-bold text-black dark:text-white'>Web Development</h1>
                            <p className='text-black dark:text-white'>I offer comprehensive web development services utilizing the latest technologies like Next.js, React.js, and Node.js.
                                With expertise in both front-end frameworks such as Tailwind CSS and Bootstrap, and back-end solutions including MongoDB and Flask, I deliver robust and
                                scalable web applications tailored to your needs. Let{`'`}s build seamless digital experiences together.</p>
                            <Button text={"Hire me"}/>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <Image src="/images/services/web.jpg" height={400} width={400} alt='image'/>
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
                    className="w-full flex flex-col md:flex-row gap-20 justify-between items-center"
                    >
                        <div className='w-full md:w-1/3'>
                            <Image src="/images/services/figma.jpg" height={400} width={400} alt='image'/>
                        </div>
                        <div className='flex flex-col gap-5 justify-center items-start w-full md:w-1/2'>
                            <h1 className='text-[36px] font-bold text-black dark:text-white'>UI/UX Design</h1>
                            <p className='text-black dark:text-white'>I offer comprehensive web development services utilizing the latest technologies like Next.js, React.js, and Node.js.
                                With expertise in both front-end frameworks such as Tailwind CSS and Bootstrap, and back-end solutions including MongoDB and Flask, I deliver robust and
                                scalable web applications tailored to your needs. Let{`'`}s build seamless digital experiences together.</p>
                            <Button text={"Hire me"}/>
                        </div>
                </motion.div>

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
                    className="w-full flex flex-col md:flex-row gap-20 justify-between items-center"
                    >
                        <div className='flex flex-col gap-5 justify-center items-start w-full md:w-1/2'>
                            <h1 className='text-[36px] font-bold text-black dark:text-white'>App Development</h1>
                            <p className='text-black dark:text-white'>I offer comprehensive web development services utilizing the latest technologies like Next.js, React.js, and Node.js.
                                With expertise in both front-end frameworks such as Tailwind CSS and Bootstrap, and back-end solutions including MongoDB and Flask, I deliver robust and
                                scalable web applications tailored to your needs. Let{`'`}s build seamless digital experiences together.</p>
                            <Button text={"Hire me"}/>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <Image src="/images/services/web.jpg" height={400} width={400} alt='image'/>
                        </div>
                </motion.div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default ServicesPage