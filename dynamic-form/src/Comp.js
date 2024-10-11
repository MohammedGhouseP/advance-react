import React, {useState} from 'react'

const Comp = () => {
    const [val, setval] = useState({name:"basah",isBanned:false});
  return (
    <div className=''>
        <h2>name: {val.name}</h2>
        
    </div>
  )
}

export default Comp;
