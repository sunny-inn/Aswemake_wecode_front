import React from 'react';
import * as S from './SetPoint.style';
import Header from '../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginLayout from '../Login/Component/LoginLayout';

const SetPoint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountHolderName = location.state?.accountHolderName || '';
  const withdrawalPoints = location.state?.withdrawalPoints || 0;

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div>
      <Header type="withdrawPoint" onClickBack={onClickBack} />
      <LoginLayout>
        <S.Container>
          <S.Name>{accountHolderName}</S.Name>
          <span>&nbsp;님</span>

          <S.Inform>&nbsp;&nbsp;{withdrawalPoints} &nbsp;원</S.Inform>
          <S.Inform>&nbsp;&nbsp;인출 요청이 완료되었습니다!</S.Inform>
        </S.Container>
        <Link to="/">
          <S.FinBtn>확인</S.FinBtn>
        </Link>
      </LoginLayout>
    </div>
  );
};

export default SetPoint;
