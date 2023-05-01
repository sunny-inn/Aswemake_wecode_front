import React from 'react';
import * as S from './SetAccountRegi.style';
import Header from '../../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SetAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountHolderName = location.state?.accountHolderName || '';
  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div>
      <Header type="accountRegi" onClickBack={onClickBack} />
      <S.Container>
        <S.Name>{accountHolderName}</S.Name>
        <span>&nbsp;님</span>
        <S.Inform>계좌 변경이 완료되었습니다!</S.Inform>
      </S.Container>
      <Link to="/">
        <S.FinBtn>확인</S.FinBtn>
      </Link>
    </div>
  );
};

export default SetAccount;
