import React from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './WithdrawPoint.style';

const WithdrawPoint = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <Header type="withdraw" />
      <div style={{ marginLeft: '16px', marginTop: '22px' }}>
        <S.TitleMyPoint>내 은행 계좌</S.TitleMyPoint>
        <S.FromMyPoint>로</S.FromMyPoint>
        <S.Withdraw placeholder="0원" />
        <S.Wrapper>
          <S.TitleMyPoint>인출할 금액</S.TitleMyPoint>
          <S.FromMyPoint>을 입력해 주세요.</S.FromMyPoint>
          <div>
            <S.PointWrapper>
              <S.MyPoint>보유포인트</S.MyPoint>
              <S.HoldingPoint>12,000</S.HoldingPoint>
              <S.HoldingPoint>원</S.HoldingPoint>
            </S.PointWrapper>
            <S.WithdrawPoint placeholder="0원" />
          </div>
        </S.Wrapper>
        <S.FinBtn>인출 요청</S.FinBtn>
      </div>
    </>
  );
};

export default WithdrawPoint;
