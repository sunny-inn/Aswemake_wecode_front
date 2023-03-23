import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Submit.style';

const Submit = () => {
  const navigate = useNavigate();
  const toLogin = e => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <S.SubmitBox isOpen={true} ariaHideApp={false}>
      <p>회원가입 성공</p>
      <button onClick={toLogin}>로그인 하러가기</button>
    </S.SubmitBox>
  );
};

export default Submit;
