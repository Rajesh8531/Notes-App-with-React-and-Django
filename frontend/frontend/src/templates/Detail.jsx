import React,{useState} from 'react'
import { useLoaderData,useParams,Link} from 'react-router-dom'
import Update from './Update'



export async function loader({request}){
  const url = new URL(request.url)
  const id = url.pathname
  return await fetch(`http://localhost:8000/notes${id}/`).then(res => res.json()).then(data => data)
}

const Detail = () => {
    let data = useLoaderData()
    let {id} = useParams()

    let [update,setUpdate] = useState(false)

    function DELETE(){
      fetch(`http://localhost:8000/notes/${id}/`,{
        method: 'DELETE',
        headers : {'Content-type':'application/json'}
      })
      history.go(-1)
    }


  return (
    <>
    <div className=" container w-[80%] mx-auto my-8 flex flex-col bg-yellow-300 gap-8 h-auto shadow-lg shadow-violet-600 p-8 relative text-lg ">

          <Link  className='absolute top-7 right-36 px-3 py-2 border text-lg shadow-lg shadow-red-500 text-white bg-red-500 active:shadow-none cursor-pointer rounded-md font-bold' onClick={()=>{
            DELETE()
          }} >DELETE</Link>

          <button className='absolute top-7 right-8 px-3 py-2 border text-lg shadow-lg shadow-green-500 text-white bg-green-500 active:shadow-none cursor-pointer rounded-md font-bold' onClick={()=>{
            setUpdate(true)
          }}>EDIT</button>


        <h1 className='text-center text-violet-600 text-3xl font-bold mb-8'>{data.title}</h1>
        <p className='text-xl font-medium'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.body}</p>

          <Link to={'/'}>
              <button className='absolute letf-0 border px-3 py-2 rounded-lg cursor-pointer shadow-lg text-white font-bold bg-emerald-600 shadow-emerald-400 active:shadow-none top-7'>HOME</button>
            </Link>
    </div>
    {update && <Update data={{title:data.title,body:data.body}} />}
    </>
  )
}

export default Detail