import { motion } from "framer-motion";
import React from "react";
import { FiLayers } from "react-icons/fi";

export default function PlanCard({ title, price, time }) {
  return (
    <div className="flex text-white rounded-lg justify-center place-items-center flex-col py-5 bg-zinc-900 gap-3">
      <div className="icon text-5xl text-color ">
        <FiLayers />
      </div>
      <div className="title text-3xl text">{title}</div>
      <motion.div initial={{translateX:-39}} animate={{translateX:0}} transition={{duration:1,delay:1}} className="price text text-sm">
        <span className="text-xl font-bold ">${price }/</span>{time}
      </motion.div>
      <div className="facilitys flex flex-col gap-2 text text-sm">
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="butoon pb-2">
        <button className="px-3 py-2 border border-white rounded-md text-sm text hover:header-bg">Purchess</button>
      </div>
    </div>
  );
}
