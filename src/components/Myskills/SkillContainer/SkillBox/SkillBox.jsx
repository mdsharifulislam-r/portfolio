import React, { useEffect, useRef, useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { BiSolidMessageAlt } from "react-icons/bi";
export default function SkillBox({ name, desc, persent, icon }) {
  const MyRef = useRef(null)
  const [Persent, setPersent] = useState("")
  useEffect(() => {
    MyRef.current.style.width= persent+"%"
   },[persent])
  return (
    <div className='flex place-items-center w-full h-full gap-4 group hover:scale-105 transition duration-300'>
          <div className="imgBox text-white w-[30%] bg-zinc-900 group-hover:header-bg transition duration-500 rounded-md min-h-[100px] flex justify-center place-items-center text-4xl bg">
              {icon}
      </div>
      <div className="textBox text-white w-[170%]">
        <h1 className='header'>{name}</h1>
        <p className='text lg:text-sm text-[10px]'>{desc}</p>
              <div className="proggress py-1 my-3 rounded-full w-full bg-zinc-900 text-sm relative">
                  <div className={`absolute  h-full left-0 top-0 header-bg rounded-full`} ref={MyRef}>
                      <div className='absolute right-0 -top-7'>
                          <BiSolidMessageAlt className='text-3xl text-pink-500' />
              <span className='absolute top-0 text-[8px] translate-x-2'>{ persent}%</span>
                      </div>
                  </div>
              </div>
      </div>
    </div>
  )
}
