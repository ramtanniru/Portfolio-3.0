"use client"
import {Toaster} from 'react-hot-toast'
import React from 'react'

export const ToasterContext = () => {
  return (
    <div>
        <Toaster position='top-center' reverseOrder={false}/>
    </div>
  )
}
