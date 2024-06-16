import React from 'react'

const SuggestedProfile = ({fullname,type,ProfilePic}) => {
  return (
    <div className='flex flex-row justify-between bg-black items-center gap-4'>
        {/*left div*/}
        <div className='flex flex-row justify-center items-center gap-3'>
            <img src={ProfilePic}  alt="profile" className='h-12 w-12 rounded-full'/>

            <div className='relative flex flex-col justify-center items-start'>
                <span className='text-white font-extrabold'>{fullname}</span>
                <span className='text-gray-500'>{type}</span>
            </div>
        </div>

        {/*right div*/}
        <p className='text-sm font-normal text-blue-500 cursor-pointer'>
            Follow
        </p>
    </div>
  )
}

export default SuggestedProfile