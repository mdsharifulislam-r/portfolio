import React, { useRef } from 'react'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'
import useScroll from '../ScrollInfo/ScrollInfo'

export default function Navbar() {
  const navRef = useRef(null)
  const {scrollY} = useScroll()

  return (
    <div className={`fixed bottom-10 flex h-0 md:justify-center justify-end w-full left-0 pr-4 `}>
       <div  className={`flex gap-10 pl-6 place-items-center transition-all duration-1000 ${scrollY>0?" md:translate-x-[570px] 2xl:translate-x-[700px] ":""} ${scrollY>300?"flex-col md:flex-col -translate-y-[400px]":""}`} >
       <a href="https://www.facebook.com/masom.rana.357" className="p-4 rounded-full border hover:animate-bounce border-secondary text-secondary  transition-all duration-700 hover:bg-white "><FaFacebookF/></a>
            <a href="https://github.com/mdsharifulislam-r" className="p-4 rounded-full border hover:animate-bounce border-secondary text-secondary  transition-all duration-700 hover:bg-white "><FaGithub/></a>
            <a href="https://www.linkedin.com/in/md-shariful-islam-160311229/" className="p-4 rounded-full border hover:animate-bounce border-secondary text-secondary  transition-all duration-700 hover:bg-white "><FaLinkedin/></a>


          </div>
    </div>
  )
}
