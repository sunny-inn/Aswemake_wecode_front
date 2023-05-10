import React from 'react';
import * as S from './SetAccountChange.style';
import Header from '../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginLayout from '../Login/Component/LoginLayout';

const SetAccountChange = () => {
  const location = useLocation();
  const accountHolderName = location.state?.accountHolderName || '';

  return (
    <div>
      <Header type="accountChange2" />
      <LoginLayout>
        <S.Container>
          <S.Name>{accountHolderName} 님</S.Name>
          <S.Inform>&nbsp;&nbsp;계좌 변경이 완료되었습니다!</S.Inform>
        </S.Container>
        <Link to="/home">
          <S.FinBtn>확인</S.FinBtn>
        </Link>
      </LoginLayout>
    </div>
  );
};

export default SetAccountChange;
