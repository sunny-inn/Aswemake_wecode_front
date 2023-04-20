import React, { useEffect } from 'react';
import * as S from './NotifyId.style';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

const NotifyId = () => {
  useEffect(() => {
    fetch(`http://`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Header type="findid" />
      <S.NotifyWrapper>
        <S.Notify>김유정님의 아이디는</S.Notify>
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
