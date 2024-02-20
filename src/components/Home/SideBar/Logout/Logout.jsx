import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from '../../../Store/Slices/Slices';
import { toast } from 'react-toastify';

export default function Logout() {
    const Socket = useSelector(state=>state.socket)
    const dispatch = useDispatch()
    function Logout()
    {
        dispatch(LogOut())
        toast.success("Logout Successfully", {
            position:"top-center"
        })
        Socket.off()
    }
  return (
    <div className="absolute bottom-3 p-2">
      <div className=" rotate-180">
        <button onClick={Logout} className='p-3 bg-blue-400 rounded-full text-white'>
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}
