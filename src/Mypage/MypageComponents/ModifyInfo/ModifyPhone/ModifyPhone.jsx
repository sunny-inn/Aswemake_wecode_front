import React, { useState, useRef, useEffect } from 'react';
import Header from '../../../../Components/Header/Header';
import Phone from '../../../../Signup/SignupComponents/Phone/Phone';
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

  const onClickCode = e => {
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

  const onClickVerification = e => {
    e.preventDefault();

    //https://flyers.qmarket.me/api/verificationCode/check
    //http://172.30.1.41:8000/api/verificationCode/check

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

  return (
    <S.ModifyPhone>
      <Header type="modifyPhone" onClickBack={onClickBack} />
      <S.ModifyPhoneBody>
        <S.ModifyPhoneTitle>휴대전화</S.ModifyPhoneTitle>
        {/* <Phone
          phoneNumber={phoneNumber}
          handlePhoneNumber={handlePhoneNumber}
          code={code}
          setCode={setCode}
          verification={verification}
          setVerification={setVerification}
        /> */}
        <S.PhoneInputWrap>
          <input
            placeholder="전화번호를 입력해주세요."
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <S.GetNumBtn
            onClick={onClickCode}
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
            alertMsg={alertMsg}
          />
          <S.GetNumBtn
            onClick={onClickVerification}
            disabled={code && phoneNumber ? false : true}
            code={code}
            phoneNumber={phoneNumber}
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
