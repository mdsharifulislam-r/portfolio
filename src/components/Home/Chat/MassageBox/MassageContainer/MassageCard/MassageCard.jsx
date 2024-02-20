import React from "react";
import avtar from "../../../../../../assets/Avtar/avtar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetImage } from "../../../../../Store/Slices/Slices";
import VoiceBox from "./VoiceBox/VoiceBox";
export default function MassageCard({ massage }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch =useDispatch()
  function ShowImg()
  {
    dispatch(SetImage(massage.massage.massage))
    navigate(`/show`)
  }
  return (
    <div className="p-2 relative " id={massage.massage?.id}>
      <div className="right-0 flex-row-reverse flex gap-2  place-items-center">
        <div className="w-10 rounded-full">
          <img
            src={user?.img ? user?.img : avtar}
            alt=""
            className=" w-[50px] h-[40px] object-cover rounded-full"
          />
        </div>
        <div className="bg-blue-400 text-white  p-2  rounded text-sm">
          {massage?.massage?.type == "image" || 'text' && <>
            {massage?.massage.type === "image" ? (
              <img onClick={ShowImg} className=" w-[100px]" src={massage?.massage.massage} />
            ) : (
              massage.massage?.type==="voice"?<VoiceBox source={massage?.massage?.massage} />:massage.massage?.massage
            )}</>}
        
        </div>
      </div>
    </div>
  );
}
