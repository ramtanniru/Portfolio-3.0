"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import CodingCard from './CodingCard'
import GithubProfile from './GithubProfile'

const Socials = () => {
  return (
    <div className="hidden md:flex flex-col gap-20 items-center justify-center md:mt-0 md:mb-0">
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
                </div>
            </motion.div>
            <div className="w-full grid grid-rows-3 grid-cols-4 gap-5 min-h-screen">
                <div className="row-span-1 col-span-1">
                    <CodingCard link={"https://leetcode.com/u/ram_tanniru/"} src={"/images/social/leetcode.jpeg"} key={1}/>
                </div>
                <div className="row-span-1 col-span-1">
                    <CodingCard link={"https://www.geeksforgeeks.org/user/ramtanniru2/"} src={"/images/social/gfg.jpeg"} key={2}/>
                </div>
                <div className="row-span-1 col-span-2">
                    <GithubProfile/>
                </div>
                <div className="row-span-2 col-span-2">
                    <CodingCard src={"/images/social/blogs.png"} link={'/blogs'}/>
                </div>
                <div className="row-span-1 col-span-1">
                    <Card app={"Figma"} username={"ram_tanniru_"} link={"https://www.instagram.com/ram_tanniru_"} src={"images/social/figma_light.svg"} srcDark={"images/social/figma_light.svg"} key={0}/>
                </div>
                <div className="row-span-1 col-span-1">
                    <Card app={"Instagram"} username={"ram_tanniru_"} link={"https://www.instagram.com/ram_tanniru_"} src={"images/social/insta.svg"} srcDark={"images/social/insta.svg"}  key={0}/>
                </div>
                <div className="row-span-1 col-span-1">
                    <Card app={"LinkedIn"} username={"ram_tanniru_"} link={"https://www.linkedin.com/in/ram-tanniru-12b35b222/"} src={"images/social/linkedin.svg"} srcDark={"images/social/linkedin.svg"}  key={0}/>
                </div>
                <div className="row-span-1 col-span-1">
                    <Card app={"Twitter"} username={"ram_tanniru_"} link={"https://x.com/ramtanniru2"} src={"images/social/twitter_light.svg"} srcDark={"images/social/twitter_light.svg"}  key={0}/>
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Socials