import React from "react";
import Heading from "./Heading/Heading";
import MySelf from "./MySelfSection/MySelf";

export default function TextBox() {
  return (
    <div className=" absolute top-0 left-0 w-full md:flex-col h-full flex lg:justify-between lg:flex-row  flex-col">
      <div className="w-full h-full flex justify-center lg:place-items-center flex-col">
        <div className=" lg:translate-x-14 px-4 md:translate-x-11">
          <Heading text={"MD"} delay={0.2} />
          <Heading text={"SHARIFUL"} right={true} outline={true} delay={0.6} />
          <Heading text={"ISLAM"} left={true} outline={true} delay={1} />
        </div>
      </div>
      <MySelf />
    </div>
  );
}
