import React, { useState } from 'react';
import './comment.css'; // Assuming you have a CSS file for comment button styling
import { useLocation } from 'react-router-dom';

function CommentButton({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const location = useLocation();
    const user = location.state && location.state.user;

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== '') {
            setComments([...comments, { postId: postId, text: newComment }]);
            setNewComment('');
        }
    };

    const handleDeleteComment = (index) => {
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };

    return (
        <div className="comment-button">
            <i className="bi bi-chat-dots" data-bs-toggle="modal" data-bs-target={`#commentModal-${postId}`}></i>

            <div className="modal fade" id={`commentModal-${postId}`} tabIndex="-1" aria-labelledby={`commentModalLabel-${postId}`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`commentModalLabel-${postId}`}>Comments</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input className="form-control" id={`commentInput-${postId}`} placeholder='Add comment' value={newComment} onChange={handleCommentChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Add Comment</button>
                            </form>
                            <hr /> {/* Divider between input and comments */}
                            <div className="comment-list">
                                {comments.map((comment, index) => (
                                    <div key={index} className="comment-container">
                                        {user && (
                                            <div className="user-info" style={{ fontWeight: 'bold' }}>{user.name}</div>
                                        )}
                                        <div className="comment" style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '5px', position: 'relative' }}>
                                            {comment.text}
                                            <div className="delete-comment" onClick={() => handleDeleteComment(index)}>
                                                <i className="bi bi-x" style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}data-testid={`delete-comment-button-${index}`}></i>
                                            </div>
                                        </div>
                                        {index !== comments.length - 1 && <hr className="comment-divider" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentButton;
