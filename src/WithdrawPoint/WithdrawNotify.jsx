import React, { useEffect, useState } from 'react';
import * as S from './WithdrawNotify.style';
import Header from '../Components/Header/Header';
import LoginLayout from '../Login/Component/LoginLayout';
import { useLocation } from 'react-router-dom';

const WithdrawNotify = () => {
  const location = useLocation();
  const remainingFlyers = location.state && location.state.remainingFlyers;

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
      <Header type="withdrawPoint" />
      <LoginLayout>
        <S.TitleWrapper>
          <S.Title> &nbsp; 인출가능까지</S.Title>
          <S.ColorTitle>전단 등록 {remainingFlyers} 회</S.ColorTitle>
          <S.Title>남았어요.</S.Title>
          <S.FinalTitle>내 주변 마트 전단을 등록해 보세요!</S.FinalTitle>
        </S.TitleWrapper>
        <S.EnrollBtn>전단 등록 하러 가기</S.EnrollBtn>
      </LoginLayout>
    </div>
  );
};

export default WithdrawNotify;
