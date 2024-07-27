import React, { useEffect, useRef } from 'react'
import bg from "../../../../assets/images/image.jpg"
import SkillContainer from './SkillContainer/SkillContainer'
export default function WorkBox({ name, desc, skills, frontend, backend, live, image }) {
    const myref = useRef(null)
    
    const data = skills ? ['React js', "Node Js", "Tailwind Css", "Bootstrap", "Express Js", "MongoDB", ...skills] : ['React js', "Node Js", "Tailwind Css", "Bootstrap", "Express Js", "MongoDB"]
    return (
        <div ref={myref} className='lg:grid overflow-hidden cursor-pointer lg:grid-cols-2 md:grid-cols-2 md:grid flex flex-col-reverse gap-4 bg-zinc-900 shadow rounded-md group relative transition duration-300'>
            <div className="textBox lg:w-[120%] h-full text-white lg:p-10 p-3">
                <div className="name text-4xl header pb-3">
                    {name}
                </div>
                <div className="desc lg:text-sm md:text-sm text-[10px] text">{desc}</div>
                <div className=' opacity-0 transition group-hover:opacity-100 duration-500 my-3 lg:text-sm text-[12px]'>
                    <div className='text flex gap-3 place-items-center'><span className='font-bold lg:text-lg  text-sm'>Frontend</span>: <a href={frontend}>{frontend}</a></div>
                    <div className='text flex gap-3 place-items-center'><span className='font-bold lg:text-lg text-sm'>Backend</span>: <a href={backend}>{backend}</a></div>
                    <div className='text flex gap-3 place-items-center'><span className='font-bold lg:text-lg text-sm'>Live Site</span>: <a href={live}>{live}</a></div>
                </div>
                <div className="technology text relative  bottom-3 pt-2 ">
                    <h1>Technoloys Used</h1>
                    <SkillContainer data={data}/>

                </div>
            </div>
            <div className="ImgBox w-[100%] lg:h-full md:h-full h-[100px] relative px-3">
                <div className= ' absolute right-0 w-[60%] lg:h-[60%] md:h-[60%] h-full bg-zinc-600 top-0 p-4 rounded-bl-xl rounded-br-xl overflow-hidden '>
                    <img src={ image?image:bg} alt="" className='w-[80%] h-full group-hover:-rotate-12 transition duration-300 object-cover right-0 absolute border rounded-lg border-white' />
                </div>
            </div>
        </div>
    )
}
