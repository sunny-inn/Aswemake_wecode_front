import React, { useEffect, useState } from 'react';
import * as S from './WithdrawNotify.style';
import Header from '../Components/Header/Header';
import LoginLayout from '../Login/Component/LoginLayout';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const WithdrawNotify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const remainingFlyers = location.state && location.state.remainingFlyers;
  console.log(remainingFlyers);
  const onClickBack = e => {
    e.preventDefault();
    navigate('/mypage');
  };
  // useEffect(() => {
  //   fetch('https://example.com/api/remaining-flyers', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setRemainingFlyers(data.flyerRegistrationNumber);
  //     });
  // }, []);

  return (
    <div>
      <Header type="withdrawPoint" onClickBack={onClickBack} />
      <LoginLayout>
        <S.TitleWrapper>
          <S.Title> 인출가능까지</S.Title>
          <S.ColorTitle>전단 등록 {remainingFlyers} 회</S.ColorTitle>
          <S.Title>남았어요.</S.Title>
          <S.FinalTitle>내 주변 마트 전단을 등록해 보세요!</S.FinalTitle>
        </S.TitleWrapper>
        <Link to="/upload">
          <S.EnrollBtn>전단 등록 하러 가기</S.EnrollBtn>
        </Link>
      </LoginLayout>
    </div>
  );
};

export default WithdrawNotify;
