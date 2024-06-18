"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Scroll from '@/components/Hero/Scroll'
import { education, work } from '../../../utils/data'

const AboutPage = () => {
    const bgstyle = (src) => ({
        backgroundImage : `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    });
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

        {/* Scroll */}

        <div className='my-30 h-[30px]'>
                <Scroll/>
        </div>

        <main className='min-h-screen flex flex-col gap-10 justify-center items-center mt-20 mb-0 mx-7 md:mt-50 md:mb-0 md:mx-30'>
            <div className='w-full flex flex-col md:flex-row justify-start md:justify-between items-start'>
                <div className='w-full md:w-5/12 flex flex-col gap-5 justify-start items-start'>
                    <h1 className='text_gradient text-[40px] font-bold'>Education</h1>
                    {
                        education.map((key => (
                            <div className='w-full flex flex-col justify-between items-start gap-10' key={key}>
                                <div className='w-full flex flex-col md:flex-row justify-between items-baseline gap-10'>
                                    <div className='flex flex-col justify-start items-start'>
                                        <h3 className='text-[32px] font-semibold text-black dark:text-white'>
                                            {key.school}
                                        </h3>
                                        <p className='text-black dark:text-[#B9BBBC]'>{key.degree}</p>
                                    </div>
                                    <p className='text-black dark:text-[#838384]'>{key.duration}</p>
                                </div>
                                <hr className='w-full border-[#838384]'></hr>
                            </div>
                        )))
                    }
                </div>
                <div className='w-full md:w-5/12 flex flex-col gap-5 justify-start items-start'>
                    <h1 className='text_gradient text-[40px] font-bold'>Work Experience</h1>
                        {
                            work.map((key => (
                                <div className='w-full flex flex-col justify-between items-start gap-10' key={key}>
                                    <div className='w-full flex flex-col md:flex-row justify-between items-baseline gap-10'>
                                        <div className='flex flex-col justify-start items-start'>
                                            <h3 className='text-[32px] font-semibold text-black dark:text-white'>
                                                {key.place}
                                            </h3>
                                            <p className='text-black dark:text-[#B9BBBC]'>{key.role}</p>
                                        </div>
                                        <p className='text-black dark:text-[#838384]'>{key.duration}</p>
                                    </div>
                                    <hr className='w-full border-[#838384]'></hr>
                                </div>
                            )))
                        }
                </div>
            </div>

            {/* Achievements */}

            <div className='w-full md:mt-20 flex flex-col justify-center items-start gap-5'>
                <h1 className='text_gradient text-[40px] font-bold'>Achievements</h1>
                <p className='text-black dark:text-white w-7/12'>All the awards and achievements won by me during my journey of 4 years in VIT-AP University</p>
            </div>
            <div className="min-h-screen w-full grid grid-rows-3 grid-cols-4 gap-5 mb-10 md:mb-0">
                <div className="row-span-1 col-span-1 bg-white" style={bgstyle("/images/achievements/mern.pdf")}>
                </div>
                <div className="row-span-1 col-span-1 bg-white" style={bgstyle("/images/achievements/awscp.pdf")}>
                </div>
                <div className="row-span-1 col-span-2 bg-gray-300" style={bgstyle("/images/achievements/uniday.jpg")}>
                </div>
                <div className="row-span-2 col-span-2 bg-gray-400" style={bgstyle("/images/achievements/kgf.jpg")}>
                </div>
                <div className="row-span-1 col-span-1 bg-white" style={bgstyle("/images/achievements/ecs.pdf")}>
                </div>
                <div className="row-span-1 col-span-1 bg-white" style={bgstyle("/images/achievements/codewithgear.jpeg")}>
                </div>
                <div className="row-span-1 col-span-1 bg-white" style={bgstyle("/images/achievements/hackquest.pdf")}>
                </div>
                <div className="row-span-1 col-span-1 bg-white" style={bgstyle("/images/achievements/techlite.png")}>
                </div>
            </div>

            {/* social */}

            <div className="w-full flex items-start justify-start md:items-center md:justify-center min-h-screen">
                <div className="relative flex justify-center items-center w-full max-w-4xl">
                    <div className="absolute -bottom-full md:bottom-1/4 md:left-2/3 w-10/12 md:w-7/12 z-10 p-6 md:px-10 bg-black dark:bg-white shadow-lg transform md:-translate-x-1/2">
                    <h2 className="text-3xl font-bold text_gradient mb-4">
                        Follow me
                    </h2>
                    <p className="text-white dark:text-gray-700 mb-4">
                        I'm Ram Tanniru, a designer who works with startups to build brands.
                    </p>
                    <hr className="border-gray-300 mb-4" />
                    <div className="w-full flex flex-row justify-between">
                        <a href="#">
                            <Image src="images/icons/fb_light.svg" height={24} width={24} alt="icon" className='dark:hidden'/>
                            <Image src="images/icons/fb_dark.svg" height={24} width={24} alt="icon" className='hidden dark:block'/>
                        </a>
                        <a href="#">
                            <Image src="images/icons/linkedin_light.svg" height={24} width={24} alt="icon" className='dark:hidden'/>
                            <Image src="images/icons/linkedin_dark.svg" height={24} width={24} alt="icon" className='hidden dark:block'/>
                        </a>
                        <a href="#">
                            <Image src="images/icons/github_light.svg" height={24} width={24} alt="icon" className='dark:hidden'/>
                            <Image src="images/icons/github_dark.svg" height={24} width={24} alt="icon" className='hidden dark:block'/>
                        </a>
                        <a href="#">
                            <Image src="images/icons/insta_light.svg" height={24} width={24} alt="icon" className='dark:hidden'/>
                            <Image src="images/icons/insta_dark.svg" height={24} width={24} alt="icon" className='hidden dark:block'/>
                        </a>
                        <a href="#">
                            <Image src="images/icons/twitter_light.svg" height={24} width={24} alt="icon" className='dark:hidden'/>
                            <Image src="images/icons/twitter_dark.svg" height={24} width={24} alt="icon" className='hidden dark:block'/>
                        </a>
                    </div>
                    </div>
                    <div className="relative w-full h-64 md:h-auto">
                        <Image src="images/assets/ram-2.svg" height={400} width={400} alt="Profile Picture" objectFit="cover" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default AboutPage