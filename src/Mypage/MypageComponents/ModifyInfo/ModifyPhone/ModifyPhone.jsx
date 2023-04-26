import React, { useState, useRef, useEffect } from 'react';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyPhone.style';

const ModifyPhone = ({ setModalOpen }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState(false);
  const [verification, setVerification] = useState(false);
  const [codeBtn, setCodeBtn] = useState(false);
  const [timer, setTimer] = useState(180);
  const [alertMsg, setAlertMsg] = useState(false);

  const handleCode = e => setCode(e.target.value);

  const handleCodeBtn = phoneNumber.length === 11;

  const id = useRef(null);

  const reset = () => {
    window.clearInterval(id.current);
  };

  const handlePhoneNumber = e => {
    setPhoneNumber(prev => ({ ...prev, modifyPhoneNum: e.target.value }));
  };

  const onClickBack = () => {
    setModalOpen(prev => !prev);
  };

  const toGetCode = e => {
    e.preventDefault();
    setCodeBtn(true);

    fetch('https://flyers.qmarket.me/api/verificationCode/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'message sent successfully') {
          codeBtn && timer === 0
            ? reset()
            : (id.current = setInterval(() => {
                setTimer(time => time - 1);
              }));
        } else {
          alert('실패');
        }
      });
    return () => reset();
  };

  const toVerifyCode = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/verificationCode/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        code: code,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'verification code matches') {
          setVerification(true);
          setAlertMsg(false);
        } else {
          setVerification(false);
          setAlertMsg(true);
        }
      });
  };

  //전화번호 수정 확인 버튼 눌렀을 때 실행되는 함수
  const toModifyPhone = () => {
    fetch('{PORT}/api/users/phoneNumberModify', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        newPhoneNumber: phoneNumber,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'USER_PHONE_NUMBER_MODIFIED') {
          setModalOpen(prev => !prev);
        }
      });
  };

  return (
    <S.ModifyPhone>
      <Header type="modifyPhone" onClickBack={onClickBack} />
      <S.ModifyPhoneBody>
        <S.ModifyPhoneTitle>휴대전화</S.ModifyPhoneTitle>
        <S.PhoneInputWrap>
          <input
            placeholder="전화번호를 입력해주세요."
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <S.GetNumBtn
            onClick={toGetCode}
            disabled={handleCodeBtn ? false : true}
            handleCodeBtn={handleCodeBtn}
          >
            인증번호 받기
          </S.GetNumBtn>
        </S.PhoneInputWrap>
        <S.PhoneInputWrap>
          <input
            placeholder="인증번호를 입력해주세요."
            name="code"
            type="text"
            value={code}
            onChange={handleCode}
          />
          <S.GetNumBtn
            onClick={toVerifyCode}
            disabled={code && phoneNumber ? false : true}
          >
            확인
          </S.GetNumBtn>
        </S.PhoneInputWrap>
        {alertMsg && (
          <S.PhoneCheckText>인증번호를 다시 확인해주세요.</S.PhoneCheckText>
        )}
        {/* <S.PhoneCheckText>번호 인증이 완료되었습니다.</S.PhoneCheckText> */}
      </S.ModifyPhoneBody>
      <S.ConfirmBtn disabled>확인</S.ConfirmBtn>
    </S.ModifyPhone>
  );
};

export default ModifyPhone;
