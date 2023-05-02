import React from 'react';
import * as S from './PwdFinal.style';
import Header from '../../Components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import SubmitIdButton from '../Component/SubmitIdButton';
import LoginLayout from '../Component/LoginLayout';

const PwdFinal = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    navigate('/');
  };

  return (
    <LoginLayout>
      <Header type="pwdresetting" onClickBack={onClickBack} />
      <S.ContentBox>
        <S.Content>
          비밀번호 재설정이 완료되었습니다. <br />
          &ensp;신규 비밀번호로 로그인해주세요.
        </S.Content>
        <Link to="/">
          <SubmitIdButton>로그인하러 가기</SubmitIdButton>
        </Link>
      </S.ContentBox>
    </LoginLayout>
  );
};

export default PwdFinal;
