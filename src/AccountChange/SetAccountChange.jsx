import React from 'react';
import * as S from './SetAccountChange.style';
import Header from '../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginLayout from '../Login/Component/LoginLayout';

const SetAccountChange = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountHolderName = location.state?.accountHolderName || '';
  const onClickBack = e => {
    e.preventDefault();
    navigate('/accountchangeinput');
  };
  return (
    <div>
      <Header type="accountChange" onClickBack={onClickBack} />
      <LoginLayout>
        <S.Container>
          <S.Name>{accountHolderName}</S.Name>
          <S.Inform>&nbsp;&nbsp;계좌 변경이 완료되었습니다!</S.Inform>
        </S.Container>
        <Link to="/">
          <S.FinBtn>확인</S.FinBtn>
        </Link>
      </LoginLayout>
    </div>
  );
};

export default SetAccountChange;
