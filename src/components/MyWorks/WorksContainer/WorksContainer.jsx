import React from 'react'
import WorkBox from './WorkBox/WorkBox'
import eventcy from '../../../assets/works/eventcy.png'
import mim from '../../../assets/works/mim.jpg'
import runu from '../../../assets/works/runu.jpg'
export default function WorksContainer() {
  return (
    <div className='lg:p-10 lg:px-24 py-10 flex flex-col gap-4'>
      <WorkBox
        name={"Eventcy.com"}
        desc={"This is a event management system. A user can handle private or public events in this website. A user can post blog also"}
        image={eventcy}
        live={'https://eventcy.netlify.app/'}
        frontend={'https://github.com/sj4568/Eventcy-Frontend'}
        backend={"https://github.com/sj4568/Eventcy-Server"}
      />
      <WorkBox
        name={"Mim Super Shop"}
        image={mim}
        desc={"This is a e-commerce website. A user can buy product using this website."}
        live={"https://mimsupershop.netlify.app/"}
        frontend={"https://github.com/sj4568/Mim-Fashion-Fontend"}
        backend={"https://github.com/sj4568/Mim-Super-Shop-Backend"}
      />
      <WorkBox
        name={"Runu The Chatting Application"}
        image={runu}
        desc={"This is a chatting application. A user can chat and make audio or video call by using this website."}
        live={"https://runu.netlify.app/"}
        frontend={"https://github.com/sj4568/RUNU-Frontend"}
        backend={"https://github.com/sj4568/RUNU-Backend"}
        skills={["socket.io"]}
      />
    </div>
  )
}
