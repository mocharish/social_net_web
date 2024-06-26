import React from 'react';
import './share.css'; // Assuming you have a CSS file for styling

function Share() {
  return (
    <div className="dropdown">
      <i className="bi bi-share" id="shareDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
      <ul className="dropdown-menu" aria-labelledby="shareDropdown">
        <li><a className="dropdown-item">Share via</a></li>
        <hr className="dropdown-divider" />
         <div className="messenger-icon-container">
         <li> <i className="bi bi-messenger"></i>
        </li>
        <li><i class="bi bi-instagram"></i></li>
        <li><i class="bi bi-whatsapp"></i></li>
        <li><i class="bi bi-envelope"></i></li>
        <li><i class="bi bi-facebook"></i></li>
        </div>
      </ul>
    </div>
  );
}

export default Share;
