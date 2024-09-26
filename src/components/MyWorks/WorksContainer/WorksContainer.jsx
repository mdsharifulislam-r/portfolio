import React from 'react'
import WorkBox from './WorkBox/WorkBox'
import eventcy from '../../../assets/works/eventcy.png'
import mim from '../../../assets/works/mim.jpg'
import runu from '../../../assets/works/runu.jpg'
import coursify from '../../../assets/works/coursify.png'
import supertyper from '../../../assets/works/supertyper.png'
export default function WorksContainer() {
  return (
    <div className=' py-10 flex flex-col gap-4'>
         <WorkBox
      index={1}
      name={"Coursify"}
      desc={"This is a educational E-commarce website a user can post course or book and blog also. A user can enroll course or buy book"}
      image={coursify}
      live={'https://coursify-virid.vercel.app/'}
      frontend={'https://github.com/mdsharifulislam-r/Coursify'}
      backend={"https://github.com/mdsharifulislam-r/Coursify"}
    />
            <WorkBox
      index={2}
      name={"Super Typer"}
      desc={"Super typer is a typing skill tester website . here the features below A user can test his typing skill A user can track his."}
      image={supertyper}
      live={'https://supertyper.netlify.app/'}
      frontend={'https://github.com/mdsharifulislam-r/SuperTyper-Frontend'}
      backend={"https://github.com/mdsharifulislam-r/SuperTyper-Backend"}
    />
      <WorkBox
      index={3}
        name={"Eventcy"}
        desc={"This is a event management system. A user can handle private or public events in this website. A user can post blog also"}
        image={eventcy}
        live={'https://eventcy.netlify.app/'}
        frontend={'https://github.com/sj4568/Eventcy-Frontend'}
        backend={"https://github.com/sj4568/Eventcy-Server"}
      />
      <WorkBox
      index={4}
        name={"Mim Super Shop"}
        image={mim}
        desc={"This is a e-commerce website. A user can buy product using this website."}
        live={"https://mimsupershop.netlify.app/"}
        frontend={"https://github.com/sj4568/Mim-Fashion-Fontend"}
        backend={"https://github.com/sj4568/Mim-Super-Shop-Backend"}
      />
    
    </div>
  )
}
