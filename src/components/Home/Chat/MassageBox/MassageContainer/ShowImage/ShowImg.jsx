import React from "react";
import UrlImageDownloader from "react-url-image-downloader";
import { FaDownload, FaShare } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShowImg() {
    const img = useSelector((state) => state.img);
    function Download()
    {
        <UrlImageDownloader imageUrl={img}/>
    }
  return (
    <div className="w-full h-screen " style={{ backgroundImage: img }}>
      <img
        src={img}
        className=" fixed -z-20 w-full h-screen object-cover"
        alt=""
      />
      <div className="header flex justify-end p-3 absolute z-20 w-full gap-4 text-white">
        <div>
          <FaShare />
        </div>
      </div>
      <div className="flex backdrop-blur-md h-screen justify-center place-items-center p-3">
        {/* <div>
          <img src={img} alt="" />
        </div> */}
        <div className=" flex justify-center text-blue-400 text-xl shadow">
                  <UrlImageDownloader imageUrl={img}
                  />
        </div>
      </div>
    </div>
  );
}
