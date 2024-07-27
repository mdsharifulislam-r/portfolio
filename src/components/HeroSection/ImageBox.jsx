import React from "react";
import image from "../../assets/images/image.png";
export default function ImageBox() {
  return (
    <div className="w-full h-screen flex bg-black justify-center place-items-center">
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
