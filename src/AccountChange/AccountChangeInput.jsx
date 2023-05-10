import React, { useState } from 'react';
import * as S from './AccountChangeInput.style';
import Header from '../Components/Header/Header';
import Modal from '../AccountRegi/Component/Modal';
import { useNavigate } from 'react-router-dom';

const AccountChangeInput = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/accountchange');
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectBank, setSelectBank] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountVerified, setAccountVerified] = useState(null);
  const [areInputsFilled, setAreInputsFilled] = useState(false);

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
    if (selectBank && accountNumber.trim() !== '') {
      setAreInputsFilled(true);
    } else {
      setAreInputsFilled(false);
    }
  };

  //최종 post
  const submitRegi = () => {
    if (accountVerified) {
      fetch('https://flyers.qmarket.me/api/accounts/change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('token'),
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
          if (data.message === 'changed Main account successfully') {
            navigate('/setaccountchange', {
              state: { accountHolderName: accountName },
            });
          } else if (data.message === 'THIS ACCOUNT IS ALREADY REGISTERED') {
            alert('이 계좌는 이미 등록된 계좌입니다.');
          }
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
      'https://flyers.qmarket.me/api/accounts/checkAccountHolderName?accountHolderName=' +
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
        if (data.message === 'name matches') {
          setAccountVerified(true);
          setAreInputsFilled(true);
        } else if (data.message === 'ONLY YOUR ACCOUNT CAN BE REGISTERED') {
          setAccountVerified(false);
          setAreInputsFilled(false);
        }
      });
  };
  return (
    <>
      <Header type="accountChange" onClickBack={onClickBack} />
      <S.Layout>
        <S.InputTitle>
          <label>은행</label>
        </S.InputTitle>
        <S.InputWrapper>
          <S.Input
            placeholder="은행을 선택해 주세요."
            value={selectBank ? selectBank.name : ''}
            readOnly
          />
          <S.ToggleBtn type="button" onClick={handleToggleClick}>
            <S.Toggle alt="arrow" src="images/arrow.png" />
          </S.ToggleBtn>
        </S.InputWrapper>
        <S.InputTitle>
          <label>계좌번호</label>
        </S.InputTitle>
        <S.Input
          name="accountNumber"
          value={accountNumber}
          onChange={inputChange}
          placeholder="계좌번호를 (-) 없이 입력해주세요."
        />
        <S.InputTitle>
          <label>예금주</label>
        </S.InputTitle>
        <S.CodeInput
          name="accountName"
          value={accountName}
          onChange={inputChange}
          placeholder="예금주명을 입력해주세요."
          style={{
            borderColor:
              accountName !== '' && accountVerified === false
                ? '#E40303'
                : '#dbdbdb',
          }}
        />

        <S.CodeBtn
          style={{
            backgroundColor: accountName.trim() !== '' ? '#FF6A21' : '#dbdbdb',
          }}
          onClick={checkAccountHolderName}
        >
          확인
        </S.CodeBtn>

        {accountName.trim() !== '' && accountVerified === true && (
          <S.AlertVerify>본인인증 계정과 예금주가 일치합니다.</S.AlertVerify>
        )}
        {accountName !== '' && accountVerified === false && (
          <S.AlertNotVerify>
            본인인증 계정과 예금주가 일치하지 않습니다.
          </S.AlertNotVerify>
        )}

        <S.EnrollBtn
          style={{
            backgroundColor:
              areInputsFilled && accountVerified ? '#FF6A21' : '#DBDBDB',
          }}
          onClick={submitRegi}
          disabled={!areInputsFilled || !accountVerified}
        >
          변경하기
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

export default AccountChangeInput;
