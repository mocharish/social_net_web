import React, { useState } from 'react';
import Post from './post.js';
import './postList.css';

import UserInput from './userInput.js';

function PostList({isDarkMode}) {
    const [posts, setPosts] = useState([
        // {
        //     id: 1,
        //     pic: sun,
        //     content: 'Here comes the sun!',
        //     author: <UserInput/>,
        //     date: new Date().toLocaleString()
        // },
        // {
        //     id: 2,
        //     pic: beach2,
        //     content: 'I got beaches',
        //     author: <UserInput/>,
        //     date: new Date().toLocaleString()
        // },
        // Add more predefined posts as needed
    ]);

    const addPost = (content, author, pic = null) => {
        const newPost = {
            id: posts.length + 1,
            pic: pic || '',
            content,
            author,
            date: new Date().toLocaleString(),
            editable: true,
            
        };
        setPosts([...posts, newPost]);
    };

    // Function to delete a post
    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleEditPost = (id, editedContent) => {
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            return { ...post, content: editedContent };
          }
          return post;
        });
        setPosts(updatedPosts);
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        const content = e.target.elements.content.value;
        const picInput = e.target.elements.pic;
        if (!picInput.files || !picInput.files[0]) {

            addPost(content, <UserInput />);
            e.target.reset();
            return;
        }
    
        const reader = new FileReader();
        reader.onload = (event) => {
            const picUrl = event.target.result;
            addPost(content, <UserInput />, picUrl);
            e.target.reset();
        };
        reader.readAsDataURL(picInput.files[0]); // Read the selected file as a data URL
    };
    


return (
  <div className="feed">
      <form onSubmit={handleSubmit}>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add Post
          </button>
          <div className="modal fade AddPostModel" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-centered">
                  <div className="modal-content post">
                      <div className="modal-body post">
                          <input type="text" name="content" placeholder="Enter post content" />
                          <input type="file" name="pic" placeholder="Choose an image" accept="image/*" />
                          <div className="button-group">
                              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                                  Done
                              </button>
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                  Close
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </form>

      <div className="post-container">
          {posts.map((post) => (
              <Post
                  key={post.id}
                  id={post.id}
                  content={post.content}
                  author={post.author}
                  date={post.date}
                  pic={post.pic}
                  onDelete={deletePost}
                  onEdit={handleEditPost}
                  editable={post.editable} // Pass the edit function to the Post component
              />
          ))}
      </div>
  </div>
);
}

export default PostList;