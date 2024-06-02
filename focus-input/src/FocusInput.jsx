import React, { useEffect, useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);
  const uncontrolledInputRef = useRef(null);
  const displayRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleUncontrolledInputChange = () => {
    displayRef.current.textContent = uncontrolledInputRef.current.value;
  };

  const handleDivClick = () => {
    divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
  };

  return (
    <div>
      <h2>Focusable Input</h2>
      <input ref={inputRef} type="text" placeholder="Auto-focused input" />

      <h2>Uncontrolled Input</h2>
      <input 
        ref={uncontrolledInputRef} 
        type="text" 
        onChange={handleUncontrolledInputChange} 
        placeholder="Type here..." 
      />
      <p>Current value: <span ref={displayRef}></span></p>

      <h2>Change Background Color</h2>
      <div 
        ref={divRef} 
        onClick={handleDivClick} 
        style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', cursor: 'pointer' }}
      >
        Click me to change my background color
      </div>
    </div>
  );
};

export default FocusInput;
