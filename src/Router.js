import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Upload from './Upload/Upload';
import Mypage from './Mypage/Mypage';
import Favorite from './Favorite/Favorite';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
