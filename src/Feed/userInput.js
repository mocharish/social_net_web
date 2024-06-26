

import React from 'react';
import { useLocation } from 'react-router-dom';
import './userInput.css'; // Import the CSS file

function UserInput() {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="user-container">
      {user && (
        <>
          <div className="user-info">
            
            <img
              src={user.photo}
              alt="User Photo"
              className="user-photo"
            />
            <div className="user-name">{user.name}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInput;


