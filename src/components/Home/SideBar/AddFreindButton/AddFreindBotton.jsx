import React from "react";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ChangeState } from "../../../Store/Slices/Slices";

export default function AddFreindBotton() {
    const dispatch = useDispatch()
  return (
    <div className="absolute bottom-3 right-5  p-2" onClick={()=>{dispatch(ChangeState(true))}}>
      <div className=" rotate-180">
        <button className="p-3 shadow bg-blue-400 rounded-full text-white">
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
