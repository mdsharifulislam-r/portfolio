import React, { useId, useState } from 'react'
import PlanCard from './PlanCard/PlanCard'
import ToggleButton from './ToggleButton/ToggleButton'

export default function PlanContainer() {
  const mounth = [
    {
      title: "Basic",
      price: 28,
      time: "Month"
    },
    {
      title: "Advence",
      price: 35,
      time: "Month"
    },
    {
      title: "Premium",
      price: 50,
      time: "Month"
    },
  ]
  const year = [
    {
      title: "Basic",
      price: 288,
      time: "Year"
    },
    {
      title: "Advence",
      price: 350,
      time: "Year"
    },
    {
      title: "Premium",
      price: 500,
      time: "Year"
    },
  ]
  const [data, setData] = useState(mounth)
  function changeData(state) {
    
    setData(prev=>state?year:mounth)
  }
  const Arr = data.map(data => {
    const id = useId()
    return <PlanCard
      title={data.title}
      price={data.price}
      time={data.time}
      key={id}
    />
  })
  return (
    <div className='lg:px-24 lg:py-10 p-5'>
      <ToggleButton handle={changeData } />
      <div className=' grid lg:grid-cols-3 gap-4 pt-6'>
        {Arr}
      </div>
    </div>
  )
}
