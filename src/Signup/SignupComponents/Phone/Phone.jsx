import React, { useEffect, useState } from 'react';
import * as S from './Phone.style';

const Phone = ({
  phoneNumber,
  handlePhoneNumber,
  code,
  setCode,
  verification,
  setVerification,
}) => {
  const [codeBtn, setCodeBtn] = useState(false);
  const [verificationBtn, setVerificationBtn] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [invalidCode, setInvalidCode] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);

  const handleCode = e => setCode(e.target.value);

  // 인증번호 받기 활성화 조건
  // let handleCodeBtn =
  //   phoneNumber.includes('010') &&
  //   (phoneNumber.length === 10 || phoneNumber.length === 11);

  useEffect(() => {
    if (
      phoneNumber.includes('010') &&
      (phoneNumber.length === 10 || phoneNumber.length === 11)
    ) {
      setCodeBtn(true);
    }
  }, [phoneNumber]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(c => c - 1);
    }, 1000);
    if (seconds === 0) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [seconds]);

  // 인증번호 버튼 클릭 시 로직
  const onClickCode = e => {
    e.preventDefault();
    setShowTimer(true);
    setSeconds(180);

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

  // 확인 버튼 활성화 조건
  useEffect(() => {
    if (phoneNumber !== '' && code !== '' && verification === false) {
      setVerificationBtn(true);
    } else if (code === '') {
      setInvalidCode(false);
      setVerificationBtn(false);
      setAlertMsg(false);
    }
  }, [code]);

  //확인 버튼 클릭 시 로직
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
          setAlertMsg(false);
          setInvalidCode(false);
          setCodeBtn(false);
          setVerificationBtn(false);
          setSeconds(0);
          setShowTimer(false);
        } else if (seconds === 0) {
          setVerification(false);
          setInvalidCode(true);
          setAlertMsg(false);
        } else {
          setVerification(false);
          setAlertMsg(true);
          setInvalidCode(false);
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
          placeholder="전화번호를 입력해주세요."
        />
        <S.CodeBtn
          onClick={onClickCode}
          disabled={codeBtn ? false : true}
          codeBtn={codeBtn}
        >
          인증번호 받기
        </S.CodeBtn>
      </S.PhoneBtnBox>
      <S.PhoneBtnBox>
        <S.CodeInput
          name="code"
          type="text"
          value={code}
          onChange={handleCode}
          placeholder="인증번호를 입력해주세요."
          alertMsg={alertMsg}
          invalidCode={invalidCode}
        />
        {showTimer && <S.Timer>{formatTime(seconds)}</S.Timer>}
        <S.VerificationBtn
          onClick={onClickVerification}
          disabled={verificationBtn ? false : true}
          verification={verification}
          verificationBtn={verificationBtn}
        >
          확인
        </S.VerificationBtn>
      </S.PhoneBtnBox>
      {verification && (
        <S.VerificationMsg>번호 인증이 완료되었습니다</S.VerificationMsg>
      )}
      {alertMsg && <S.AlertMsg>인증번호를 다시 확인해주세요</S.AlertMsg>}
      {invalidCode && (
        <S.AlertMsg>만료된 인증번호입니다. 다시 시도해주세요.</S.AlertMsg>
      )}
    </S.PhoneBox>
  );
};

export default Phone;
