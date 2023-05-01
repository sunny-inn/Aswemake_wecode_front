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
    fetch('http://127.0.0.1:8000/api/accounts//checkCurrentAccount', {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgyMjQ3NTUwLCJleHAiOjE2ODIyNDc2NzB9.8HTVkLVVnLIf_VLS7MdRZ2kN1tQb2VgNG3IPAOPQMvM',
      },
    })
      .then(response => response.json())
      .then(data => {
        setAccountData({
          bank: data.bank,
          accountNumber: data.accountNumber,
          accountHolder: data.accountHolder,
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
        <div>현재 등록된 계좌를 먼저 확인해 주세요.</div>
        <S.TitleMyPoint>{accountData.bank}</S.TitleMyPoint>
        <S.Withdraw />
        <S.TitleMyPoint>{accountData.accountNumber}</S.TitleMyPoint>
        <S.Withdraw />
        <S.TitleMyPoint>{accountData.accountHolder}</S.TitleMyPoint>
        <S.Withdraw />

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
