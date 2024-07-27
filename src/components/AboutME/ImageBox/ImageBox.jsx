import React from 'react'
import image from '../../../assets/images/image.png'
export default function ImageBox() {
  return (
    <div className='lg:w-[30%] h-full flex justify-center place-items-center'>
      <img src={image} alt="" className='w-[100%] lg:h-[70vh] object-cover' />
    </div>
  )
}
