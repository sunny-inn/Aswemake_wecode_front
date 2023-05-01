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
      })
      .catch(error => {
        console.error('Error fetching holding point:', error);
      });
  }, []);

  return (
    <>
      <Header type="accountChange" onClickBack={onClickBack} />
      <div style={{ marginLeft: '16px', marginTop: '22px' }}>
        <S.TitleMyPoint>{accountData.bank}</S.TitleMyPoint>
        <S.Withdraw />
        <S.TitleMyPoint>{accountData.accountNumber}</S.TitleMyPoint>
        <S.Withdraw />
        <S.TitleMyPoint>{accountData.accountHolder}</S.TitleMyPoint>
        <S.Withdraw />

        <S.FinBtn>다음으로</S.FinBtn>
      </div>
    </>
  );
};

export default AccountChange;
