import React, { useRef } from "react";
import Heading from "../Heading/Heading";
import ImageBox from "./ImageBox/ImageBox";
import TextBox from "./TextBox/TextBox";
import useScroll from "../ScrollInfo/ScrollInfo";
import image from "../../assets/my/my.jpg";
import { MdOutlineFileDownload } from "react-icons/md";
export default function AboutMe() {
  const ref = useRef(null);

  return (
    <div className="bg-primary ">
      <div
        ref={ref}
        className={`w-full py-20 "" container transition gap-5 duration-1000 pt-10 flex justify-center place-items-center flex-col md:flex-row`}
      >
        <div className="" data-aos="fade-down-right" >
        <img src={image} alt=""  className="md:w-[300px] animate-bounce-up-down " />
        </div>

        <div className="text-textColor md:w-[40%]" data-aos="fade-right" data-aos-delay={700}>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-3">
            I am MD Shariful Islam. I am a Frontend Web developer . I am a
            student of Computer science at Cumilla Polytechnic Institute. I have
            skills in React, Express Js, Node js, socket io MongoDB, Javascript,
            Es6, Firebase Authentication, HTML, CSS, Bootstrap 5, TailwindCSS, ,
            React Bootstrap and DaisyUI, MumbaUi API, and Rest API. I am very
            open to any situation that is changing and which tests my abilities
            and with my work catalog, I have a reputation as being a fast
            learner. As a junior Frontend developer,
          </p>
          <a href="/resume.pdf" download={true} className="flex w-fit place-items-center hover:rounded-lg transition-all duration-1000  gap-3 px-4 py-2 border border-textColor hover:bg-secondary ">
            Download CV
            <MdOutlineFileDownload/>
          </a>
        </div>
      </div>
    </div>
  );
}
