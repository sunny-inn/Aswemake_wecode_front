import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './WithdrawPoint.style';

const WithdrawPoint = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };
  const [inputValue, setInputValue] = useState('');
  const [overPrice, setOverPrice] = useState(false);

  const handleInputChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    // 숫자 외의 문자 제거
    setInputValue(value);
    setOverPrice(parseInt(value, 10) > 150000);
  };

  const handleBlur = () => {
    setInputValue(prevValue => {
      if (prevValue === '') {
        return '';
      }
      return `${prevValue}원`;
    });
  };

  const handleFocus = () => {
    setInputValue(prevValue => prevValue.replace(/[^0-9]/g, ''));
  };

  return (
    <>
      <Header type="withdraw" onClickBack={onClickBack} />
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
            <S.WithdrawPoint
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="0원"
            />
            {overPrice && (
              <S.AlertMsg>1회 최대 인출 금액은 150,000원 입니다!</S.AlertMsg>
            )}
            <S.AlertMsg>보유 포인트 보다 많은 금액을 입력했어요!</S.AlertMsg>
          </div>
        </S.Wrapper>
        <S.FinBtn>인출 요청</S.FinBtn>
      </div>
    </>
  );
};

export default WithdrawPoint;
