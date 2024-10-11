import React, { useRef } from 'react';

const FocusableInputField = () => {
  const inputRef = useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Focusable Input Field</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
};

const UncontrolledInputField = () => {
  const inputRef = useRef(null);

  const handleChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Input Field</h2>
      <input ref={inputRef} type="text" onChange={handleChange} placeholder="Type something..." />
    </div>
  );
};

const ChangeBackgroundColor = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      <h2>Interacting with DOM Elements</h2>
      <div ref={divRef} style={{ width: '200px', height: '100px', backgroundColor: 'lightgray', cursor: 'pointer' }} onClick={handleClick}>
        Click me to change background color
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FocusableInputField />
      <hr />
      <UncontrolledInputField />
      <hr />
      <ChangeBackgroundColor />
    </div>
  );
};

export default App;
