

import React, { useState, useEffect } from 'react';
import Post from './post.js';
import './postList.css';

function PostList({ user, token }) {
  const [posts, setPosts] = useState([]);
 // const [userFriends, setUserFriends] = useState([]);

console.log('tokenPostList:', token);
  useEffect(() => {

  
   fetchPosts();

  }, [user, token]);

    const fetchPosts = async () => {

      try {
        
        const response = await fetch(`http://localhost:8080/api/posts/${user.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
    
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
    
        const data = await response.json();
        setPosts(data); 

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };


  // const getPosts = async (user) => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/posts,${user}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch posts');
  //     }
  
  //     const data = await response.json();
  //     setPosts(data); 
  //     console.log('Postsss:', user);
  //   } catch (error) {
  //     console.error('Error fetching posts:', error);
  //   }

  // };



  


  const deletePost = async (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this post?');
    if (!confirmation) {
      return;
    }
    console.log('Deleting post:', id);
    try {
      const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        
        throw new Error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
    fetchPosts();
  };

  const handleEditPost = async (id) => {
    console.log('Editing post:', id);
    console.log('token:', token);
  
    try {
      console.log('handleeeeeeeeeee:', id);
      const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        
        throw new Error('Failed to fetch post content');
      }
      
      const postData = await response.json();
   
      const currentContent = postData.content;

      
      // if (postData.author !== user.name) {
      //   console.log('postData.author:', postData.author);
      //   console.log('user.name:', user.name);
      //   throw new Error('You can\'t edit a post that isn\'t yours...');
      // }
      const newContent = window.prompt('Edit post:', currentContent);
      if (!newContent) {
        return;
      }

      await updatePostContent(id, newContent);
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  
  const updatePostContent = async (id, newContent) => {
    console.log("updatePostContent", id, newContent)
    try {
      console.log('Updating post:', id);
      const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: newContent }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update post content');
      }
  
      fetchPosts();
    } catch (error) {
      console.error('Error updating post content:', error);
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value;
    const picInput = e.target.elements.pic;
    
    let photoUrl = '';
    if (picInput.files && picInput.files[0]) {

      const reader = new FileReader();
      reader.onload = (e) => {
        photoUrl = e.target.result;
        createPost({ content, author: user.name, photo: photoUrl });
      };
      reader.readAsDataURL(picInput.files[0]);
    } else {
      createPost({ content, author: user.name });
    }
  };
  
  const createPost = async (postData) => {
    try {
      
      const response = await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add post');
      }
      await response.json();
      fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
    }
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
            key={post._id}
           id={post._id}
            content={post.content}
            author={post.author}
            date={post.date}
            pic={post.pic}
            onDelete={deletePost}
            onEdit={handleEditPost}
            token={token}
            email={post.email}
            connectedEmail={user.email}
            connectedUser={user}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
