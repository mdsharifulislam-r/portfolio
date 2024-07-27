import React, { useRef } from 'react'
import ImageBox from './ImageBox'
import TextBox from './TextBox/TextBox'
import { motion, useScroll } from 'framer-motion'
export default function HeroSection() {
  const myref = useRef(null)
  const { scrollYProgress} = useScroll({
    target: myref.current,
    offset:["start","end"]
  })
  console.log(scrollYProgress);
  return (
    <motion.div ref={myref} animate={{
      scale: scrollYProgress,
      
    }}  className='w-full h-screen relative '>
      <ImageBox />
      <TextBox/>
    </motion.div>
  )
}
