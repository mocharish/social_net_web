


import './App.css';
import Feed from './Feed/feed.js';
import Profil from './Profile/profile.js';
import  LoginPage from'./loginPage/loginPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
        <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path ="feed" element={<Feed />}></Route>
          <Route path="profile/:email" element={<Profil />}></Route>
          
      
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
