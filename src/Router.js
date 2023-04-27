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
<<<<<<< HEAD
import Suggest from './Suggest/Suggest';
import SuggestCompleted from './Suggest/SuggestCompleted';
import Search from './Home/HomeComponents/Search/Search';
import WithdrawPoint from './WithdrawPoint/WithdrawPoint';
=======
>>>>>>> 1e3d006 (ADD:계좌변경 first commit)
import AccountRegi from './AccountRegi/AccountRegi';
import SetAccount from './AccountRegi/Component/SetAccount';

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
        <Route path="/search" element={<Search />} />
        <Route path="/withdrawpoint" element={<WithdrawPoint />} />
        <Route path="/accountregi" element={<AccountRegi />} />
        <Route path="/setaccount" element={<SetAccount />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
