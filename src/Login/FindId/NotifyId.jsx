import React, { useEffect } from 'react';
import * as S from './NotifyId.style';
import Header from '../../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginLayout from '../Component/LoginLayout';

const NotifyId = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.userId || '';
  const userName = location.state?.userName || '';

  if (!userId || !userName) {
  }

  return (
    <>
      <Header type="findid2" />
      <LoginLayout>
        <S.NotifyWrapper>
          <S.Notify>{userName}님의 아이디는</S.Notify>
          <S.Notify>
            <S.Id>{userId} </S.Id>입니다.
          </S.Notify>
          <Link to="/findpwd">
            <S.GoToFindPwd>비밀번호 찾기</S.GoToFindPwd>
          </Link>
          <Link to="/">
            <S.GoToLogin>로그인 하러가기</S.GoToLogin>
          </Link>
        </S.NotifyWrapper>
      </LoginLayout>
    </>
  );
};

export default NotifyId;
