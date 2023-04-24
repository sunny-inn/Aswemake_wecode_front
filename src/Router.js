import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Upload from './Upload/Upload';
import Mypage from './Mypage/Mypage';
import Favorite from './Favorite/Favorite';
import Detail from './Detail/Detail';
import Suggest from './Suggest/Suggest';
import SuggestCompleted from './Suggest/SuggestCompleted';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Login />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route
          path="/suggest/suggestCompleted"
          element={<SuggestCompleted />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
