import React from 'react';
import User from '../assets/man.png';
const UserMessageCard = (props) => {
  return (
    <div className='user-message-card message-card'>
      <div className='user-message-card__icon message-card__icon'>
        <img className="icon" src={User} alt="User icon"/>
      </div>
      <div className='user-message-card__text'>
        {props.message}
      </div>
    </div>
  );
};

export default UserMessageCard;