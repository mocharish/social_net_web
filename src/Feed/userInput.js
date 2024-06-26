import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './userInput.css'; 


function UserInput({user, token}) {
  const navigate = useNavigate(); 
  console.log('userInput:', user);
  const handleClick = () => {
    // navigate(`/profile/${user.email}`, { state: { user, token } });
    navigate(`/profile/${user.email}`, { state: { token: token ,connectedEmail:user.email, connectedUser: user } });
  };


  return (
    <div className="user-container">
      {user && (
        <>
          <div
             onClick={handleClick}
            className="user-info"
          >
            <img src={user.photo} alt="User Photo" className="user-photo" />
            <div className="user-name">{user.name}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInput;

