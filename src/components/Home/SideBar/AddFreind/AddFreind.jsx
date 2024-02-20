import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Users from "../Users/Users";
import { useSelector } from "react-redux";

export default function AddFreind() {
  const users = useSelector((state) => state.users);
  const [temp, setTemp] = useState(users);
  function ChangeUser(obj) {
    setTemp(obj);
  }
  return (
    <div className="relative h-screen p-10 lg:w-[40%] w-full bg-slate-200 overflow-y-scroll scrollbar-none">
      <SearchBar users={users} handle={ChangeUser} />
      <Users users={temp.length !== 0 ? temp : users} add={true} />
    </div>
  );
}
