import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../Logo/Logo";

export default function Show() {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-[70%] mr-3 h-[80vh] lg:flex hidden justify-center place-items-center bg-white rounded-md shadow">
      <div>
        <h1 className="text-xl ">
          Hey <span className="font-bold text-blue-400">{user?.name}</span>
              </h1>
              <div className="flex gap-2 text-5xl py-2">
                  Wellcome to <Logo/>
              </div>
              <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia!
              </div>
              
      </div>
    </div>
  );
}
