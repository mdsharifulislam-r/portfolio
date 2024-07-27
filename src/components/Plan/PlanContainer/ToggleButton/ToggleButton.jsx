import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function ToggleButton({ handle }) {
    const [state, setState] = useState(false)
    function Toggle() {
        setState(prev => !prev)
        handle(state)
    }
    const data = state ? { left: 0 } : { right: 0 }
    return (
        <div className='flex justify-center py-6'>
            <div className='flex place-items-center gap-3'>
                <span className={`text ${!state ? "text-white" : "text-color"}`}>Month</span>
                <div className='w-[100px] overflow-hidden p-2 h-[30px] relative rounded-full bg-zinc-900 cursor-pointer' onClick={Toggle}>
                    <motion.div animate={data} className="absolute w-[50%] h-full rounded-full header-bg top-0"></motion.div>
                </div>
                <span className={`text ${state ? "text-white" : "text-color"}`}>Year</span>
            </div>
        </div>
    )
}
