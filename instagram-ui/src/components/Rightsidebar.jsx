import React from 'react'
import Profile from './Profile'
import SuggestedProfile from './SuggestedProfile'
import { SUGGESTED_ACCONT_DATA } from '../constants/suggested-account'

const Rightsidebar = () => {
  return (
    <aside className='hidden md:flex bg-black px-4 py-10 flex-col justify-between border-l w-full'>
        <div className='flex flex-col gap-11'>
            {/*account*/}
            <Profile fullname={'Mayank Jain'} 
            username={'mkjain98'}/>
            {/*suggested user*/}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row justify-between items-center'>
                    <span className='text-white font-bold'>
                        Suggested Account
                    </span>
                    <span className='text-blue-500 font-bold'>
                        See All
                    </span>
                </div>
                {SUGGESTED_ACCONT_DATA.map((account)=>(
                    <SuggestedProfile key={account.id} ProfilePic={account.ProfilePic} fullname={account.fullname} type={account.type}/>
                ))}
            </div>
        </div>
    </aside>
  )
}

export default Rightsidebar