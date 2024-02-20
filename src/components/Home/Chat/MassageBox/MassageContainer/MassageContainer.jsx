import React, { useEffect, useRef } from "react";
import MassageCard from "./MassageCard/MassageCard";
import { useSelector } from "react-redux";
import AltMassageCard from "./MassageCard/AltMassageCard";

export default function MassageContainer() {
  const massage = useSelector((state) => state.massages);
  const user = useSelector((state) => state.user);
  const massageRef = useRef(null);
  function func()
  {
    massageRef?.current?.scrollIntoView()
  }
  useEffect(() => {
    func()
   },[massage])
  const massages = massage.map((mas) => {
    if (user._id === mas.senderId) {
      return <MassageCard massage={mas} />;
    } else {
      return <AltMassageCard massage={mas}  />;
    }
  });
  return (
    <div className="w-full h-[90%] p-2 overflow-y-scroll scrollbar-none scroll-smooth">
      <div>{massages}</div>
      <div ref={massageRef}></div>
    </div>
  );
}
