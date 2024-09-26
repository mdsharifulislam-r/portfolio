import React, { useRef } from "react";
import image from "../../assets/images/image.png";
import { MdArrowRightAlt, MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import useScroll from "../ScrollInfo/ScrollInfo";
import { motion } from "framer-motion";
export default function HeroSection() {
  const myref = useRef(null);
const {scrollY} = useScroll()


  return (
    <div className=" bg-primary">
      <motion.div className="w-full min-h-screen flex flex-col-reverse md:flex-row container  justify-center relative place-items-center ">
        <div className="text md:w-1/2 text-textColor">
          <span>I am</span>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-black py-3 text-white" data-aos="fade-up" >MD Shariful Islam</h1>
          <h3 className="text-4xl py-2" data-aos="fade-up" data-aos-delay={300}>A MERN Web Developer</h3>
          <p data-aos="fade-up" data-aos-delay={500}>
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>
          <div className="flex gap-4 place-items-center py-4">
          <a href="/resume.pdf" data-aos="fade-right" data-aos-delay={700} download={true} className="flex gap-4 place-items-center md:px-9 px-5  rounded-full py-3 border border-secondary md:text-lg text-secondary transition-all duration-700 hover:bg-white">
            <span>Download CV</span>
            <MdOutlineFileDownload/>
          </a>
          <a href="https://www.fiverr.com/users/bdtech71965" data-aos="fade-left" data-aos-delay={700} className="flex gap-4 place-items-center md:px-9 px-5  rounded-full py-3 border border-secondary md:text-lg text-secondary transition-all duration-700 hover:bg-white">
            <span>Hire Me</span>
            <MdArrowRightAlt/>
          </a>
        
          </div>

         
        </div>
        <div className="image md:w-1/2 h-full relative flex justify-center place-items-end animate-bounce-up-down">
          <div className="shade absolute w-full h-full top-0 left-0 bg-gradient-to-r from-primary to-transparent"></div>

          <div className="shade absolute w-full h-full top-0 left-0 bg-gradient-to-t from-primary to-transparent"></div>

          <img
            src={image}
            alt=""
            className="w-[80%]  my-auto bg-gradient-to-t  from-primary to-tr"
          />
        </div>
      </motion.div>
    </div>
  );
}
