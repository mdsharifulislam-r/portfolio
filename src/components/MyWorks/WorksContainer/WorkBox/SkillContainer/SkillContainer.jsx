import React from 'react'
import TechBox from './TechBox/TechBox'

export default function SkillContainer({ data}) {
    const techmap = data?.map(text => {
        return <TechBox data = {text} key={text}/>
    })
  return (
    <div className='grid lg:grid-cols-5 grid-cols-3 gap-2  py-4'>
      {techmap}
    </div>
  )
}
