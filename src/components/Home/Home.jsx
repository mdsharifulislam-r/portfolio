import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import SideBar from "./SideBar/SideBar";
import Chat from "./Chat/Chat";
import { EmptyMassage, SendUser, ShowVoiceCall, TakeActiveUser, addMassage } from "../Store/Slices/Slices";
import Sound from "../../assets/MassageSound/sound.mp3";
import Show from "./SetUp/Show";
import AddFreind from "./SideBar/AddFreind/AddFreind";
import SendCall from "./SendCall/SendCall";
export default function Home() {
  const isAddFreind = useSelector((state) => state.isAddFreind);
  const socket = useSelector((state) => state.socket);
  const dispatch = useDispatch();
  const massages = useSelector((state) => state.massage);
  const recever = useSelector((state) => state.recever);

  const sound = new Audio(Sound);

 
    
  useEffect(() => {
    socket.on("connect", () => {
      dispatch(SendUser());
    });
  }, []);

  socket.on("get-users", (users) => {
    console.log("calling");
    dispatch(TakeActiveUser(users));
  });
  
  const time = new Date().getTime()
  console.log(time);
  useEffect(() => {
    socket.on("receved-massage", (massage) => {
      sound.play();
      dispatch(addMassage(massage));
    });
  }, []);
  useEffect(() => {
    socket.on("incomming-call", (payload) => {
      console.log(payload);
      dispatch(ShowVoiceCall(payload))
    });
   },[])

  return (
    <div
      onClick={() => {
        socket.emit("getUsers", "");
      }}
    >
      <div className="w-full h-screen flex bg-slate-200 justify-between place-items-center">
        {isAddFreind ? <AddFreind /> : <SideBar />}
        {recever["name"] ? <Chat /> : <Show />}
      </div>
      <SendCall/>
    </div>
  );
}
