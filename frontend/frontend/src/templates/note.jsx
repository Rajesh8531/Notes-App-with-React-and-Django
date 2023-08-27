import React from 'react'
import { Link } from 'react-router-dom'

function note(note) {
    let {title , body,id} = note.note
    let content = body.slice(0,40)
  return (
    <>
        <div className='text-black text-3xl relative flex flex-col gap-3 border-b mb-5 pb-7'>
            <h1 className='font-bold'>{title}</h1>
            <Link to={`${id}`}>
              <button className='absolute top-7 right-8 px-6 py-2 border text-lg shadow-lg shadow-violet-500 text-white bg-violet-500 active:shadow-none cursor-pointer rounded-md'>VIEW</button>
            </Link>
            
            <p className='text-2xl '>{content}...</p>
        </div>
    </>
    
  )
}

export default note