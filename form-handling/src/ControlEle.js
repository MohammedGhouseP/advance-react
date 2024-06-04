import React,{useState} from 'react'

const ControlEle = () => {
     const [val,setVal] = useState({name:'',email:''});
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(val)  
  }
  return (
    <div>
       <form onSubmit={handleSubmit(data=>console.log(data))}>
        <input type='text' placeholder='name' onChange={(event)=>setVal({...val,name: event.target.value}) }></input>
        <input type='email' placeholder='email' onChange={(event)=>setVal({...val,email:event.target.value}) }></input>
        <input type='submit'></input>

      </form>
    </div>
  )
}

export default ControlEle
