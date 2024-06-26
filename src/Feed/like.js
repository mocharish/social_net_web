import React, { useState } from 'react';
import like from '../images/like.jpg';

function LikeButton({ initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prevLikes) => prevLikes + 1);
      setIsLiked(true);
    }
    else{
      setLikes((prevLikes) => prevLikes - 1);
      setIsLiked(false);
    }
  };

  return (
    <div>
      <i class="bi bi-hand-thumbs-up"
       alt="Like"
       width="20"
       height="20"
        style={{ cursor: 'pointer', opacity: isLiked ? '0.5' : '1' }} // Add cursor pointer and change opacity when liked
        onClick={handleLike}></i>
      <span>{likes}</span>
    </div>
  );
}

export default LikeButton;
