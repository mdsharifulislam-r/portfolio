import React from "react";
import Chat from "../Chat";
import UserCard from "../../SideBar/Users/UserCard/UserCard";
import MassageBox from "../MassageBox/MassageBox";
import { useSelector } from "react-redux";


export default function SmallChat() {
  const sender = useSelector((state) => state.recever);
  return (
    <div className="bg-slate-200 w-full h-screen p-2 flex flex-col gap-3 scrollbar scrollbar-none">
      <div className="con">
        <UserCard data={sender} audioCall={true} videoCall={true} />
      </div>

      <MassageBox />
    </div>
  );
}
