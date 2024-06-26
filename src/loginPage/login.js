// import React, { useState } from 'react';

// function Login({ users, onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const user = users.find(user => user.email === email);

//     if (!user) {
//       setError('User does not exist');
//       return;
//     }

//     if (user.password !== password) {
//       setError('Incorrect password');
//       return;
//     }

//     // If user exists and password matches, trigger the onLogin callback
//     onLogin(user);
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="mb-3">
//           <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         {error && <div className="text-danger">{error}</div>}
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
