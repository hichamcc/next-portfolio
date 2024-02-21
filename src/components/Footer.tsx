import React from 'react'
import { upworksvg, google, github, whatsapp } from '../../public'

const Footer = () => {
    return (
        <div className='border-t-2 border-t-light-blue mb-4 flex justify-between  py-4'>

            <div className='px-4 sm:text-[18px] text-[14px] '>2024 © Code <span className='text-blue-300'>By</span> Hicham</div>
            <div className='flex text-light-blue '>
                <span className='px-4 hover:cursor-pointer hover:scale-110 transition'>
                    <img src={upworksvg.src} className='w-[26px] h-[26px]' alt="" />
                </span>
                <span className='px-4 hover:cursor-pointer hover:scale-110 transition'>
                    <img src={google.src} className='w-[24px] h-[24px]' alt="" />
                </span>
                <span className='px-4 hover:cursor-pointer hover:scale-110 transition'>
                    <img src={github.src} className='w-[24px] h-[24px]' alt="" />
                </span>
                <span className='px-4 hover:cursor-pointer hover:scale-110 transition'>
                    <img src={whatsapp.src} className='w-[24px] h-[24px]' alt="" />
                </span>
            </div>

        </div>
    )
}

export default Footer