import React from 'react';
import * as S from './CntFindId.style';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import LoginLayout from '../Component/LoginLayout';

const CntFindId = () => {
  return (
    <S.CntFindId>
      <Header type="findid2" />
      <LoginLayout>
        <S.NotFoundId>
          입력하신 정보와 일치하는 <br />
          &emsp; 아이디가 없습니다. <br />
          &emsp; &nbsp;다시 확인해주세요.
        </S.NotFoundId>
        <Link to="/signup">
          <S.GoToSignUp>회원가입하러 가기</S.GoToSignUp>
        </Link>
      </LoginLayout>
    </S.CntFindId>
  );
};

export default CntFindId;
