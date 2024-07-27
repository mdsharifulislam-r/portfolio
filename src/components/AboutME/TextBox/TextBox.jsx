import React from "react";
import Heading from "../../Heading/Heading";
import { FaArrowRight } from "react-icons/fa"
import ContactItemList from "./ContactItemLis/ContactItemList";
export default function TextBox() {
  return (
    <div className="flex flex-col lg:w-[70%] px-4 lg:px-0">
      <div className="w-[40%]">
        <Heading title={"About Me"} sub1={"Think About"} sub2={" Me"} />
      </div>
      <div className="des text-white lg:w-[70%] text-sm text mt-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ea
        autem voluptatibus ipsum, dolores assumenda officiis doloremque
        repellendus delectus ad, nihil similique esse, vero quas asperiores
        doloribus recusandae est aliquam deleniti sunt consequuntur! Corrupti
        officiis rerum eaque expedita.
        <ContactItemList/>
      </div>
      <div className="flex my-3 gap-3">
        <button className="text-white text text-sm font-bold flex place-items-center gap-1 hover:gap-3 transition duration-1000 active:shadow-inner px-3 py-2  header-bg rounded-md">
          Contect Me <FaArrowRight />{" "}
        </button>
        <button className="text-white text text-sm font-bold flex place-items-center gap-1 hover:gap-3 transition duration-500 active:shadow-inner px-3 py-1 header-bg rounded-md">
          Hire Me <FaArrowRight />{" "}
        </button>
      </div>
    </div>
  );
}
