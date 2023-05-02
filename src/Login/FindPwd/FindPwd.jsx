import React, { useState } from 'react';
import * as S from './FindPwd.style';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Input/Input';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginLayout from '../Component/LoginLayout';
import styled from 'styled-components';
import SubmitIdButton from '../Component/SubmitIdButton';

const FindPwd = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

  const [input, setInput] = useState({ phoneNumber: '' });

  const saveInput = e => {
    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));
  };

  // const onClickCode = e => {
  //   e.preventDefault();
  //   fetch(,{method:'POST',})
  // };

  // const finalBtn = e => {
  //   e.preventDefault();
  //   fetch('https://flyers.qmarket.me/api/verificationCode/check', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       phoneNumber:  input.phoneNumber,
  //       code: code,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.message === 'verification code matches') {
  //         setVerification(true);
  //         setAlertMsg(false);
  //       } else {
  //         setVerification(false);
  //         setAlertMsg(true);
  //       }
  //     });
  // };

  return (
    <div>
      <LoginLayout>
        <Header type="findpwd" onClickBack={onClickBack} />
        <Input type="id" />
        <Input type="name" />

        <S.InputId>
          <label>휴대전화</label>
        </S.InputId>
        <S.InputBox
          style={{ width: '204px' }}
          placeholder="전화 번호를 입력해 주세요."
          name="phoneNumber"
          value={input.phoneNumber}
          onChange={saveInput}
        />
        <S.ButtonOne
          // onClick={onClickCode}
          disabled={input.phoneNumber.length < 8}
        >
          인증번호 받기
        </S.ButtonOne>
        <S.InputBox
          style={{ width: '204px' }}
          placeholder="인증 번호를 입력해 주세요."
        />
        <S.ButtonTwo>확인</S.ButtonTwo>

        <S.FindPwdSubmit>확인</S.FindPwdSubmit>
        {/* <SubmitIdButton disabled={isDisabled}>확인</SubmitIdButton> */}
      </LoginLayout>
    </div>
  );
};

export default FindPwd;
