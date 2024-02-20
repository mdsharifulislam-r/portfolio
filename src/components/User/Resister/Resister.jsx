import React, { useEffect, useState } from "react";
import InputElement from "../InputElement/InputElement";
import Logo from "../../Logo/Logo";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddUser, GetUser } from "../../Store/Slices/Slices";
import { toast } from "react-toastify";
import axios from "axios";

export default function Resister() {
 const dispatch = useDispatch()
  const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [err, setErr] = useState('')
  const [color, setColor] = useState('')
  const [img,setImg]=useState()
  const user = useSelector(state=>state.users)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass1: "",
    pass2: "",
  });
    function AddValue(e)
    {
        const { name, value,files} = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
        const form = new FormData();
        form.set("image", files && files[0]);
        form.set("key", "55d07bcbfea93bd44662af25d0776cad");
        axios.post("https://api.imgbb.com/1/upload", form).then((dat) => {
          const data = dat.data;

            setImg(data?.data?.display_url);
        });

    }
    function HandleSubmit(e)
    {
        e.preventDefault()
       
      const { name, email, pass1, pass2 } = formData
      const found = user?.some(user => user.email === email)
      if (!found) {
        if (name && email && pass1 && pass2) {
          if (pass1 === pass2) {
            const obj = {
              img,
              name,
              email,
              pass: pass1
            }
            dispatch(AddUser(obj))
            toast.success("Your account create Successfully", {
              position: "top-center"
            })
            setFormData({
              name: "",
              email: "",
              pass1: "",
              pass2:""
            })
            navigate("/login")
          }
          else {
            setColor("red")
            setErr("Password Not match")
          }
            
            
            
        }
        else {
          setColor("red")
          setErr("Please fill all the data")
        }
      } else
      {
        setErr("Email has already used")
        setColor("red")
        }
        
    }
  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center place-items-center  ">
      <div className="cont p-4 bg-white lg:w-[400px] h-[60vh] w-[90%] flex flex-col rounded-md shadow">
        <div className="header flex flex-col justify-center place-items-center h-[30%]">
          <div className="text-5xl">
            <Logo />
          </div>
          <div className="text-xl logo">Resister Now</div>
        </div>
        <form action="" className="log" onSubmit={HandleSubmit}>
          <InputElement
            placeholder="Full Name"
            name="name"
            id="name"
            onChange={AddValue}
          />
          <InputElement
            placeholder="Full Name"
            name=""
            id="name"
            type='file'
            onChange={AddValue}
          />
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
              name="pass1"
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

          <div className="relative w-full">
            <InputElement
              placeholder="Confirmed Password"
              name="pass2"
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
              Resister
            </button>
          </div>
          <div className="text-sm font-thin text-center p-1">
            If you have an account then{" "}
            <span className="text-rose-400">
              <Link to="/login">Log In</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
