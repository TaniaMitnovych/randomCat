import React from 'react';
import Cat from '../assets/cat.png';
import meow from '../meow.json';
import { useState, useEffect } from 'react';
const CatMessageCard = (props) => {
  const imageUrl = "https://cataas.com/cat/gif";
  const [img, setImg] = useState();
  const [meowMessage, setMeowMessage] = useState("");

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  const showMeowMessage = () => {
    let i = 0;
    let newStr = "";
    let interval = setInterval(() => {
      if (i < meow.length) {
        newStr += meow[i];
        setMeowMessage(newStr);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
  useEffect(() => {
    fetchImage();
    showMeowMessage();
  }, []);
  
  return (
    <div className='cat-message-card message-card'>
      <div className='cat-message-card__icon message-card__icon'>
        <img className="icon" src={Cat} alt="Cat icon" />
      </div>
      <div className='cat-message-card__message'>
        <div className='cat-message-card__image'>
          <img srcSet={img} alt="" />
        </div>
        <p className='cat-message-card__text'>
          {
            meowMessage
          }
        </p>
      </div>
    </div>
  );
};

export default CatMessageCard;