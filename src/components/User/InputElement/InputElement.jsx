import React from 'react'

export default function InputElement(props) {
  return (
    <div className='p-1'>
      <input  className='w-full bg-slate-100 border px-3 py-1 focus:outline-none rounded-md' {...props}  />
    </div>
  )
}
