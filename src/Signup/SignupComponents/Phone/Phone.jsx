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
  const [codeBtn, setCodeBtn] = useState(false);
  const [timer, setTimer] = useState(180);

  const handleCode = e => setCode(e.target.value);

  const handleCodeBtn = phoneNumber.length === 11;

  const id = useRef(null);

  const reset = () => {
    window.clearInterval(id.current);
  };

  // TODO: 인증번호
  const onClickCode = e => {
    e.preventDefault();
    setCodeBtn(true);

    codeBtn === true &&
      fetch('http://10.58.52.174:8000/api/verificationCode/send', {
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

  //Btn 휴대폰번호 & 인증번호 post
  const onClickVerification = e => {
    e.preventDefault();

    fetch('http://10.58.52.174:8000/api/verificationCode/check', {
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

  // console.log('phone', phoneNumber);
  // console.log('code btn', handleCodeBtn);

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
          value={code}
          onChange={handleCode}
          placeholder="인증번호를 입력해주세요."
          AlertMsg={AlertMsg}
        />
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
