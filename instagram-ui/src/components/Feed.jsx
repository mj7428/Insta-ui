import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import { POST_DATA } from '../constants/post-data'

const Feed = () => {
  return (
    <main>
      <main className='flex flex-col bg-black items-center gap-10 m-4 overflow-x-scroll no-scrollbar'>
        <section>
          <Stories/>
        </section>
      </main>
      <section>
        {
          POST_DATA.map((data)=>(
            <Posts key={data.id} fullname={data.fullname} avatar={data.avatar} image={data.image} updatedAt={data.updateAt} likenumber={data.likenumber} description={data.description}/> 
          ))
        }
      </section>
    </main>
  )
}

export default Feed