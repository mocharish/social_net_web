

import React, { useState, useEffect } from 'react';
import './loginPage.css';
import CreateNew from './createNew';
import { useUserInitialization } from './users.js';
import { useNavigate } from 'react-router-dom';

import Logo from './logo.js';


function  LoginPage() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { users } = useUserInitialization();
  const navigate = useNavigate(); 
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);



  const handleLogin =  async () => {
    const user ={
      email: email,
      password: password
    }
    const response = await fetch("http://localhost:8080/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    if(response.status !== 201){
      console.log(response);
      alert("Invalid email or password");
      return;
    }

    const json = await response.json();
    const token = json.token;
    const loggedUser= json.user;
    console.log('login token',token);
    navigate('/feed', { state: { user: loggedUser, token: token } });
  };




  return (
  
      <div className={`container ${isNightMode ? 'night-mode' : ''}`}>
          <div
          className={`night-mode-btn ${isNightMode ? 'night-mode-icon' : ''}`}
          onClick={toggleNightMode}
        >
          <i className="bi bi-moon"></i>
        </div>
        <Logo/>

        <div className="right-section-container">
          <div className="right-section">
            <div className="right-section-content">
              <input type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="right-section-content">
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="right-section-content">
             
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              
            </div>
            <div className="right-section-content">
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#signUp-modal"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      
        <CreateNew isNightMode={isNightMode} />
      </div>
  );
}

export default LoginPage;