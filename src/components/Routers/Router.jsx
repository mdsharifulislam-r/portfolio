import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Tamplate from "../Tamplate/Tamplate";
import Home from "../Home/Home";
import Resister from "../User/Resister/Resister";
import Login from "../User/Login/Login";
import AuthUser from "../Auth/AuthUser";
import Profile from "../Home/SideBar/Header/Profile/Profile";
import SmallChat from "../Home/Chat/Smallchat/SmallChat";
import ShowImg from "../Home/Chat/MassageBox/MassageContainer/ShowImage/ShowImg";
import VoiceCall from "../Home/Chat/VoiceCall/VoiceCall";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Tamplate />}>
      <Route path="/" element={<AuthUser />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<SmallChat />} />
        <Route path="/show" element={<ShowImg />} />
        <Route path="/voicecall/:id" element={<VoiceCall/>} />
      </Route>
      <Route path="/resister" element={<Resister />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

export default router