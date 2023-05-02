import React from 'react';
import * as S from './SetAccountChange.style';
import Header from '../Components/Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SetAccountChange = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accountHolderName = location.state?.accountHolderName || '';
  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div>
      <Header type="withdraw" onClickBack={onClickBack} />
      <S.Container>
        <S.Name>{accountHolderName}</S.Name>
        <span>&nbsp;님</span>
        <S.Inform>&nbsp;&nbsp;9000원</S.Inform>
        <S.Inform>&nbsp;&nbsp;인출 요청이 완료되었습니다!</S.Inform>
      </S.Container>
      <Link to="/">
        <S.FinBtn>확인</S.FinBtn>
      </Link>
    </div>
  );
};

export default SetAccountChange;
