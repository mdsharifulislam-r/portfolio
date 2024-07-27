import React from 'react'

export default function TechBox({data}) {
  return (
    <div className='px-2 text-center py-1 bg-gray-500 rounded-full  text-[12px] hover:bg-white hover:text-black transition duration-300 cursor-pointer'>
      {data}
    </div>
  )
} 
