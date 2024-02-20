import React, { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import {
  ChangeRecever,
  TakeActiveUser,
  addMassage,
} from "../../../../Store/Slices/Slices";
import { FaCross, FaImage, FaMicrophone, FaPushed, FaSquare, FaTrash } from "react-icons/fa";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import VoiceRecorder from "./VoiceRecorder/VoiceRecorder";
import { useReactMediaRecorder } from "react-media-recorder";

import audio from "../../../../../assets/MassageSound/sound.mp3"
import SendAudio from "./VoiceRecorder/SendAudio/SendAudio";


export default function InputContainer() {
  const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.user);
  const room = useSelector((state) => state.recever);
  const dispatch = useDispatch();
  const cloud_name = "ylbfyu09";
  const presetKey = "ylbfyu09";
  const [massage, setMassage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [voice,setVoice]=useState(null)
  const [img, setImg] = useState("");
  const [audioFile,setAudioFile]=useState(null)
 
  function AddImage(e) {
    const { files } = e.target;
    const form = new FormData();
    console.log(files[0]);
    form.set("image", files && files[0]);
    form.set("key", "55d07bcbfea93bd44662af25d0776cad");
    axios.post("https://api.imgbb.com/1/upload", form).then((dat) => {
      const data = dat.data;

      setImg(data?.data?.display_url);
    });
  }
  function SendData() {
    const mas = {
      massage: {
        id: nanoid(),
        type:voice?"voice": massage ? "text" : "image",
        massage:voice?voice: massage ? massage : img,
      },
      senderId: user._id,
      receverId: room._id,
    };

    dispatch(addMassage(mas));
    socket.emit("send-massage", mas, room?.room);
    setMassage("");
    setImg("");
    setVoice(null)
  }
  const InputRef = useRef(null);
  useEffect(() => {
    InputRef.current.focus();
  }, [InputRef]);
  return (
    <div className="w-full h-[10%] flex justify-center place-items-center p-3">
      <div className="p-3 bg-blue-400 rounded-full text-white relative">
        <input
          type="file"
          name=""
          id=""
          onChange={AddImage}
          multiple={true}
          className="absolute w-full h-full top-3 left-0 opacity-0"
        />
        <FaImage />
      </div>
      <div className=" w-full flex gap-2 p-1 rounded-full shadow-lg">
        <input
          type="text"
          ref={InputRef}
          className="w-[90%] rounded-full focus:outline-none px-3 py-1"
          placeholder="Type Something...."
          value={massage}
          onChange={(e) => {
            socket.on("get-users", (users) => {
              dispatch(TakeActiveUser(users));
            });
            dispatch(ChangeRecever());
            setMassage((prev) => e.target.value);
          }}
        />
        
        <div className="w-[10%] flex justify-center ">
        
         
            <>
              <button
                disabled={massage || img ? false : true}
                className={`${massage || img ? "bg-blue-400" : "bg-gray-400"
                  } p-2 text-lg rounded-full text-white active:bg-gray-400`}
                onClick={SendData}
              >
                <IoIosSend />
              </button>
            </>
        
        </div>
      </div>
    </div>
  );
}
