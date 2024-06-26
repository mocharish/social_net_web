// import React from 'react';

// function FriendRequest({ request, onAccept, onReject }) {
//     const handleAccept = async () => {
//         try {
//             const response = await fetch('/api/friends/accept', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ requestId: request.id })
//             });

//             if (response.ok) {
//                 onAccept(request.id); // Update UI state after successful acceptance
//             } else {
//                 console.error('Error accepting friend request:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error accepting friend request:', error);
//         }
//     };

//     const handleReject = async () => {
//         try {
//             const response = await fetch('/api/friends/reject', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ requestId: request.id })
//             });

//             if (response.ok) {
//                 onReject(request.id); 
//             } else {
//                 console.error('Error rejecting friend request:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error rejecting friend request:', error);
//         }
//     };

//     return (
//         <div>
//             <p>{request.senderUsername} wants to be your friend</p>
//             <button onClick={handleAccept}>Accept</button>
//             <button onClick={handleReject}>Reject</button>
//         </div>
//     );
// }

// export default FriendRequest;
