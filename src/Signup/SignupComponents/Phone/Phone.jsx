import React, { useEffect, useRef, useState } from 'react';
import * as S from './Phone.style';

const Phone = ({
  phoneNumber,
  handlePhoneNumber,
  code,
  setCode,
  verification,
  setVerification,
  AlertMsg,
}) => {
  const [codeBtn, setCodeBtn] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const [seconds, setSeconds] = useState(180);

  const handleCode = e => setCode(e.target.value);

  const handleCodeBtn =
    phoneNumber.includes('010') &&
    (phoneNumber.length === 10 || phoneNumber.length === 11);

  useEffect(() => {
    const timer =
      codeBtn &&
      setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    setTimeout(() => {
      clearInterval(timer);
    }, 10000);
  }, [codeBtn]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  const onClickCode = e => {
    e.preventDefault();
    setCodeBtn(true);
    setShowTimer(true);
    setSeconds(180);

    codeBtn === true &&
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
          if (data.message !== 'message sent successfully') {
            alert('인증번호 전송 실패');
          }
        });
  };

  //Btn 휴대폰번호 & 인증번호 post
  const onClickVerification = e => {
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
        } else {
          setVerification(false);
        }
      });
  };

  return (
    <S.PhoneBox>
      <S.PhoneBtnBox>
        <S.PhoneNumberInput
          name="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="번호를 입력해주세요."
        />
        <S.CodeBtn
          onClick={onClickCode}
          disabled={handleCodeBtn ? false : true}
          handleCodeBtn={handleCodeBtn}
        >
          인증번호 받기
        </S.CodeBtn>
      </S.PhoneBtnBox>
      <S.PhoneBtnBox>
        <S.CodeInput
          name="code"
          type="text"
          ㄴ
          value={code}
          onChange={handleCode}
          placeholder="인증번호를 입력해주세요."
          AlertMsg={AlertMsg}
        />
        {showTimer && <S.Timer>{formatTime(seconds)}</S.Timer>}
        <S.VerificationBtn
          onClick={onClickVerification}
          disabled={verification ? false : true}
          verification={verification}
          AlertMsg={AlertMsg}
        >
          확인
        </S.VerificationBtn>
      </S.PhoneBtnBox>
      {AlertMsg && <S.AlertMsg>인증번호를 다시 확인해주세요</S.AlertMsg>}
    </S.PhoneBox>
  );
};

export default Phone;
