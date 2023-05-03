import React, { useEffect, useState } from 'react';
import * as S from './WithdrawNotify.style';
import Header from '../Components/Header/Header';
import LoginLayout from '../Login/Component/LoginLayout';

const WithdrawNotify = () => {
  const [remainingFlyers, setRemainingFlyers] = useState(null);

  useEffect(() => {
    fetch('https://example.com/api/remaining-flyers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRemainingFlyers(data.flyerRegistrationNumber);
      });
  }, []);

  return (
    <div>
      <Header type="withdrawPoint" />
      <LoginLayout>
        <div>
          <div>인출가능까지</div>
          <div>전단 등록</div> <span>{remainingFlyers}</span>
          <span>회가</span>
          <div>남았어요.</div>
        </div>
        <button>전단 등록 하러 가기</button>
      </LoginLayout>
    </div>
  );
};

export default WithdrawNotify;
