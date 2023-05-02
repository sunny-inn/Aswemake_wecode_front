import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './WithdrawPoint.style';
import LoginLayout from '../Login/Component/LoginLayout';

const WithdrawPoint = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

  const requestWithdraw = () => {
    if (!overPrice && !overHoldingPoint) {
      navigate('/setpoint');
    }
  };

  const handleWithdrawRequest = () => {
    requestWithdraw();
  };

  const [inputValue, setInputValue] = useState('');
  const [overPrice, setOverPrice] = useState(false);
  const [accountInfo, setAccountInfo] = useState(null);
  const [holdingPoint, setHoldingPoint] = useState(10);
  const [overHoldingPoint, setOverHoldingPoint] = useState(false);

  useEffect(() => {
    fetch('/api/account')
      .then(response => response.json())
      .then(data => {
        setAccountInfo(data); // 계좌 정보를 state에 저장
        setInputValue(`${data.accountBank}, ${data.accountNumber}`); // 입력값을 계좌 정보로 초기화
      })
      .catch(error => {
        console.error('Error fetching account info:', error);
      });
  }, []);

  useEffect(() => {
    fetch('/api/points', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgyMTU3MDY2LCJleHAiOjE2ODIxNTcxODZ9.pBMBta2yD-pn2Bodq4vbj6qMCXhrh4L_UnlpVzW6Gr0',
      },
    })
      .then(response => response.json())
      .then(data => {
        setHoldingPoint(data.point); // 포인트 정보를 state에 저장
      })
      .catch(error => {
        console.error('Error fetching holding point:', error);
      });
  }, []);

  const handleInputChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    // 숫자 외의 문자 제거
    setInputValue(value);
    setOverPrice(parseInt(value, 10) > 150000);
    setOverHoldingPoint(parseInt(value, 10) > holdingPoint);
  };

  const showCurrency = () => {
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
      <Header type="withdrawPoint" onClickBack={onClickBack} />
      <LoginLayout>
        <S.TitleMyPoint>내 은행 계좌</S.TitleMyPoint>
        <S.FromMyPoint>로</S.FromMyPoint>
        <S.Withdraw
          value={
            accountInfo
              ? `${accountInfo.accountBank}, ${accountInfo.accountNumber}`
              : ''
          }
        />
        <S.Wrapper>
          <S.TitleMyPoint>인출할 금액</S.TitleMyPoint>
          <S.FromMyPoint>을 입력해 주세요.</S.FromMyPoint>
          <div>
            <S.PointWrapper>
              <S.MyPoint>보유포인트</S.MyPoint>
              <S.HoldingPoint>{holdingPoint}</S.HoldingPoint>
              <S.HoldingPoint>원</S.HoldingPoint>
            </S.PointWrapper>
            <S.WithdrawPoint
              value={inputValue}
              onChange={handleInputChange}
              showCurrency={showCurrency}
              onFocus={handleFocus}
              placeholder="0원"
            />
            {overPrice && (
              <S.AlertMsg>1회 최대 인출 금액은 150,000원 입니다!</S.AlertMsg>
            )}
            {overHoldingPoint && (
              <S.AlertMsg>보유 포인트 보다 많은 금액을 입력했어요!</S.AlertMsg>
            )}
          </div>
        </S.Wrapper>
        <S.FinBtn
          onClick={handleWithdrawRequest}
          overPrice={overPrice}
          overHoldingPoint={overHoldingPoint}
        >
          인출 요청
        </S.FinBtn>
      </LoginLayout>
    </>
  );
};

export default WithdrawPoint;
