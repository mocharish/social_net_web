
import React from 'react';
import { useLocation } from 'react-router-dom';
import photo from '../images/photo.jpg';
import tag from '../images/tag.jpg';
import feelings from '../images/feelings.jpg';
import './card.css';
import PostList from './postList.js';

function Card({isDarkMode}) {
  const location = useLocation();
  const user = location.state && location.state.user;

  return (
    <div>

      <div class="card">
        <div class="card-body">
          <div className="search-container">
            
            {user && (
        <div className="user-info">
          <img
            src={user.photo}
            alt="User Photo"
            className="user-photo1"
          />
        </div>
      )}
           <span> <input type="text" className="search-input1"  placeholder={`What's on your mind, ${user && user.name}?`}/></span>
           <hr className="divider2" />
           
          </div>
        </div>
       

      <ul class="list-group2 list-group-horizontal">
        <li class="list-group-item2">
          <button class="btn-item">
            <img src={photo} alt="Sample" width="20" height="20" />
            <span class="w-10 m-4"> Photo/Video</span>
          </button>
        </li>
        <li class="list-group-item2">
          <button class="btn-item">
            <img src={tag} alt="Sample" width="20" height="20" />
            <span class="w-10 m-4"> Tag Friends</span>
          </button>
        </li>
        <li class="list-group-item2">
          <button class="btn-item">
            <img src={feelings} alt="Sample" width="20" height="25" />
            <span class="w-10 m-4"> Feelings/Activity</span>
          </button>
        </li>
      </ul>
      </div>

     
    </div>
  );
}

export default Card;
