import React, { useEffect, useState } from "react";
import InputElement from "../../../../User/InputElement/InputElement";
import Logo from "../../../../Logo/Logo";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddUser,GetUser, UpdateUser } from "../../../../Store/Slices/Slices"; 
import { toast } from "react-toastify";
import axios from "axios";

export default function Profile() {
    const user= useSelector(state=>state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
    const [color, setColor] = useState("");
    const [img,setImg]=useState("")

  const [formData, setFormData] = useState({
    name: user?.name,
    email:user?.email,
  });
  function AddValue(e) {
    const { name, value,files } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
       const form = new FormData();
      form.set("image", files && files[0]);
      form.set("key", "55d07bcbfea93bd44662af25d0776cad");
      axios.post("https://api.imgbb.com/1/upload", form).then((dat) => {
          const data = dat.data;
          console.log(data);
          setImg(data?.data?.display_url);
      })
  }
  function HandleSubmit(e) {
    e.preventDefault();

    const { name, email} = formData;
   
 
      if (name && email) {
      
          const obj = {
              ...user,
            name,
              email,
            img
          };
          console.log(img);
          dispatch(UpdateUser(obj))
          toast.success("Your account Update Successfully", {
            position: "top-center",
          });
          
          navigate("/");
       
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
          <div className="text-xl logo">Update Profile</div>
        </div>
        <form action="" className="log" onSubmit={HandleSubmit}>
          <InputElement
            placeholder="Full Name"
            name="name"
                      id="name"
                      value={formData.name}
            onChange={AddValue}
          />
          <InputElement
            placeholder=""
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
                      value={formData.email}
          />

          <div className="text-center">
            <span style={{ color: color }}>{err}</span>
          </div>
          <div className="p-1">
            <button
              type="submit"
              className="w-full p-1 text-white active:shadow-inner rounded-md bg-blue-400"
            >
              Update
            </button>
          </div>
          <div className="text-sm font-thin text-center p-1">
            Forget Password{" "}
            <span className="text-rose-400">
              <Link to="/login">Change Password</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
