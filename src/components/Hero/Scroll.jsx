import React from 'react'
import Image from 'next/image'

const Scroll = () => {
  const content = (
    <>
      <Image src='/images/assets/twinkle.svg' height={30} width={30} alt="twinkle" className='hidden dark:block' loading='eager'/>
      <Image src='/images/assets/twinkle-dark.svg' height={30} width={30} alt="twinkle" className='dark:hidden' loading='eager'/>
      <h1 className='font-semibold text-[32px] text-white dark:text-black'>Design</h1>
      <Image src='/images/assets/twinkle.svg' height={30} width={30} alt="twinkle" className='hidden dark:block' loading='eager'/>
      <Image src='/images/assets/twinkle-dark.svg' height={30} width={30} alt="twinkle" className='dark:hidden' loading='eager'/>
      <h1 className='font-semibold text-[32px] text-white dark:text-black'>Develop</h1>
      <Image src='/images/assets/twinkle.svg' height={30} width={30} alt="twinkle" className='hidden dark:block' loading='eager'/>
      <Image src='/images/assets/twinkle-dark.svg' height={30} width={30} alt="twinkle" className='dark:hidden' loading='eager'/>
      <h1 className='font-semibold text-[32px] text-white dark:text-black'>Discover</h1>
    </>
  );

  return (
    <div className='w-full gradient h-[110px] absolute'>
      <div className='flex space-x-60 overflow-hidden bg-black dark:bg-white relative z-10 group -rotate-3'>
        <div className='group-hover:paused animate-loop-scroll h-[100px] py-3 flex justify-center items-center space-x-16'>
          {content}
          {content}
        </div>
        <div className='group-hover:paused animate-loop-scroll h-[100px] py-3 flex justify-center items-center space-x-16' aria-hidden="true">
          {content}
          {content}
        </div>
        <div className='group-hover:paused animate-loop-scroll h-[100px] py-3 flex justify-center items-center space-x-16' aria-hidden="true">
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}

export default Scroll
