import React from "react";
import { GoMail } from "react-icons/go";
export default function ContactItem({ icon, type, info }) {
  return (
    <div className="flex place-items-center text-sm gap-4 text ">
      <div className="text-pink-400 text-sm flex place-items-center gap-2">
        {icon}
        {type}
      </div>
      <div><a href="">{info }</a></div>
    </div>
  );
}
