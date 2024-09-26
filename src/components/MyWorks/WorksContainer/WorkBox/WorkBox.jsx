import React, { useEffect, useRef } from 'react'
import bg from "../../../../assets/images/image.jpg"
import SkillContainer from './SkillContainer/SkillContainer'
export default function WorkBox({ name, desc, skills, frontend, backend, live, image,index }) {
    const myref = useRef(null)
    const data = skills ? ['React js', "Node Js", "Tailwind Css", "Bootstrap", "Express Js", "MongoDB", ...skills] : ['React js', "Node Js", "Tailwind Css", "Bootstrap", "Express Js", "MongoDB"]
    return (
        <div ref={myref} className='w-full flex place-items-center transition-all  duration-1000 group justify-between  border-b-[0.1px] border-slate-600  py-2 hover:py-6'>
           <div className="text flex place-items-center gap-3">
            <span className='text-3xl text-yellow-400'>{index}</span>
            <div className='pl-10'>
            <h1 className='md:text-5xl text-2xl  font-bold text-textColor group-hover:text-white transition-all duration-1000 '>{name}</h1>
            <div className=' h-0 overflow-hidden group-hover:h-[160px] transition-all duration-1000 origin-top'>
            <p className='md:w-[60%] py-4 w-full text-textColor md:text-xl text-xs'>{desc}</p>
            <div className='flex place-items-center gap-2 md:gap-5'>
                <a href={live} className='text-[10px] md:px-3 px-2 py-2 bg-secondary text-white rounded-2xl'>Live Preview</a>
                <a href={backend} className='text-[10px] md:px-3 px-2 py-2 bg-secondary text-white rounded-2xl'>Backend</a>
                <a href={frontend} className='text-[10px] md:px-3 px-2 py-2 bg-secondary text-white rounded-2xl'>Frontend</a>
            </div>
            </div>
           
            </div>

           </div>
           <div className="image w-[200px] p-4">
            <img src={image} alt="" className='transition-all duration-1000 md:group-hover:scale-150 group-hover:-rotate-12' />
           </div>
        </div>
    )
}
