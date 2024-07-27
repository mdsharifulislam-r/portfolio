import React from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function MyButton() {
  const animation = useAnimation()
  function Hover()
  {
    animation.start({
      position: "relative",
      top:-120
    })
    
  }
  return (
    <button className="px-3 py-2 bg-white text-pink-500 font-bold rounded-md group transition duration-700" onClick={Hover}>
      <motion.span animate={animation} className=' '>Contect Me</motion.span>
    </button>
  );
}
