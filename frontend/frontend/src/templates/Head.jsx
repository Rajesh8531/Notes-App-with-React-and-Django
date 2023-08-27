import React, { useEffect } from 'react'
import Note from './note'
import {useSearchParams ,Outlet,useLoaderData,Link, } from 'react-router-dom';



export async function loader(){
    return await fetch('http://localhost:8000/notes/').then(res => res.json())
}

function Head() {


    let loaderData = useLoaderData()

    let notes = loaderData.map(data => {
        return (<Note note={data} key={data.id} />)
    })

    return (
            <>
                <div className=" container w-[80%] mx-auto my-8 flex flex-col bg-yellow-400 h-auto shadow-2xl shadow-indigo-950 rounded-md p-8 relative ">
                <h1 className=' text-white text-5xl border-b-4 border-gray-800 p-4 mb-4 text-center '>Notes App</h1>      
                {notes && notes}
                <Link to={'/add'}>
                    <button className='absolute right-5 text-xl font-bold     rounded-md text-white bg-blue-600 active:shadow-none shadow-lg cursor-pointer top-5 border px-3 py-2 shadow-blue-600'>Add</button>
                </Link>
                
                </div>
                <Outlet />
            </>
                )
}

export default Head