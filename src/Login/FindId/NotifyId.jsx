import React, { useEffect } from 'react';
import * as S from './NotifyId.style';
import Header from '../../Components/Header/Header';
import { Link, useLocation } from 'react-router-dom';

const NotifyId = () => {
  const location = useLocation();
  const userId = location.state?.userId || '';
  const userName = location.state?.userName || '';

  if (!userId || !userName) {
  }

  return (
    <>
      <Header type="findid" />
      <S.NotifyWrapper>
        <S.Notify>
          {userId}님의 아이디는{userName}입니다.
        </S.Notify>
        <Link to="/">
          <S.GoToFindPwd>비밀번호 찾기</S.GoToFindPwd>
        </Link>
        <Link to="/">
          <S.GoToLogin>로그인 하러가기</S.GoToLogin>
        </Link>
      </S.NotifyWrapper>
    </>
  );
};

export default NotifyId;
