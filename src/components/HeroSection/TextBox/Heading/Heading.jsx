import React from "react";
import { motion } from "framer-motion";
export default function Heading({ text, left, right, outline, delay }) {
  return (
    <motion.div initial={{
      translateY: 100,
      opacity: 0
    }}
      animate={{
        translateY: 0,
        opacity: 1
      }} transition={{ duration: 1, delay: delay ? delay : 0 }} className=" text-white header relative lg:text-9xl md:text-9xl text-7xl before:w-full before:h-full before:bg-fuchsia-600 my-8">
      {text}
      {outline && (
        <motion.div
          initial={{
            width: 0
          }}
          animate={{
            width: "40%"
          }}
          transition={{ duration: 1, delay: delay ? delay + 1 : 0 }}
          className={`absolute w-[40%] rounded-lg h-[6px] header-bg ${right ? "top-[-10px] right-0" : ""
            } `}
        ></motion.div>
      )}
    </motion.div>
  );
}
