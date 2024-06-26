import React, { useState } from 'react';
import './post.css';
import LikeButton from './like.js';
import Share from './share.js';
import CommentButton from './comment'; 


function Post({ id, content, author, date, pic, onDelete, editable = false}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    if (!editable) return;
    setIsEditing(true);
  };

  const handleSave = () => {

    setIsEditing(false);
    setEditedContent(editedContent);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <div className="post">
      <button className="delete-button" onClick={handleDelete} data-testid="delete-button">
        &#10006;
      </button>
      <div className="author-date-container">
        <h3 className="author">{author}</h3>
        <p className="date">{date}</p>
      </div>

      {editable ? (
        isEditing ? (
          <textarea className="edit-content" value={editedContent} onChange={handleContentChange} />
        ) : (
          <p className="content">{editedContent}</p>
        )
      ) : (
        <p className="content">{content}</p>
      )}
      <img src={pic} alt="Post-pic" className="post-pic" />
      <div className="action-buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <LikeButton />
        <CommentButton postId={id} />
        <Share />
      </div>
    </div>
  );
}


export default Post;
