import React,{useState} from 'react'
import { Link,useParams } from 'react-router-dom'

function Update( props) {
  let { title , body} = props.data

    function updateData(){
        console.log("UPDATE MEHOD CALLED")
    fetch(`http://localhost:8000/notes/${id}/`,{
      method : 'PUT',
      body : JSON.stringify(data),
      headers : {
        'Content-type' : 'application/json'
      }
    })
  }


  let {id} = useParams()

  let [data,setData] = useState({title:title,body:body})

  function onChangeHandler(event) {
    setData(prevData => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })    
  }

  return (
     <div className=' container w-[60%] flex flex-col mx-auto gap-12 p-10 border absolute top-52 left-60 bg-slate-300 shadow-lg shadow-black  '>
        <h1 className='text-center font-bold'>ADD</h1>
        <form  className='relative flex flex-col gap-5 text-lg mb-6' >

            <div className='flex items-center jusitfy-center gap-6 '>
              <label htmlFor="title"  ><strong> TITLE</strong></label>
              <input type="text" name='title' value={data.title}
              onChange={onChangeHandler} className='border w-full  rounded-lg shadoow-sm outline-0'/>
            </div>

            <div className='flex items-center jusitfy-center gap-6 '>
              <label htmlFor="body"><strong> BODY</strong></label>
              <textarea name="body" rows="6" value={data.body} onChange={onChangeHandler} className='border w-full rounded-lg shadoow-sm outline-0'/>
            </div>
              <button className='absolute right-0 border px-3 py-2 rounded-lg cursor-pointer shadow-lg text-white font-bold bg-green-500 shadow-green-500 active:shadow-none -bottom-12' onClick={ updateData }>UPDATE</button> 


            <Link to={`/${id}`}>
              <button className='absolute border px-3 py-2 rounded-lg cursor-pointer shadow-lg text-white font-bold bg-red-600 shadow-red-400 active:shadow-none -bottom-12 right-28' onClick={()=>{window.location.reload()}}>CANCEL</button>
            </Link>
            
        </form>
        
    </div>

  )
}

export default Update