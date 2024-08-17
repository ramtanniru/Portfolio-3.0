import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CodingCard = ({src,link}) => {
    const style = {
        backgroundImage : `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
  return (
    <Link className='w-full h-full px-10 flex flex-col justify-center items-start gap-5 rounded-lg border border-[#BABABA]
     dark:border-white shadow-md' href={link} target='_blank' style={style}>
    </Link>
  )
}

export default CodingCard