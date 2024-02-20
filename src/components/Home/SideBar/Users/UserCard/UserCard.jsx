import React, { useState } from "react";
import Avatar from "../../../../../assets/Avtar/avtar.jpg";
import ActiveStatus from "./Active/ActiveStatus";

import { useDispatch, useSelector } from "react-redux";
import {
  ChangeState,
  SetMassages,
  TakeActiveUser,
  TakeRecever,
  UpdateUser,
} from "../../../../Store/Slices/Slices";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaVideo } from "react-icons/fa";
import { nanoid } from "@reduxjs/toolkit";
export default function UserCard({ data, add, audioCall, videoCall }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const socket = useSelector((state) => state.socket);
  const recever = useSelector(state=>state.recever)
  const dispatch = useDispatch();
  const [size, setSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });
  const isMobile = size > 600 ? false : true;
  function Click() {
    if (add) {
      const found = user.contacts?.some((dat) => dat._id == data._id);
      if (!found) {
        const newObj = {
          ...user,
          contacts: user.contacts ? [...user.contacts, data] : [data],
        };
        dispatch(UpdateUser(newObj));
        dispatch(ChangeState(false));
      } else {
        dispatch(ChangeState(false));
      }
    } else {
      if (!videoCall) {
        if (isMobile) {
          dispatch(TakeRecever(data));
          socket.emit("getUsers", "");
          navigate("/chat");
        } else {
          dispatch(TakeRecever(data));
          socket.emit("getUsers", "");
        }
      }
    }
  }
  
  
  function VoiceCall()
  {
    const id = nanoid()
    socket.emit("send-call", recever?.room, {
      status: true,
      callerInfo: user,
      link:`${window.location.origin}/voicecall/${id}`
    })
    navigate(`/voicecall/${id}`)
  }
  return (
    <div className="flex justify-between">
      <div
        className="w-full h-[60px]  rounded-lg flex p-2 gap-2 relative hover:bg-blue-400 bg-white "
        onClick={Click}
      >
        <div className="imgBox ">
          <img
            src={data?.img ? data?.img : Avatar}
            alt=""
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
        <div className="text-box">
          <h1 className="text-lg font-bold m-0 p-0 leading-none ">
            {data?.name}
          </h1>
          <span className="text-[10px] font-thin m-0 p-0">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
        {videoCall && (
          <div className="absolute right-8 text-blue-400 flex place-items-center top-5 gap-3">
            <div onClick={VoiceCall}>
              <FaPhone />
            </div>
         
          </div>
        )}
        {data?.room && <ActiveStatus />}
      </div>
    </div>
  );
}
