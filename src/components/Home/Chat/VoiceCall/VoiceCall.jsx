import React from 'react'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import ZIM from 'zego-zim-web';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Invitaion from '../MassageBox/Invitaion/Invitaion';
export default function VoiceCall() {
    const user = useSelector(state => state?.user)
    const recever = useSelector((state) => state?.recever);
    const { id } = useParams()
    console.log(window.location.href);
    const myMetting = async (element) =>
    {
        const appId = 583502879;
        const ServerSecret = "731713164819108cf6672a9931b17245";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, ServerSecret, id, user?._id, user?.name)
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario: {
                mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            layout: "Sidebar",
            sharedLinks: [{
                name: "Copy Link",
                url:`${window.location.origin}/voicecall/${id}`
            }],
            
        })
       
    }
    
  return (
    <div>
      <div ref={myMetting} className='w-full h-screen'/>
    </div>
  )
}
