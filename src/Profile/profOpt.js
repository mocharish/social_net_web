import React, { useEffect, useState } from 'react';
import './profOpt.css'
import Post from '../Feed/post.js';


function NavigationBar({ token, email, areFriends, connectedEmail, userData }) {
  const [activeTab, setActiveTab] = useState('home');
  const [showPosts, setShowPosts] = useState(false); 
  const [posts, setPosts] = useState([])


  const showContent = (tab) => {
    setActiveTab(tab);
    if (tab === 'posts') {
      setShowPosts(true); 
      getUserPosts(); 
    } else {
      setShowPosts(false); 
    }
  };



  const sendFriendRequest = async () => {
    try {
      console.log("Sending friend request...");
      const response = await fetch('http://localhost:8080/api/profile/add-friend-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
      });
      if (response.ok) {
        console.log("Friend request sent successfully.");
        window.location.reload();

      } else {
        console.error("Failed to send friend request.");
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };



  const cancelFriendsRequest = async () => {
    try {
      console.log("Canceling friend request...");
      const response = await fetch('http://localhost:8080/api/profile/cancel-friend-request', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
      });
      if (response.ok) {
        console.log("Friend request canceled successfully.");
        window.location.reload();

      } else {
        console.error("Failed to cancel friend request.");
      }
    } catch (error) {
      console.error('Error canceling friend request:', error);
    }
  };




const cancelFriendship = async () => {
  try {
    console.log("Canceling friendship...");
    const response = await fetch('http://localhost:8080/api/profile/cancel-friendship', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
    });
    if (response.ok) {
      console.log("Friendship canceled successfully.");
      window.location.reload(); 
    } else {
      console.error("Failed to cancel friendship.");
    }
  } catch (error) {
    console.error('Error canceling friendship:', error);
  }
};

const acceptFriendRequest = async () => {
  try {
    console.log("Accepting friend request...");
    const response = await fetch('http://localhost:8080/api/profile/accept-friend-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userEmail: email, connectedEmail: connectedEmail }),
    });
    if (response.ok) {
      console.log("Friend request accepted successfully.");
      window.location.reload(); 
    } else {
      console.error("Failed to accept friend request.");
    }
  } catch (error) {
    console.error('Error accepting friend request:', error);
  }
};


const getUserPosts = async () => {
  try {
    console.log("Fetching user posts...");
    const response = await fetch(`http://localhost:8080/api/profile/user-posts/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const postsData = await response.json();
      console.log("User posts:", postsData);
      setPosts(postsData[0]);
    } else {
      console.error("Failed to fetch user posts.");
    }
  } catch (error) {
    console.error('Error fetching user posts:', error);
  }
};

useEffect(() => {
  if (activeTab === 'posts') {
    getUserPosts();
  }
}, [activeTab]);



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
  getUserPosts();
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

    getUserPosts();
  } catch (error) {
    console.error('Error updating post content:', error);
  }
};



  const renderButton = () => {
    switch (areFriends) {
      case 1:
        return <button onClick={cancelFriendship}>Cancel Friendship</button>;
      case 2:
        return <button onClick={cancelFriendsRequest}>Cancel Request</button>;
      case 3:
        return <button onClick={acceptFriendRequest}> Accept Request</button>;
      case 4:
        return;
      default:
        return <button onClick={sendFriendRequest}>Send Friend Request</button>;
    }
  };






  const renderPosts = () => {
    if (showPosts) {
      return (
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
              connectedEmail={email}
              connectedUser={email}
            />
          ))}
        </div>
      );
    }
    return null; 
  };

  return (
    <div style={{ width: '100%', background: '#f0f0f0', padding: '20px' }}>
      <div className="navbar-containerp" style={{ width: '80%', margin: 'auto' }}>
      <div className="navbarp">
        <button onClick={() => showContent('home')}>Home</button>
        <button onClick={() => showContent('about')}>About</button>
        <button onClick={() => showContent('contact')}>Contact</button>
        <button onClick={() => showContent('posts')}>Posts</button>
        {renderButton()}
      </div>
      {renderPosts()}
      <div className="containerp">
        {activeTab === 'home' && <HomeContent />}

        {activeTab === 'about' && <AboutContent userData={userData} />}
        {activeTab === 'contact' && <ContactContent userData={userData} />}

      </div>
    </div>
    </div>
  );
}

function HomeContent() {



  
  return;
}

function AboutContent({userData}) {
  return <div> 
     <h2 className="profile-about">{userData.name}</h2>
  <p>Date of Birth: {userData.dob}</p>
  <p>Gender: {userData.gender}</p>
  <p>friends: {userData.friends}</p>
</div>;

}

function ContactContent({userData}) {
  return <div>
   <h2 className="profile-Contact"></h2>
  <p>friends: {userData.friends}</p>
  </div>;
}


export default NavigationBar;
