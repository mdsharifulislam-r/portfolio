import React from "react";
import { useDispatch, useSelector } from "react-redux";
import avtar from "../../../assets/Avtar/avtar.jpg";
import { FaPhone, FaPhoneSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CencelCall } from "../../Store/Slices/Slices";
export default function SendCall() {
    const voicecall = useSelector(state => state.voiceCall)
    
    const recever = voicecall?.callerInfo
    const dispatch = useDispatch()
    function RecevedCall()
    {
       dispatch(CencelCall()) 
    }
    function RejectCall()
    {
        
        dispatch(CencelCall())
    }
  return (
      <div className={`h-screen w-full absolute top-0 ${voicecall?.status?"block":"hidden"}`}>
      <img
        src={recever?.img ? recever?.img : avtar}
        alt=""
        className="absolute top-0 w-full h-screen object-cover"
      />
      <div className="w-full h-screen backdrop-blur-md flex flex-col justify-center place-items-center">
        <div className="flex flex-col justify-center ">
          <img
            src={recever?.img ? recever?.img : avtar}
            alt=""
            className="w-[20vw] rounded-full "
          />
        </div>
        <div className="text-xl text-white p-2">{recever?.name}</div>
        <div className="absolute bottom-24 w-full flex justify-around">
          <Link to={voicecall?.link} className="p-3 bg-green-500 text-white rounded-2xl text-lg">
            <FaPhone />
          </Link>
          <div className="p-3 bg-red-500 text-white rounded-2xl text-lg" onClick={RejectCall} >
            <FaPhoneSlash />
          </div>
        </div>
      </div>
    </div>
  );
}
