import React from 'react'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Home from './components/Home/Home';
const App = () => {

  return (
    <>
      <Home/>
      <ToastContainer/>
    </>
  );
}

export default App
