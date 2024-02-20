import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function SearchBar({ users, handle }) {
  function AddValue(e) {
    const data = users?.filter((data) => {
      const nameArr = data?.name?.toLowerCase()?.split(" ");
      const dat = e.target.value.toLowerCase().split(" ");
      for (let i of nameArr) {
        for (let j of dat) {
          if (i == j) {
            return data;
          }
        }
      }
    });
    console.log(data);
    handle(data);
  }
  const isAddFreind = useSelector(state=>state.isAddFreind)
  return (
    <div>
      <div className="header text-3xl text-blue-500">{isAddFreind?"Add Freind":"Chat" }</div>
      <div className="searchBar w-full py-3 relative ">
        <input
          type="text"
          name=""
          id=""
          className="border w-full px-4 py-2 rounded-lg focus:outline-none focus:bg-gray-100 shadow "
          placeholder="Search"
          onChange={AddValue}
        />
        <div className="absolute right-0 top-0 h-full flex justify-center place-items-center pr-4">
          <button className="text-blue-400">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
