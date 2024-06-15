"use client"
import Image from 'next/image';
import '../../app/globals.css';
import {motion} from 'framer-motion';
import Button from '../ui/Button';
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <main className="flex flex-col md:flex-row gap-15 items-center text-start mt-30 mb-20 mx-7 md:mt-30 md:mb-0 md:mx-30">
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
          <div className='flex flex-col text-start justify-center items-start w-full'>
          
            <h2 className="text-3xl xl:text-[36px] font-bold mb-4 text-[#1F2937] dark:text-[#F9FAFB] leading-normal">Hey! I’m Ram Tanniru.<br/>A UI/UX 
              <span className='orange_grad text-3xl xl:text-4xl'> Designer </span>
               and 
              <span className='purple_grad text-3xl xl:text-4xl'> Developer </span>
            </h2>
          
            <p className="mt-4 text-gray-700 dark:text-[#E5E7EB] max-w-md md:leading-[24px]">
              I am passionate about Full stack web Development, Mobile application Development and UI/UX Design. I enjoy building fast-performing and well-designed website interfaces using the latest technologies.
            </p>
            
            <div className='mt-8'>
              <Button text={"View Resume"}/>
            </div>
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
          className="animate_right"
        >
          <div className="flex items-center justify-center columns-10 w-full">
            <div className='relative aspect-auto w-ful'>
              <Image
              src='images/profile/profile.svg'
              height={516}
              width={617}
              alt='profile'
              className='dark:hidden'
              />
          
              <Image
              src='images/profile/profile-dark.svg'
              height={516}
              width={617}
              alt='profile'
              className='dark:block hidden'
              />
            </div>
          </div>
        </motion.div
        >
      </main>
    </div>
  );
}
