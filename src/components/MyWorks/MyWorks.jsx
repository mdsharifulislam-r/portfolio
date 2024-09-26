import React from 'react'
import Heading from '../Heading/Heading'
import WorksContainer from './WorksContainer/WorksContainer'

export default function MyWorks() {
  return (
    <div className='bg-primary '>
      <div className='container ""'>
      <div className="flex justify-center  ">
              <Heading title={"My Works"} sub1={"Some Works "} sub2={"by me"} />
          </div>
          <WorksContainer/>
      </div>
       
    </div>
  )
}
