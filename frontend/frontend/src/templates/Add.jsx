import React,{useState} from 'react'
import { Link,useLocation,useParams,useSearchParams,useNavigate,redirect } from 'react-router-dom'

function Add( props) {
  let { title , body} = props.data

  function addData(){
    fetch('http://localhost:8000/notes/',{
      method : "POST",
      body : JSON.stringify(data),
      headers : {
        "content-type" : "application/json; charset=UTF-8"
      }
    }).then(()=>{
      window.location.reload()
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
        <div  className='relative flex flex-col gap-5 text-lg mb-6' >

            <div className='flex items-center jusitfy-center gap-6 '>
              <label htmlFor="title"  ><strong> TITLE</strong></label>
              <input type="text" name='title' value={data.title}
              onChange={onChangeHandler} className='border w-full  rounded-lg shadoow-sm outline-0 p-2' placeholder='TYPE YOUR TITLE HERE (Less than 50 characters)'/>
            </div>

            <div className='flex items-center jusitfy-center gap-6 '>
              <label htmlFor="body"><strong> BODY</strong></label>
              <textarea name="body" rows="6" value={data.body} onChange={onChangeHandler} className='border w-full rounded-lg shadoow-sm outline-0 p-2' placeholder='TYPE YOUR CONTENT HERE'/>
            </div>
            <Link to={ '/'}>
              <button className='absolute right-0 border px-3 py-2 rounded-lg cursor-pointer shadow-lg text-white font-bold bg-green-500 shadow-green-500 active:shadow-none -bottom-12' onClick={ addData }> ADD</button> 
              </Link>

            <Link to={ '/' }>
              <button className='absolute border px-3 py-2 rounded-lg cursor-pointer shadow-lg text-white font-bold bg-red-600 shadow-red-400 active:shadow-none -bottom-12 right-28'>CANCEL</button>
            </Link>
            
        </div>
        
    </div>

  )
}

export default Add