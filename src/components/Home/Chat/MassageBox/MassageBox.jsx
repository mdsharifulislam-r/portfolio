import React, { useCallback, useEffect, useRef, useState } from "react";

import MassageContainer from "./MassageContainer/MassageContainer";
import InputContainer from "./InputContainer/InputContainer";
import { useDispatch, useSelector } from "react-redux";
import { ChangeRecever } from "../../../Store/Slices/Slices";
import { Link, useNavigate } from "react-router-dom";
import VoiceRecorder from "./InputContainer/VoiceRecorder/VoiceRecorder";

export default function MassageBox() {
    const socket = useSelector(state => state.socket)
    const massages = useSelector((state) => state.massages);
    const dispatch = useDispatch()
    const lastMassage = useSelector(state => state.lastMassage)
      const [size, setSize] = useState(window.innerWidth);
      window.addEventListener("resize", () => {
        setSize(window.innerWidth);
      });
    const isMobile = size > 600 ? false : true;
    const navigate = useNavigate()
    function LastIndex()
    {
        const Ateg = document.createElement('a')
        Ateg.href = `#${lastMassage?.massage?.id}`;
        
        document.body.appendChild(Ateg)
        Ateg.click()
        
    }

    return (
      <div
        id="mass"
       
        onClick={() => {
          socket.emit("getUsers", "");
          dispatch(ChangeRecever());
        }}
        className="bg-white p-2 h-[90%] rounded-lg gap-1 flex flex-col scrollbar-none"
        >
           
        <MassageContainer />
        
        <InputContainer />
      </div>
    );
}
