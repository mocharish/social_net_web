
import './icons.css';


import React from 'react';

function Icons({isDarkMode}) {
    return (
        <nav className="navbar navbar-expand-lg top-options" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
          <div className="container-fluid top-story">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" style={{ marginLeft: '-15px', marginRight: '-15px' }}>
                <li className="nav-item">
                <i  class="bi bi-house-door-fill"></i>
                </li>
                <li className="nav-item">
                <i  class="bi bi-play-fill"></i>

  
                </li>
                <li className="nav-item">
                <i  class="bi bi-people-fill"></i>
                </li>
                <li className="nav-item">
                <i  class="bi bi-shop"></i>                 
                </li>
                <li className="nav-item">
                <i  class="bi bi-bell-fill"></i>                
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      );
      
}
export default Icons;