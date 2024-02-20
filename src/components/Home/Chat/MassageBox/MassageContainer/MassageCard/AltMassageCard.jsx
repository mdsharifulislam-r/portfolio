import React, { forwardRef } from "react";
import avtar from "../../../../../../assets/Avtar/avtar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SetImage } from "../../../../../Store/Slices/Slices";

function AltMassageCard({ massage,ref}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector((state) => state.users);
   const lastMassage = useSelector((state) => state.lastMassage);
   const isLastMassage = massage.massage?.id === lastMassage.massage?.id;
  
  const sender = users?.filter((user) => user._id === massage?.senderId)[0];
  function ShowImg() {
    dispatch(SetImage(massage.massage.massage));
    navigate(`/show`);
  }
  return (
    <div
      className="p-2 relative "
      id={massage.massage?.id}
      ref={isLastMassage ? ref : null}
    >
      <div className="  flex gap-2 justify-start  place-items-center">
        <div className="w-10 rounded-full">
          <img
            src={sender?.img ? sender?.img : avtar}
            alt=""
            className="w-[50px] h-[40px] object-cover rounded-full"
          />
        </div>
        <div className="bg-gray-400 text-white  p-2  rounded text-sm">
          {massage?.massage.type === "image" ? (
            <img
              onClick={ShowImg}
              className=" w-[100px]"
              src={massage?.massage.massage}
            />
          ) : (
            massage.massage.massage
          )}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(AltMassageCard)