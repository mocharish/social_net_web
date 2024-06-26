import Search from './search.js';
import FaceLogo from './faceLogo.js';
import Options from './options.js';
import People from './people.js';
import Icon from './icons.js';
import Card from './card.js';
import Menu from './menu.js';
import Status from './status.js';
import PostList from './postList.js';
import Add from './addPost.js';
import Comment from './comment.js';
import { useLocation } from 'react-router-dom';
import { useNavigate,   location, Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import "./feed.css";

function Feed() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply dark mode styles
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const navigate = useNavigate(); 
  const location = useLocation();

  if(!location.state || location.state.user == null){
    return(
      <div className="warning-container">
      <h1>Oops!</h1>
      <p>It seems you are not logged in.</p>
      <p>Please click below to log in:</p>
      <Link to="/" className="login-link">Click here to log in</Link>
    </div>
    )
  }

  else{
    return (
      <div className={`feed-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="container text-center" style={{ flex: 1 }}>
          <div className="row row-cols-auto">
            <div className="col">
              <Search />
              <FaceLogo />
              <Options isDarkMode={isDarkMode} />
            </div>
            <div className="col-5 try">
              <Icon isDarkMode={isDarkMode} />
              <Status />
              <Card />
              <PostList className="post-list"/> 
              <Add /> 
              
            </div>
            <div className="col">
              <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              <People isDarkMode={isDarkMode} /> 
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Feed;
