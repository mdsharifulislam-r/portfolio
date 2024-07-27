import React from 'react'
import Heading from '../Heading/Heading'
import WorksContainer from './WorksContainer/WorksContainer'

export default function MyWorks() {
  return (
    <div className='bg-black p-4'>
          <div className="flex justify-center ">
              <Heading title={"My Works"} sub1={"Some Works "} sub2={"by me"} />
          </div>
          <WorksContainer/>
    </div>
  )
}
