import React, { useRef } from 'react'
import Heading from '../Heading/Heading'
import ImageBox from './ImageBox/ImageBox'
import TextBox from './TextBox/TextBox'
import useScroll from '../ScrollInfo/ScrollInfo'

export default function AboutMe() {
  const ref = useRef(null)
  
  
  return (
    <div ref={ref} className={`w-full min-h-[70vh]  transition duration-1000 bg-black pt-10 flex place-items-center flex-col lg:flex-row`}>
          <ImageBox />
          <TextBox/>
    </div>
  )
}
