import React, { useState, useEffect, useRef } from 'react';
import SendButton from '../assets/send.png';
const InputField = (props) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    document.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        props.onButtonClick(inputRef.current.value);
        setMessage("");
      }
    })
  }, []);
  return (
    <div className='input-field'>
      <input ref={inputRef} type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => { props.onButtonClick(message); setMessage("") }}><img src={SendButton} /></button>
    </div>
  );
};

export default InputField;