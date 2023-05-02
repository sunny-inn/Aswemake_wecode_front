import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './AccountChange.style';

const AccountChange = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

  const [accountData, setAccountData] = useState({
    bank: '',
    accountNumber: '',
    accountHolder: '',
  });

  const checkAllInputsFilled = () => {
    if (
      accountData.bank &&
      accountData.accountNumber &&
      accountData.accountHolder
    ) {
      setAllInputsFilled(true);
    } else {
      setAllInputsFilled(false);
    }
  };

  const [allInputsFilled, setAllInputsFilled] = useState(false);

  useEffect(() => {
    fetch('https://flyers.qmarket.me/api/accounts/checkCurrentAccount', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setAccountData({
          bank: data.result.bankName,
          accountNumber: data.result.accountName,
          accountHolder: data.result.accountHolderName,
        });
        checkAllInputsFilled();
      })
      .catch(error => {
        console.error('Error fetching holding point:', error);
      });
  }, []);

  return (
    <>
      <Header type="accountChange" onClickBack={onClickBack} />
      <div style={{ marginLeft: '16px', marginTop: '22px' }}>
        {/* <div>현재 등록된 계좌를 먼저 확인해 주세요.</div> */}
        <S.TitleMyPoint>은행</S.TitleMyPoint>
        <S.Withdraw value={accountData.bank} />
        <S.TitleMyPoint>계좌번호</S.TitleMyPoint>
        <S.Withdraw value={accountData.accountNumber} />
        <S.TitleMyPoint>예금주</S.TitleMyPoint>
        <S.Withdraw value={accountData.accountHolder} />

        <S.FinBtn
          style={{ backgroundColor: allInputsFilled ? '#FF6A21' : '#dbdbdb' }}
        >
          다음으로
        </S.FinBtn>
      </div>
    </>
  );
};

export default AccountChange;
