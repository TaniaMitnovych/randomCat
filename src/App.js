import CatMessageCard from "./components/CatMessageCard";
import InputField from "./components/InputField";
import UserMessageCard from "./components/UserMessageCard";
import './index.scss';
import { useState, useEffect, useRef } from "react";
function App() {
  const [message, setMessage] = useState("");
  const [messageArray, setMessageArray] = useState([]);
  useEffect(() => {
    if (message !== "") {
      setMessageArray(prev => {
        return [...prev, <UserMessageCard message={message} />, <CatMessageCard key={new Date()} />]
      });
      window.scrollTo(0, document.documentElement.scrollHeight);
    }
  }, [message]);
  return (
    <div className="App">
      <div className="messages">
      {
        messageArray.map(message => message)
      }
      </div>
      <InputField onButtonClick={setMessage} />
    </div>
  );
}

export default App;
