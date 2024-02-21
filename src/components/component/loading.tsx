import React from 'react'
import { logo } from '../../../public'
const Loading = ({ text }: { text: string }) => {
    return (
        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2  '>
            <div className='flex'>
                <img src={logo.src} className='w-[32px] animate-spin mr-4' alt="" />
                <span className='text-white animate-pulse'>{text}</span>
            </div>
        </div>
    )
}

export default Loading