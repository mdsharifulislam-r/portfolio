import React from "react";
import MyButton from "./MyButton";

export default function MySelf() {
  return (
    <div className="w-full lg:translate-x-16 text-white lg:px-10 h-screen flex px-5 lg:justify-center place-items-center">
      <div className="lg:w-[70%]">
        <span className="text text-xl my-3">I am</span>
        <div className="header text-3xl">
          A MERN STACK WEB DEVELOPER AND DESIGNER
        </div>
        <div className="des text my-2 text-sm">
          I'm a passionate MERN Stack Web Developer with a knack for building
          seamless, dynamic web applications that provide outstanding user
          experiences.
        </div>
        <div className="button flex gap-5 text">
          <MyButton/>
          <button className="px-3 py-2 header-bg text-white font-bold rounded-md">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
