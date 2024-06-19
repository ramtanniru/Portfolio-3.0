"use client"
import {React,useState} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Link from 'next/link';
import { project, projects } from '../../../utils/data'
import {Tabs, Tab} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";

const ProjectsPage = () => {
    const [selectedOption, setSelectedOption] = useState('ui');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const options = [{label:"UI/UX Design",key:"ui"},{label:"Web Application",key:"web"},{label:"Native Application",key:"app"}]

    const renderContent = () => {
        console.log(selectedOption);
        return(
            <div className='w-full flex flex-col justify-center items-center gap-10'>
                {project[selectedOption].map((key) => (
                    <a className='flex flex-col w-full justify-center items-center rounded-md overflow-hidden' href={`/projects/${key.id}`} key={key}>
                        <Image src={key.src} height={400} loading='lazy' width={400} alt='project image'/>
                        <div className='w-full bg-[#1C1C22] flex flex-col gap-3 p-4'>
                            <h6 className='text-[24px] text-black dark:text-white font-bold'>{key.title}</h6>
                            <p className='text-black dark:text-white'>{key.caption}</p>
                        </div>
                    </a>
                ))}

            </div>);
    }

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
              className="flex flex-col md:flex-row md:justify-between items-center w-full"
              >
                <div className='text-[40px] font-bold text-black dark:text-white w-full md:w-1/3'>
                  Look at My<br/>
                  <span className='text-[40px] font-bold text_gradient'>Projects.</span>
                </div>
                <p className='text-[#545353] dark:text-white w-full md:w-2/3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Iure necessitatibus quis incidunt, sit nostrum id et praesentium! Exercitationem, facere.
                      Earum distinctio sunt officia minus quos odit veritatis eligendi ut laudantium. 
                </p>
            </motion.div>

            {/* desktop version */}

            <motion.div
              variants={{
                  hidden: {
                  opacity: 0,
                  x: -20,
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
              className="hidden md:flex flex-col md:justify-between items-start w-full"
              >
                <Tabs aria-label="Options" color="primary" variant="underlined" fullWidth='true' 
                size="lg"
                classNames={{
                    cursor: "gradient",
                    tabContent: "group-data-[selected=true]:text-transparent group-data-[selected=true]:bg-clip-text group-data-[selected=true]:bg-gradient-to-r group-data-[selected=true]:from-purple-500 group-data-[selected=true]:via-pink-500 group-data-[selected=true]:to-orange-500",
                    tab:"",
                    base:"",
                    panel:"py-10"
                }}
                >

                    <Tab
                    key="ui"
                    title={
                        <div className="flex justify-center items-center space-x-2">
                            <span className=''>UI/UX Design</span>
                        </div>
                    }
                    className='w-full'
                    >
                        <div className='w-full flex flex-wrap gap-20 justify-between items-center'>
                            {project['ui'].map((key) => (
                                <a className='w-5/12 rounded-md overflow-hidden' key={key} href={`/projects/${key.id}`}>
                                    <Image src={key.src} height={500} width={600} alt='project image'/>
                                    <div className='p-10 bg-[#ffffff] shadow-md dark:bg-[#1C1C22] w-full flex flex-col justify-start items-start gap-3'>
                                        <h3 className='text-[32px] text-black dark:text-white font-bold'>{key.title}</h3>
                                        <p className='text-black dark:text-white'>{key.caption}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Tab>

                    <Tab
                    key="web"
                    title={
                        <div className="flex justify-center items-center space-x-2">
                            <span className=''>Web Development</span>
                        </div>
                    }
                    className='w-full'
                    >
                        <div className='w-full flex flex-wrap gap-20 justify-between items-center'>
                            {project['web'].map((key) => (
                                <a className='w-5/12 rounded-md overflow-hidden' key={key} href={`/projects/${key.id}`}>
                                    <Image src={key.src} height={500} width={600} alt='project image'/>
                                    <div className='p-10 bg-[#ffffff] shadow-md dark:bg-[#1C1C22] w-full flex flex-col justify-start items-start gap-3'>
                                        <h3 className='text-[32px] text-black dark:text-white font-bold'>{key.title}</h3>
                                        <p className='text-black dark:text-white'>{key.caption}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Tab>

                    <Tab
                    key="app"
                    title={
                        <div className="flex justify-center items-center space-x-2">
                            <span className=''>App Development</span>
                        </div>
                    }
                    className='w-full'
                    >
                        <div className='w-full flex flex-wrap gap-20 justify-between items-center'>
                            {project['app'].map((key) => (
                                <a className='w-5/12 rounded-md overflow-hidden' key={key} href={`/projects/${key.id}`}>
                                    <Image src={key.src} height={500} width={600} alt='project image'/>
                                    <div className='p-10 bg-[#ffffff] shadow-md dark:bg-[#1C1C22] w-full flex flex-col justify-start items-start gap-3'>
                                        <h3 className='text-[32px] text-black dark:text-white font-bold'>{key.title}</h3>
                                        <p className='text-black dark:text-white'>{key.caption}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </motion.div>

            {/* mobile version */}

            <div className='md:hidden w-full flex flex-col gap-10 justify-center items-start'>
                <Select
                    isRequired
                    label="Domain"
                    placeholder="Select an domain"
                    defaultSelectedKeys={["ui"]}
                    className="max-w-xs"
                    onChange={handleChange}
                    value={selectedOption}
                    >
                    {options.map((option) => (
                        <SelectItem key={option.key} value={option.key}>
                        {option.label}
                        </SelectItem>
                    ))}
                </Select>
                <div className='w-full flex flex-col justify-center items-center'>
                    {renderContent()}
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default ProjectsPage
