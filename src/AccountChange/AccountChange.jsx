import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import * as S from './AccountChange.style';
import LoginLayout from '../Login/Component/LoginLayout';

const AccountChange = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/mypage');
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

  const changeAccount = () => {
    if (allInputsFilled) {
      navigate('/accountchangeinput');
    }
  };

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
        console.log(data);
        setAccountData({
          bank: data.result.bankName,
          accountNumber: data.result.accountNumber,
          accountHolder: data.result.accountHolderName,
        });
        checkAllInputsFilled();
      })
      .catch(error => {
        console.error('Error fetching holding point:', error);
      });
  }, []);

  useEffect(() => {
    checkAllInputsFilled();
  }, [accountData]);

  return (
    <>
      <Header type="accountChange" onClickBack={onClickBack} />
      <LoginLayout>
        <S.CheckAccount>현재 등록된 계좌를 먼저 확인해주세요!</S.CheckAccount>
        <S.CheckBar />
        <S.TitleMyPoint>은행</S.TitleMyPoint>
        <S.Withdraw value={accountData.bank} readOnly />
        <S.TitleMyPoint>계좌번호</S.TitleMyPoint>
        <S.Withdraw value={accountData.accountNumber} readOnly />
        <S.TitleMyPoint>예금주</S.TitleMyPoint>
        <S.Withdraw value={accountData.accountHolder} readOnly />
        <S.FinBtn
          onClick={changeAccount}
          style={{ backgroundColor: allInputsFilled ? '#FF6A21' : '#dbdbdb' }}
        >
          다음으로
        </S.FinBtn>
      </LoginLayout>
    </>
  );
};

export default AccountChange;
