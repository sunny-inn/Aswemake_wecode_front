import React from 'react';
import * as S from './SetPoint.style';
import Header from '../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginLayout from '../Login/Component/LoginLayout';

const SetPoint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountHolderName = location.state?.accountHolderName || '';
  const withdrawalPoints = location.state?.withdrawalPoints
    ? parseInt(location.state.withdrawalPoints, 10)
    : 0;

  const onClickBack = e => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <div>
      <Header type="withdrawPoint" onClickBack={onClickBack} />
      <LoginLayout>
        <S.Container>
          <S.Name>{accountHolderName}님</S.Name>
          <S.Inform style={{ color: '#FF6A21' }}>
            &nbsp;&nbsp;{withdrawalPoints} &nbsp;원
          </S.Inform>
          <S.Inform>&nbsp;&nbsp;인출 요청이 완료되었습니다!</S.Inform>
          <S.WithdrawNotify>
            인출 요청 후 7일 이내 등록된 계좌로 입금됩니다.
          </S.WithdrawNotify>
        </S.Container>
        <Link to="/home">
          <S.FinBtn>확인</S.FinBtn>
        </Link>
      </LoginLayout>
    </div>
  );
};

export default SetPoint;
