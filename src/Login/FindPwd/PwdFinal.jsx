import React from 'react';
import * as S from './PwdFinal.style';
import Header from '../../Components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import SubmitIdButton from '../Component/SubmitIdButton';

const PwdFinal = () => {
  return (
    <div>
      <Header type="pwdresetting2" />
      <S.ContentBox>
        <S.Content>
          비밀번호 재설정이 완료되었습니다. <br />
          &ensp;신규 비밀번호로 로그인해주세요.
        </S.Content>
        <Link to="/">
          <SubmitIdButton>로그인하러 가기</SubmitIdButton>
        </Link>
      </S.ContentBox>
    </div>
  );
};

export default PwdFinal;
