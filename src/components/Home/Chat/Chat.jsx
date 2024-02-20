import React, { useEffect } from 'react'
import UserCard from '../SideBar/Users/UserCard/UserCard'
import MassageBox from './MassageBox/MassageBox'
import { useSelector } from 'react-redux'

export default function Chat() {
  const sender = useSelector(state=>state.recever)

  return (
    <div className='bg-slate-200 w-full h-screen p-10 lg:flex flex-col gap-3 hidden'>
          <div className="con">
              <UserCard data={sender} audioCall={true} videoCall={true}/>
          </div>
         
              <MassageBox/>
          
    </div>
  )
}
