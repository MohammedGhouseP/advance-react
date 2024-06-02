import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const validateName = () => {
    if (nameRef.current.value.length < 3) {
      setNameError('Name must be at least 3 characters long.');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!emailPattern.test(emailRef.current.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (passwordRef.current.value.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateName();
    validateEmail();
    validatePassword();

    if (!nameError && !emailError && !passwordError) {
      setFormMessage('Form submitted successfully!');
    } else {
      setFormMessage('Please fix the errors before submitting.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            ref={nameRef}
            type="text"
            onBlur={validateName}
            onFocus={() => setFormMessage('')}
          />
          {nameError && <span className="error">{nameError}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            ref={emailRef}
            type="email"
            onBlur={validateEmail}
            onFocus={() => setFormMessage('')}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            ref={passwordRef}
            type="password"
            onBlur={validatePassword}
            onFocus={() => setFormMessage('')}
          />
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {formMessage && <div className="form-message">{formMessage}</div>}
    </div>
  );
};

export default App;
