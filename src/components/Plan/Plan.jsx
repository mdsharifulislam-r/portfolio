import React from 'react'
import Heading from '../Heading/Heading'
import PlanContainer from './PlanContainer/PlanContainer'

export default function Plan() {
  return (
    <div className='bg-primary'>
          <div className="flex justify-center ">
              <Heading title={"Best Pricing Plan"} sub1={"Chose Plan "} sub2={"for you"} />
          </div>
          <PlanContainer/>
    </div>
  )
}
