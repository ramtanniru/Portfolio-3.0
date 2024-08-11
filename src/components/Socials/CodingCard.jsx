import React from 'react'
import Image from 'next/image'

const CodingCard = ({src,link}) => {
    const style = {
        backgroundImage : `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
  return (
    <a className='w-full h-full px-10 flex flex-col justify-center items-start gap-5 rounded-lg border border-[#BABABA]
     dark:border-white shadow-md' href={link} target='_blank' style={style}>
    </a>
  )
}

export default CodingCard