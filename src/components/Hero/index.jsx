"use client"
import Image from 'next/image';
import '../../app/globals.css';
import {motion} from 'framer-motion';
import Button from '../ui/Button';
import Button2 from '../ui/Button2';
import Scroll from './Scroll';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center mb-30">
      <main className="flex flex-col md:flex-row gap-15 items-center text-start mt-30 mb-0 mx-7 md:mt-30 md:mb-0 md:mx-30">
        {/* intro */}
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
          className=" animate_left"
        >
          <div className='w-full flex flex-col text-start justify-center gap-5 items-start'>
            <h1 className='font-bold text-[40px] text-black dark:text-white leading-snug'>
              <span className='text_gradient'>Hello, I{`'`}m Ram Tanniru,</span><br/>
              A UI/UX Designer and Developer.
            </h1>
            <p className='text-black dark:text-white'>
            I am passionate about Full stack web Development, Mobile application Development and UI/UX Design.
            </p>
            <div className='flex flex-row gap-5'>
              <Button text={"get in touch"}/>
              <Button2 text={"view resume"} link={"https://drive.google.com/file/d/1LFRlccvq2PLRId7yguq2JnzXpatZH2lC/view?usp=sharing"}/>
            </div>
          </div>
        </motion.div>
        {/* image */}
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
          className=" animate_right w-2/3"
        >
          <div className='flex flex-col text-start justify-center gap-10 items-center'>
            <Image src='images/assets/ram.svg' height={500} width={400} alt="profile" className='rounded-md overflow-hidden'/>
          </div>
        </motion.div>
      </main>
      <div className='w-full flex mt-0 md:mt-20'>
        <Scroll/>
      </div>
    </div>
  );
}