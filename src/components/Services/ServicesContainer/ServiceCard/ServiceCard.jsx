import React from "react";
import { FaDeskpro, FaDesktop } from "react-icons/fa";

export default function ServicesCard() {
  return (
    <div className="text flex group px-6 py-5 bg-zinc-900 rounded-md   justify-center flex-col place-items-center hover:header-bg transition duration-700">
      <div className="icon text-4xl text-pink-500 group-hover:text-white">
        <FaDesktop />
      </div>
      <div className="heading font-bold text-white text-xl py-3">
        Web <span className="text-color group-hover:text-white">Development</span>
      </div>
      <div className="des  text-white text text-sm font-thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas autem
        beatae quia voluptatibus perferendis possimus officiis assumenda, animi
        explicabo similique?
      </div>
      <div className="but w-full mt-3">
        <button className="px-3 py-1 rounded-sm  text-sm group-hover:bg-white group-hover:text-color header-bg text-white">
          Learn More
        </button>
      </div>
    </div>
  );
}
