import React from 'react'
import { IoLogOut } from "react-icons/io5";
import { LEFT_SIDEBAR_LINKS } from '../constants/left-sidebar-links';
import {NavLink, useLocation} from 'react-router-dom';

const Leftsidebar = () => {
    const {pathname} = useLocation()
  return (
    <nav className='hidden md:flex bg-black px-4 py-10 flex-col justify-between border-r min-w-[16rem]'>
        <div className='flex flex-col gap-11'>
            {/*logo*/}
            <div className='flex gap-3 px-4'>
                <img src='https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png' alt='logo' width={100} height={100}/>
            </div>
            {/*links*/}
            <ul className='flex flex-col gap-4'>
                {
                    LEFT_SIDEBAR_LINKS.map((item)=>{
                        let isActive = pathname === item.href;
                        return (<li key={item.id} className={`rounded-lg text-[1rem] font-medium leading-[140%]
                         hover:bg-[#1c1e21] transition text-white cursor-pointer ${isActive ? "bg-[#1c1e21]" : ""}`}>
                            <NavLink to={item.href} className='flex items-center gap-4 px-4 py-2'>
                                {item.icon}
                                <span className='text-lg'>{item.title}</span>
                            </NavLink>
                        </li>)
                    })
                }
            </ul>
            {/*button*/}
            <button className='flex flex-row justify-center items-center gap-2 bg-white text-red-500 px-4 py-2.5 rounded-md'>
                <IoLogOut size={24}/>
                <span className='text-lg font-bold'>Logout</span>
            </button>

        </div>
    </nav>
  )
}

export default Leftsidebar