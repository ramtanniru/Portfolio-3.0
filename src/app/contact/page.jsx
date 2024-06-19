"use client"
import { React, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { faqData } from '../../../utils/data'

const ContactPage = () => {
  const Name = useRef();
  const Email = useRef();
  const Budget = useRef();
  const JobDesc = useRef();
  const submitForm = () => {

  }
  return (
<div className="min-h-screen flex flex-col gap-20 items-center justify-center  md:mt-0 md:mb-0">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-20 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
            <div className='w-full flex flex-col md:flex-row justify-start items-start md:justify-between gap-20'>
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
                className="flex flex-col justify-start items-start gap-5 w-full md:w-5/12"
                >
                  <h1 className='text-[40px] font-bold text_gradient'>
                    Get in touch
                  </h1>
                  <p className='text-black dark:text-white'>Have a project in mind? Looking to partner or work together?
                     Reach out through the form and I{`'`}ll get back to you in the next 48 hours.</p>
                  <div className='flex flex-row gap-5'>
                    <Image src='images/icons/gmail.svg' height={24} width={24} alt='gmail'/>
                    <p className='text-black dark:text-white font-bold tracking-wider'>ramtanniru2@gmail.com</p>
                  </div>
                  <div className='flex flex-row gap-5'>
                    <Image src='images/icons/phone.svg' height={24} width={24} alt='gmail'/>
                    <p className='text-black dark:text-white font-bold tracking-wider'>+91 9182688796</p>
                  </div>
              </motion.div>

              {/* form */}

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
                className="flex flex-col justify-start items-start gap-5 w-full md:w-5/12"
                >
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h6 className='text-black dark:text-white font-bold text-[24px]'>Your Name</h6>
                    <input type='text' placeholder='Enter your name' className='w-full bg-[#1C1C22] px-5 p-3 rounded-md' ref={Name}/>
                  </div>
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h6 className='text-black dark:text-white font-bold text-[24px]'>Your E-mail</h6>
                    <input type='text' placeholder='Enter your e-mail' className='w-full bg-[#1C1C22] px-5 p-3 rounded-md' ref={Email}/>
                  </div>
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h6 className='text-black dark:text-white font-bold text-[24px]'>Your Budget</h6>
                    <input type='text' placeholder='Enter your name' className='w-full bg-[#1C1C22] px-5 p-3 rounded-md' ref={Budget}/>
                  </div>
                  <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h6 className='text-black dark:text-white font-bold text-[24px]'>Tell me a bit more what you are lookung for?</h6>
                    <textarea type='text' placeholder='' className='w-full bg-[#1C1C22] px-5 p-3 rounded-md' ref={JobDesc}/>
                  </div>
                  <Button text={"submit now"}/>
              </motion.div>
            </div>

            {/* faq */}

            <div className='w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:my-20'>
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
                className="flex flex-col justify-start items-start gap-5 w-full md:w-5/12"
              >
                  <h1 className='text-[40px] font-bold text-black dark:text-white'>
                    Frequently Asked <br/><span className='text-[40px] font-bold text_gradient'>Questions</span>
                  </h1>
                  <p className='text-black dark:text-white'>Answers to the burning questions in your mind.</p>
                  <Button text={"contact me"}/>
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
                className="flex flex-col justify-start items-start gap-5 w-full md:w-5/12"
              >
                <Accordion>
                    {faqData.map((key,id) => (
                        <AccordionItem key={id} aria-label="Accordion 1" title={key.question}>
                            {key.answer}
                        </AccordionItem>
                    ))
                    }
                </Accordion>
              </motion.div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default ContactPage