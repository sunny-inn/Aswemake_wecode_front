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
import WithdrawPoint from './WithdrawPoint/WithdrawPoint';
import SetPoint from './WithdrawPoint/SetPoint';
import AccountChange from './WithdrawPoint/AccountChange';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/withdrawpoint" element={<WithdrawPoint />} />
        <Route path="/setpoint" element={<SetPoint />} />
        <Route path="/accountchange" element={<AccountChange />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
