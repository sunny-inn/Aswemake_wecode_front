import React, { useState, useEffect } from 'react';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyPhone.style';

const ModifyPhone = ({ setModalOpen, userInfo }) => {
  const [verification, setVerification] = useState(false);
  const [codeBtn, setCodeBtn] = useState(false);
  const [seconds, setSeconds] = useState(180);
  const [showTimer, setShowTimer] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);
  const [modifyPhone, setModifyPhone] = useState({
    phoneNumber: '',
    code: '',
  });

  const onClickBack = () => {
    setModalOpen(prev => !prev);
  };

  const handleCode = e =>
    setModifyPhone(prev => ({ ...prev, code: e.target.value }));

  const handlePhoneNumber = e => {
    setModifyPhone(prev => ({ ...prev, phoneNumber: e.target.value }));
  };

  useEffect(() => {
    let timer;

    if (codeBtn) {
      setShowTimer(true);
      timer = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [codeBtn]);

  const handleCodeBtn =
    modifyPhone.phoneNumber.includes('010') &&
    (modifyPhone.phoneNumber.length === 10 ||
      modifyPhone.phoneNumber.length === 11);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  // 인증번호 버튼 클릭 시
  const toGetCode = e => {
    e.preventDefault();
    setCodeBtn(true);
    setShowTimer(true);
    setSeconds(180);

    fetch('https://flyers.qmarket.me/api/verificationCode/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        phoneNumber: modifyPhone.phoneNumber,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message !== 'message sent successfully') {
          alert('인증번호 전송 실패');
        }
      });
  };

  // 확인 버튼 활성화 조건
  const handleVerificationBtn = modifyPhone.code && modifyPhone.phoneNumber;

  //확인 버튼 클릭 시 로직
  const toVerifyCode = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/verificationCode/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        phoneNumber: modifyPhone.phoneNumber,
        code: modifyPhone.code,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'verification code matches') {
          userInfo.phone_number = modifyPhone.phoneNumber;
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
    fetch('https://flyers.qmarket.me/api/users/phoneNumberModify', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        newPhoneNumber: modifyPhone.phoneNumber,
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
          <S.PhoneInput
            placeholder="전화번호를 입력해주세요."
            name="phoneNumber"
            type="text"
            value={modifyPhone.phoneNumber}
            onChange={handlePhoneNumber}
          />
          <S.GetNumBtn onClick={toGetCode} disabled={!handleCodeBtn}>
            인증번호 받기
          </S.GetNumBtn>
        </S.PhoneInputWrap>
        <S.PhoneInputWrap>
          <S.PhoneInput
            placeholder="인증번호를 입력해주세요."
            name="code"
            type="text"
            value={modifyPhone.code}
            onChange={handleCode}
          />
          {showTimer && <S.Timer>{formatTime(seconds)}</S.Timer>}
          <S.GetNumBtn
            onClick={toVerifyCode}
            disabled={!handleVerificationBtn}
            verification={verification}
            alertMsg={alertMsg}
          >
            확인
          </S.GetNumBtn>
        </S.PhoneInputWrap>
        {alertMsg ? (
          <S.PhoneCheckText color="#E40303">
            인증번호를 다시 확인해주세요.
          </S.PhoneCheckText>
        ) : (
          <S.PhoneCheckText color="#ff6a21">
            번호 인증이 완료되었습니다.
          </S.PhoneCheckText>
        )}
      </S.ModifyPhoneBody>
      <S.ConfirmBtn onClick={toModifyPhone} disabled={!handleVerificationBtn}>
        확인
      </S.ConfirmBtn>
    </S.ModifyPhone>
  );
};

export default ModifyPhone;
