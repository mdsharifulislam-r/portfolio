import React, { useState } from "react";
import InputElement from "../InputElement/InputElement";
import Logo from "../../Logo/Logo";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Store/Slices/Slices";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
   
    email: "",
    pass: "",

  });
  function AddValue(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
    const [err, setErr] = useState("");
    const [color, setColor] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();

    const { email, pass } = formData;
    const found = user?.filter((user) => user.email === email)[0]
    if (found['name']) {
      if (email && pass) {
        
          dispatch(LoginUser(found));
          toast.success("Log in Successfully", {
            position: "top-center",
          });
          setFormData({
           
            email: "",
            pass: "",
          
          });
          navigate("/");
        } else {
          setColor("red");
          setErr("Password Not match");
        }
      } else {
        setColor("red");
        setErr("Please fill all the data");
      }
   
  }
  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center place-items-center  ">
      <div className="cont p-4 bg-white lg:w-[400px] h-[60vh] w-[90%] flex flex-col rounded-md shadow">
        <div className="header flex flex-col justify-center place-items-center h-[30%]">
          <div className="text-5xl">
            <Logo />
          </div>
          <div className="text-xl logo">Login Now</div>
        </div>
        <form action="" className="log" onSubmit={HandleSubmit}>
          <InputElement
            placeholder="Email Address"
            name="email"
            id="email"
            type="email"
            onChange={AddValue}
          />
          <div className="relative w-full">
            <InputElement
              placeholder="Password"
              name="pass"
              id="name"
              type={show ? "text" : "password"}
              onChange={AddValue}
            />
            <div
              className="absolute right-5 flex justify-center place-items-center h-full top-0"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? <FaEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className="text-center">
            <span style={{ color: color }}>{err}</span>
          </div>
          <div className="p-1">
            <button
              type="submit"
              className="w-full p-1 text-white active:shadow-inner rounded-md bg-blue-400"
            >
              Login
            </button>
          </div>
          <div className="text-sm font-thin text-center p-1">
            If you have no account then{" "}
            <span className="text-rose-400">
              <Link to="/">Create a account</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
