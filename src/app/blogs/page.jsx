"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import BlogCard1 from '@/components/ui/BlogCard1'
import Scroll from '@/components/Hero/Scroll'
import { Tab, Tabs } from '@nextui-org/react'
import BlogCard2 from '@/components/ui/BlogCard2'
import { blogs } from '../../../utils/blogs'

const BlogsPage = () => {
  return (
<div className="min-h-screen flex flex-col gap-20 items-center justify-center bg-[#F0F2F5] dark:bg-black md:mt-0 md:mb-0">
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
              className="flex flex-col justify-center gap-10 w-full items-center"
              >
                <div className='text-[40px] text-center font-bold text-black dark:text-white'>
                  Blogs and Articles<br/>for
                  <span className='text-[40px] font-bold text_gradient'> Competetive Programming</span>
                </div>
                <div className='flex flex-col md:flex-row gap-10 md:gap-30 justify-center md:justify-between items-center'>
                    <BlogCard1 skills={["binary search","array"]} src={"/images/social/leetcode.jpeg"} title={"Maximum sum of an array"}/>
                    <BlogCard1 skills={["binary search","array"]} src={"/images/social/leetcode.jpeg"} title={"Maximum sum of an array"}/>
                </div>
            </motion.div>
        </main>

        <main className="flex flex-col gap-10 justify-center items-center mt-30 mb-30 mx-7 md:mt-50 md:mb-30 md:mx-30">
            <Scroll/>
        </main>

        <main className="flex flex-col gap-10 justify-center items-center mt-30 mb-30 mx-7 md:mt-90 md:mb-30 md:mx-30">
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
              className="flex flex-col justify-start gap-10 w-full items-start"
              >
                <h1 className='text_gradient text-[40px]'>Recent insights</h1>
                <Tabs aria-label="Options" color="primary" variant="light"
                size="lg"
                classNames={{
                    tab:"text-white bg-[#ffffff] dark:bg-[#1c1c22] px-10 rounded-full",
                    cursor:"bg-black dark:bg-white rounded-full",
                    tabContent:"",
                    tabList:"",
                    panel:"w-full",
                    base:""
                }}
                className='w-full flex justify-start items-start'
                >
                    <Tab key={"leetcode"} title={
                        <div className='text-black dark:text-white group-data-[selected=true]:text-white group-data-[selected=true]:dark:text-black'>Leetcode</div>
                    }>
                        <div className='flex flex-col gap-5'>{
                            blogs["leetcode"].map((blog) => (
                                <a href={`/blogs/${blog.id}`} className='w-full' key={blog.id}>
                                    <BlogCard2 skills={blog.skills} src={blog.src} title={blog.title}/>
                                </a>
                            ))
                        }</div>
                    </Tab>
                    <Tab key={"gfg"} title={
                        <div className='text-black dark:text-white group-data-[selected=true]:text-white group-data-[selected=true]:dark:text-black'>Geeks For Geeks</div>
                    }>
                        <div className='flex flex-col gap-5'>{
                            blogs["gfg"].map((blog) => (
                                <a href={`/blogs/${blog.id}`} className='w-full' key={blog.id}>
                                    <BlogCard2 skills={blog.skills} src={blog.src} title={blog.title}/>
                                </a>
                            ))
                        }</div>
                    </Tab>
                </Tabs>
            </motion.div>
        </main>
      </div>
    </div>
  )
}

export default BlogsPage
