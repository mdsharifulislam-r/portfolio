import React from "react";
import Logo from "../../../Logo/Logo";
import { Link } from "react-router-dom";
import img from "../../../../assets/Avtar/avtar.jpg";
import { useSelector } from "react-redux";
export default function Header() {
    const user = useSelector(state=>state.user)
  return (
    <div className="flex place-items-center justify-between pb-2">
      <div className="text-2xl">
        <Logo />
      </div>
      <div>
        <Link to="/profile">
          <img
            src={user?.img?user?.img:img}
            alt=""
            className=" w-10 h-10 object-cover rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
