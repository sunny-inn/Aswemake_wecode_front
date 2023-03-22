import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Footer from './Components/Footer/Footer';
import Upload from './Upload/Upload';
import Footer from './Components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
