import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";   
import { BsThreeDots } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { IoBookmark } from "react-icons/io5";
import { BiHeart, BiComment, BiShare} from 'react-icons/bi'

const Posts = ({fullname,avatar,image,updatedAt,likenumber,description}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likenumber);
    const [isSaved, setIsSaved] = useState(false);



    const onLikeToggle = () => {
        
        setIsLiked(!isLiked);

        if (!isLiked) {
            setLikeCount(likeCount + 1)
        }
        else {
            setLikeCount(likeCount - 1)
        }
    }


    const onSavedToggle = () => {
        setIsSaved(!isSaved)
    }

  return (
    <div className='hidden md:flex bg-black px-14 py-10 gap-4 flex-col justify-center wid-w-[16rem]'>
        <div className='flex flex-row items-center gap-3'>
            <img src={avatar}  alt="profile" className='h-12 w-12 rounded-full'/>
            <span className='text-white '>{fullname}</span>
            <span className='font-medium text-xs text-gray-500'>•</span>
            <p className='font-medium text-xs text-gray-500'>{updatedAt}</p>
            <button className='text-white text-lg ml-auto'><BsThreeDots/></button>
        </div>
        <div>
        <img src={image}  alt="profile" className='  h-full w-full'/>
        </div>
        <div className='flex flex-row items-center gap-3'>
            <button onClick={onLikeToggle} className="flex items-center justify-center p-1 rounded-full">
                {isLiked ? <FaHeart size={24} className="text-red-500" /> : <BiHeart size={24} className='text-white'/>} 
            </button>
            <button className="flex items-center justify-center p-1 rounded-full">
                <BiComment size={24} className='text-white'/>
            </button>
            <button className="flex items-center justify-center p-1 rounded-full">
                <BiShare size={24} className='text-white'/>
            </button>
            <button onClick={onSavedToggle} className="flex items-center justify-center p-1 rounded-full ml-auto">
                {isSaved ? <IoBookmark size={24} className='text-white' /> : <CiBookmark size={24} className='text-white'/>}
            </button>
        </div>
        <div className='flex flex-row gap-2'>
            <span className='text-white'>{likeCount}</span>
            <span className='text-white'> likes</span>
        </div>
        <div className='flex flex-row gap-2 text-white'>
            <span className='font-bold'>{fullname}</span>
            <span>{description}</span>
        </div>
    </div>
  )
}

export default Posts