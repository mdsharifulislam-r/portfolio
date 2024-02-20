import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Users from "./Users/Users";
import Logout from "./Logout/Logout";
import AddFreindBotton from "./AddFreindButton/AddFreindBotton";
import { useSelector } from "react-redux";
import Header from "./Header/Header";

export default function SideBar() {
  const user = useSelector((state) => state.user);
  return (
    <div className="relative h-screen p-3 lg:w-[40%] w-full bg-slate-200 overflow-y-scroll scrollbar-none">
      <Header />
      <SearchBar />
      <Users users={user.contacts ? user.contacts : []} />
      <Logout />
      <AddFreindBotton />
    </div>
  );
}
