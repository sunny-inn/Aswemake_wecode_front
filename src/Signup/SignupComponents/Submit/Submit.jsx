import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Components/Header/Header';
import * as S from './Submit.style';

const Submit = () => {
  const navigate = useNavigate();

  const toLogin = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <S.SubmitBox isOpen={true} ariaHideApp={false}>
      <Header type="submit" />
      <S.MsgBox>
        <S.SubmitMsg>축하드립니다!</S.SubmitMsg>
        <S.SubmitMsg>회원가입이 완료되었습니다.</S.SubmitMsg>
      </S.MsgBox>
      <S.SubmitBtn onClick={toLogin}>로그인 하러가기</S.SubmitBtn>
    </S.SubmitBox>
  );
};

export default Submit;
