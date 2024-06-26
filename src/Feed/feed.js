
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

import { useLocation, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./feed.css";

function Feed() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const location = useLocation(); 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {

    document.body.classList.toggle('dark-mode', isDarkMode);
    if (location.state && location.state.user) {
      setUser(location.state.user);
  
    }

    if (location.state && location.state.token) {
      setToken(location.state.token);
    }
    console.log('Feed token:', token);
    console.log('Feed user2:', user);
  }, [isDarkMode, token, user]);
  
    return (
      <div className={`feed-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="container text-center" style={{ flex: 1 }}>
          <div className="row row-cols-auto">
            <div className="col">
              <Search />
              <FaceLogo />
              <Options  user={user} isDarkMode={isDarkMode} token={token}/>
            </div>
            <div className="col-5 try">
              <Icon isDarkMode={isDarkMode} />
              <Status />
              <Card user={user} />
              <PostList className="post-list" user={user} token={token} /> 
              <Add token={token} />
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


export default Feed;

