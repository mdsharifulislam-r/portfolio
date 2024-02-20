import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function VoiceBox({ source }) {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      var wavesurfer = WaveSurfer.create({
        container: divRef.current,
        waveColor: "white",
          progressColor: "purple",
          barWidth: 2,
          responsive: true,
        height:10,
      });
      wavesurfer.on("ready", function () {
        wavesurfer.play();
      });
      wavesurfer.load(source && source);
      }
      return ()=>wavesurfer.destroy()
  }, []);

  return <div ref={divRef} className=" max-w-lg min-w-[200px]"></div>;
}
