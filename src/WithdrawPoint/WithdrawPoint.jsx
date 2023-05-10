import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './WithdrawPoint.style';
import LoginLayout from '../Login/Component/LoginLayout';

const WithdrawPoint = () => {
  const navigate = useNavigate();

  const goToChangeAccount = e => {
    e.preventDefault();
    navigate('/accountchange');
  };

  const onClickBack = e => {
    e.preventDefault();
    navigate('/mypage');
  };

  const [inputValue, setInputValue] = useState('');
  const [overPrice, setOverPrice] = useState(false);
  const [accountInfo, setAccountInfo] = useState(null);
  const [holdingPoint, setHoldingPoint] = useState(10);
  const [overHoldingPoint, setOverHoldingPoint] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [belowThreshold, setBelowThreshold] = useState(false);

  // useEffect(() => {
  //   const fetchAccountInfo = async () => {
  //     // Account info fetch logic
  //   };

  //   const fetchHoldingPoint = async () => {
  //     // Holding point fetch logic
  //   };

  //   fetchAccountInfo();
  //   fetchHoldingPoint();
  // }, []);

  // useEffect(() => {
  //   fetch('https://flyers.qmarket.me/api/accounts/checkCurrentAccount', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setAccountInfo(data); // 계좌 정보를 state에 저장
  //       setInputValue(`${data.result.bankName}, ${data.result.accountNumber}`); // 입력값을 계좌 정보로 초기화
  //     })
  //     .catch(error => {
  //       console.error('Error fetching account info:', error);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('https://flyers.qmarket.me/api/points', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setHoldingPoint(data.result.withdrawalPoints); // 포인트 정보를 state에 저장
  //     })
  //     .catch(error => {
  //       console.error('Error fetching holding point:', error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const response = await fetch(
          'https://flyers.qmarket.me/api/accounts/checkCurrentAccount',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              authorization: localStorage.getItem('token'),
            },
          }
        );
        const data = await response.json();
        console.log('내은행:', data);
        setAccountInfo(data);
        // setInputValue(`${data.result.bankName}, ${data.result.accountNumber}`);
      } catch (error) {
        console.error('Error fetching account info:', error);
      }
    };

    const fetchHoldingPoint = async () => {
      try {
        const response = await fetch('https://flyers.qmarket.me/api/points', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: localStorage.getItem('token'),
          },
        });
        const data = await response.json();
        console.log('points', data);
        setHoldingPoint(data.result.totalPoints);
      } catch (error) {
        console.error('Error fetching holding point:', error);
      }
    };

    fetchAccountInfo();
    fetchHoldingPoint();
  }, []);

  //최종 인출 버튼 눌렀을 때
  const handleWithdrawRequest = e => {
    e.preventDefault();

    if (overPrice || overHoldingPoint) {
      return; // Prevent the request if overPrice or overHoldingPoint are true
    }

    const withdrawalPoints = parseInt(inputValue.replace(/[^0-9]/g, ''), 10);

    fetch('https://flyers.qmarket.me/api/points/withdrawal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ withdrawalPoints: withdrawalPoints }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.result) {
          setHoldingPoint(
            prevHoldingPoint => prevHoldingPoint - withdrawalPoints
          );
          setInputValue('');
          navigate('/setpoint', {
            state: {
              withdrawalPoints: withdrawalPoints,
              accountHolderName: accountInfo.result.accountHolderName,
            },
          });
        }
      })
      .catch(error => {
        console.error('Error submitting withdrawal request:', error);
        alert('인출 요청에 실패했습니다. 다시 시도해주세요.');
      });
  };

  // //포인트 인출 입력 값 input 창 관리
  // const handleInputChange = e => {
  //   // 숫자 외의 문자 제거
  //   const value = e.target.value.replace(/[^0-9]/g, '');
  //   const formattedValue = formatNumber(value);
  //   // setInputValue(value + '원');
  //   setInputValue(formattedValue + '원');
  //   setEmpty(value === '');
  //   setOverPrice(parseInt(value, 10) > 150000);
  //   setOverHoldingPoint(parseInt(value, 10) > holdingPoint);
  // };

  const handleInputChange = e => {
    // 숫자 외의 문자 제거
    const value = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = formatNumber(value);
    setInputValue(formattedValue + '원');
    setEmpty(value === '');
    setOverPrice(parseInt(value, 10) > 150000);
    setOverHoldingPoint(parseInt(value, 10) > holdingPoint);
    setBelowThreshold(parseInt(value, 10) < 1000);
  };

  const showCurrency = () => {
    setInputValue(prevValue => {
      if (prevValue === '') {
        return '';
      }
      const onlyNumbers = prevValue.replace(/[^0-9]/g, '');
      return formatNumber(onlyNumbers) + '원';
    });
  };

  const handleFocus = () => {
    setInputValue(prevValue => prevValue.replace(/[^0-9]/g, ''));
  };

  // 포인트 입력 금액 천자리마다 , 찍기
  const formatNumber = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <Header type="withdrawPoint" onClickBack={onClickBack} />
      <LoginLayout>
        <S.TitleContainer>
          <S.TitleMyPoint>내 은행 계좌</S.TitleMyPoint>
          <S.FromMyPoint>로</S.FromMyPoint>
          <S.ChangeAccount onClick={goToChangeAccount}>
            계좌변경
            <span> {'>'} </span>
          </S.ChangeAccount>
        </S.TitleContainer>
        <S.Withdraw
          value={
            accountInfo
              ? `${accountInfo.result.bankName} ${accountInfo.result.accountNumber}`
              : ''
          }
          onChange={e => {}}
          readOnly
        />

        <S.Wrapper>
          <S.TitleMyPoint>인출할 금액</S.TitleMyPoint>
          <S.FromMyPoint>을 입력해 주세요.</S.FromMyPoint>
          <div>
            <S.PointWrapper>
              <S.MyPoint>보유포인트</S.MyPoint>
              <S.HoldingPoint>{Math.floor(holdingPoint)}</S.HoldingPoint>
              <S.HoldingPoint>원</S.HoldingPoint>
            </S.PointWrapper>
            <S.WithdrawPoint
              value={inputValue}
              onChange={handleInputChange}
              showCurrency={showCurrency}
              onFocus={handleFocus}
              onBlur={showCurrency}
              placeholder="1,000원 이상 인출 가능"
              borderColor={
                overPrice || overHoldingPoint || belowThreshold
                  ? '#E40303'
                  : undefined
              }
            />
            {overPrice && (
              <S.AlertMsg>1회 최대 인출 금액은 150,000원 입니다!</S.AlertMsg>
            )}
            {!overPrice && overHoldingPoint && (
              <S.AlertMsg>보유 포인트 보다 많은 금액을 입력했어요!</S.AlertMsg>
            )}
            {!overPrice && !overHoldingPoint && belowThreshold && (
              <S.AlertMsg>1,000원 이상부터 인출 가능합니다!</S.AlertMsg>
            )}
          </div>
        </S.Wrapper>
        <S.FinBtn
          onClick={handleWithdrawRequest}
          overPrice={overPrice}
          disabled={overPrice || overHoldingPoint || empty}
          overHoldingPoint={overHoldingPoint}
          empty={empty}
        >
          인출 요청
        </S.FinBtn>
      </LoginLayout>
    </>
  );
};

export default WithdrawPoint;
