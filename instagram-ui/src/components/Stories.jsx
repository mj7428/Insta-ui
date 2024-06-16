import React,{useContext,useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import Story from './Story'
import { StoryDataUser } from '../constants/story-data-user'

const Stories = () => {
  const {StoryDataUser} = useContext(GlobalContext);
  return (
    <div className="flex space-x-2 bg-black mt-2 p-6">
         
            {
                StoryDataUser.map((story)=>(
                    <Story
                    key={story.id}
                    avatar={story.avatar_url}
                    username={story.login}
                    isWatched={false}
                    />
                ))
            }

        
    </div>
  )
}

export default Stories