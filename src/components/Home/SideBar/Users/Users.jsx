import React from "react";
import UserCard from "./UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";

export default function Users({users,add}) {
  const user = useSelector((state) => state.user);
  const activeUser = useSelector((state) => state.activeUser);
  const userArr = users.filter((data) => data._id !== user._id);
  const newArr = userArr?.map(data => {
    const isActive = activeUser?.filter(dat => (dat._id === data._id) && (dat._id !== user._id))[0]
    if (isActive)
    {
      return isActive
    }
    else
    {
      return data
      }
  })
  
  const usersData = newArr?.map((data) => {
    return <UserCard data={data} add={add} />;
  });
  return (
    <div>
      <div className="con flex flex-col gap-3">{usersData}</div>
    </div>
  );
}
