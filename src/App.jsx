import React, { useEffect } from 'react'
import {RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js'


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Home from './components/Home/Home';
import router from './components/Routers/Router';
import { useDispatch, useSelector } from 'react-redux';
import { GetMassage, GetUser } from './components/Store/Slices/Slices';

const App = () => {
  const socket = useSelector(state => state.socket)
  
  const dispatch = useDispatch();
  useEffect(() => {
    socket.emit("getUsers", "");
  }, [socket])
  useEffect(() => {
    socket.on('reject-call', (massage) => {
      toast.error(massage, {
        position:"top-center"
      })
    })
   },[])
   useEffect(() => {
     dispatch(GetUser());
     dispatch(GetMassage())
   }, []);
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </>
  );
}

export default App
