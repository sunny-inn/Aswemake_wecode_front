import React, { useState } from 'react';
import * as S from './AccountRegi.style';
import Header from '../Components/Header/Header';
import Modal from './Component/Modal';
import { useNavigate } from 'react-router-dom';

const AccountRegi = () => {
  const navigate = useNavigate();

  const [correct, setCorrrect] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectBank, setSelectBank] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountVerified, setAccountVerified] = useState(null);
  const [areInputsFilled, setAreInputsFilled] = useState(false);
  const [areInputsVerified, setAreInputsVerified] = useState(false);

  const handleToggleClick = () => {
    setModalOpen(!modalOpen);
  };

  const handleSelectBank = bank => {
    setSelectBank(bank);
    setModalOpen(false);
  };

  const inputChange = e => {
    const { name, value } = e.target;
    if (name === 'accountNumber') {
      setAccountNumber(value);
    } else if (name === 'accountName') {
      setAccountName(value);
    }
    validateInputs();
  };

  const validateInputs = () => {
    if (
      selectBank &&
      accountNumber.trim() !== '' &&
      accountName.trim() !== ''
    ) {
      setAreInputsFilled(true);
    } else {
      setAreInputsFilled(false);
    }
  };

  //최종 등록 버튼
  const submitRegi = () => {
    if (accountVerified) {
      fetch('http://flyers.qmarket.me/api/accounts/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          accountHolderName: accountName,
          accountBank: selectBank ? selectBank.id : null,
          accountNumber: accountNumber,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          navigate('/setaccount', {
            state: { accountHolderName: accountName },
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      alert(
        '본인 인증 계정과 예금주가 일치하지 않습니다. 확인 버튼을 눌러주세요.'
      );
    }
  };

  //예금주명 확인
  const checkAccountHolderName = () => {
    fetch(
      'http://flyers.qmarket.me/api/accounts/checkAccountHolderName?accountHolderName=' +
        encodeURIComponent(accountName),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('token'),
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAccountVerified(data.message === accountName);
        setAreInputsVerified(data.message === accountName);
      });
  };
  return (
    <>
      <Header type="accountRegi" />
      <S.Layout>
        <S.InputTitle>
          <label>은행</label>
        </S.InputTitle>
        <S.InputWrapper>
          {selectBank && <img src={selectBank.img} alt={selectBank.name} />}
          <S.Input
            placeholder="은행을 선택해 주세요."
            value={selectBank ? selectBank.name : ''}
            readOnly
          />
        </S.InputWrapper>
        <S.ToggleBtn type="button" onClick={handleToggleClick}>
          <S.Toggle alt="arrow" src="/images/arrow.png" />
        </S.ToggleBtn>
        <S.InputTitle>
          <label>계좌번호</label>
        </S.InputTitle>
        <S.Input
          name="accountNumber"
          value={accountNumber}
          onChange={inputChange}
          placeholder="계좌번호를 입력해 주세요."
        />
        <S.InputTitle>
          <label>예금주</label>
        </S.InputTitle>
        <S.CodeInput
          name="accountName"
          value={accountName}
          onChange={inputChange}
          placeholder="예금주명을 입력해 주세요."
        />
        <S.CodeBtn
          style={{
            backgroundColor: areInputsFilled ? '#FF6A21' : '#dbdbdb',
          }}
          onClick={checkAccountHolderName}
        >
          확인
        </S.CodeBtn>
        {accountVerified === true && (
          <S.AlertVerify>본인 인증 계정과 예금주가 일치합니다.</S.AlertVerify>
        )}
        {accountVerified === false && (
          <S.AlertNotVerify>
            본인 인증 계정과 예금주가 일치하지 않습니다.
          </S.AlertNotVerify>
        )}

        <S.EnrollBtn
          style={{ backgroundColor: areInputsFilled ? '#FF6A21' : '#DBDBDB' }}
          onClick={submitRegi}
        >
          등록
        </S.EnrollBtn>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSelectBank={handleSelectBank}
          />
        )}
      </S.Layout>
    </>
  );
};

export default AccountRegi;
