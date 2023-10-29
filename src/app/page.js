"use client"
import React, { useState }from 'react';

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask)

  }
  const deleteHandler = (i) =>{
    let copytask =[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }
  let renderTask = <h2>No Task Available</h2>;
  if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return(<li key={i} className ="flex items-center justify-between">
<div className="flex justify-between mb-5 w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h5  className="text-2xl font-semibold">{t.desc}</h5>
       </div>
       <button  onClick={()=>{deleteHandler(i)}}className='text-white font-bold bg-red-400 rounded px-4 py-2'>
        Delete
       </button>
    </li>)
  })
}
  
  return (
   <>
   <h1 className='bg-black text-5xl font-bold text-white text-center p-5'>My Todo list</h1>

   <form onSubmit={submitHandler}>
    <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
     placeholder='Enter Title here'
     value={title} onChange={(e)=>{

     settitle(e.target.value)
    }}/>

    <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
     placeholder='Enter Description'
     value={desc} onChange={(e)=>{

      setdesc(e.target.value)
     }}/>

     <button className='bg-black text-white text-2xl px-4 py-3 font-bold rounded! m-5'>Add Task</button>

   </form>
   <hr/>
   <div className="p-8 bg-slate-200">
   <ul>{renderTask}</ul>
   </div>
   </>
  
  );
};

export default page
