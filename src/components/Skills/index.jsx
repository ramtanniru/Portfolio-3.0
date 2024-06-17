"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../../../utils/data'
import SkillCard from './SkillCard'
const Skills = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center  md:mt-0 md:mb-0">
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
                    <h1 className='text-black dark:text-white font-bold text-[40px]'>What I Do.</h1>
                    <div className='flex flex-wrap w-full justify-start items-center gap-12'>
                        {skills.map((key)=>(
                            <SkillCard key={key} name={key.name} src={key.src}/>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
      </div>
    </div>
  )
}

export default Skills