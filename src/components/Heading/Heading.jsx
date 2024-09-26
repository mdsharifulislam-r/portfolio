import React from 'react'
import { motion } from 'framer-motion';
export default function Heading({title,sub1,sub2}) {
  return (
    <div className="flex">
      <div className="text-textColor header lg:text-5xl font-bold md:text-5xl text-4xl relative">
              {title}<span className="text-pink-600">.</span>
              <motion.div initial={{
            width:0
              }}
                  animate={{
                      width: "30%"
                  }}
                  transition={{duration:0.8,delay:1}}
                  className="absolute w-[30%] right-0 h-[5px] rounded-md header-bg"></motion.div>
        <div className="absolute text-pink-400 left-0 lg:text-sm md:text-sm text-[10px] text">
                  {sub1 }<span className='text-white'>{sub2}</span>
        </div>
      </div>
    </div>
  );
}
