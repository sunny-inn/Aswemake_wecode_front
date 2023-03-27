import React from 'react';
import * as S from './Completed.style';

const Completed = () => {
  return (
    <S.CompletedBox>
      <S.TitleBox>
        <img alt="arrow" src="images/signup/arrow.png" />
        <h1>회원가입</h1>
        <div />
      </S.TitleBox>
      <p>축하드립니다! \n 회원가입이 완료되었습니다.</p>
    </S.CompletedBox>
  );
};
