import './App.css';
// import Input from './Input.jsx'
// import Comp from './Comp.js'
import React, { useState } from 'react';

const App = ()=> {
  const [val, setVal] = useState(0);
  return (
    <div>
        {/* <h2>name: {val.name}</h2>
        <h2>ban: {val.isBanned.toString()}</h2> */}
        <h2>{val}</h2>
        
    </div>
  )
}
export default App;
