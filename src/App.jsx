import React, { useEffect } from 'react'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Aos from 'aos';
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration:1500
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Home/>
    <Navbar/>
      <ToastContainer/>
    </>
  );
}

export default App
