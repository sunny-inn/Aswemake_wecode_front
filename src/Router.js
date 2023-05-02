import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import Home from './Home/Home';
import Login from './Login/Login';
import FindId from './Login/FindId/FindId';
import NotifyId from './Login/FindId/NotifyId';
import CntFindId from './Login/FindId/CntFindId';
import FindPwd from './Login/FindPwd/FindPwd';
import PwdReSetting from './Login/FindPwd/PwdReSetting';
import PwdFinal from './Login/FindPwd/PwdFinal';
import Signup from './Signup/Signup';
import Upload from './Upload/Upload';
import Mypage from './Mypage/Mypage';
import Favorite from './Favorite/Favorite';
import Detail from './Detail/Detail';
import WithdrawPoint from './WithdrawPoint/WithdrawPoint';
import SetPoint from './WithdrawPoint/SetPoint';
import Suggest from './Suggest/Suggest';
import SuggestCompleted from './Suggest/SuggestCompleted';
import Search from './Home/HomeComponents/Search/Search';
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
        <Route path="/findid" element={<FindId />} />
        <Route path="/notifyid" element={<NotifyId />} />
        <Route path="/cntfindid" element={<CntFindId />} />
        <Route path="/findpwd" element={<FindPwd />} />
        <Route path="/pwdresetting" element={<PwdReSetting />} />
        <Route path="/pwdfinal" element={<PwdFinal />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route
          path="/suggest/suggestCompleted"
          element={<SuggestCompleted />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/withdrawpoint" element={<WithdrawPoint />} />
        <Route path="/setpoint" element={<SetPoint />} />
        <Route path="/search" element={<Search />} />
        <Route path="/accountregi" element={<AccountRegi />} />
        <Route path="/setaccount" element={<SetAccount />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
