import React, { useRef, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import SendAudio from "./SendAudio/SendAudio";

export default function VoiceRecorder({ start, stop }) {
  const { startRecording, stopRecording, status, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  function Start()
  {
    start(startRecording)
  }
  function Stop()
  {
    stop(stopRecording,mediaBlobUrl)
  }

  function Ex()
  {
    
  }

  return (
    <div>
     
      <div onClick={Ex}>{status}</div>
      <button onClick={startRecording}>Start</button>
      <button onClick={stopRecording}>Stop</button>
      {mediaBlobUrl && <audio controls src={mediaBlobUrl} />}
    </div>
  );
}
