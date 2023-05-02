import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Submit.style';

const Submit = ({ setIsSubmitOpen }) => {
  const navigate = useNavigate();

  const toSignup = () => {
    setIsSubmitOpen(prev => !prev);
  };

  const toLogin = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <S.SubmitBox isOpen={true} ariaHideApp={false}>
      <S.TitleBox>
        <img alt="arrow" src="images/signup/arrow.png" onClick={toSignup} />
        <h1>회원가입 완료</h1>
        <div />
      </S.TitleBox>
      <S.MsgBox>
        <S.SubmitMsg>축하드립니다!</S.SubmitMsg>
        <S.SubmitMsg>회원가입이 완료되었습니다.</S.SubmitMsg>
      </S.MsgBox>
      <S.SubmitBtn onClick={toLogin}>로그인 하러가기</S.SubmitBtn>
    </S.SubmitBox>
  );
};

export default Submit;
