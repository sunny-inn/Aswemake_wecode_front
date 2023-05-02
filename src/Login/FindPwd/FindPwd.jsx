import React, { useState, useEffect } from 'react';
import * as S from './FindPwd.style';
import Header from '../../Components/Header/Header';
import Input from '../Component/Input';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginLayout from '../Component/LoginLayout';
import SubmitIdButton from '../Component/SubmitIdButton';

const FindPwd = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

  const [input, setInput] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    code: '',
  });
  const saveInput = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [codeBtn, setCodeBtn] = useState(false);

  const [showTimer, setShowTimer] = useState(false);
  const [seconds, setSeconds] = useState(180);
  const [alertMsg, setAlerMsg] = useState(null);

  // 인증번호 색깔 변하게..
  const codeBtnChange = input.phoneNumber === '' || input.code === '';

  const handleCode = e =>
    setInput(prevInput => ({ ...prevInput, code: e.target.value }));

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

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  const handleCodeBtn =
    input.phoneNumber.includes('010') &&
    (input.phoneNumber.length === 10 || input.phoneNumber.length === 11);

  const onClickCode = e => {
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
        phoneNumber: input.phoneNumber,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message !== 'message sent successfully') {
          alert('인증번호 전송 실패');
        }
      });
  };

  const onCodeBtn = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/verificationCode/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        phoneNumber: input.phoneNumber,
        code: input.code,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'verification code matches') {
          alert('인증번호 확인 완료');
          setAlerMsg(true);
        } else {
          alert('인증번호 확인 실패');
          setAlerMsg(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('서버와의 통신에 실패했습니다.');
      });
  };

  const forSetPwd = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        id: input.id,
        name: input.name,
        phoneNumber: input.phoneNumber,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'CAN CHANGE PASSWORD') {
          navigate('/pwdresetting');
        } else if (data.message === 'INVALID INFORMATION') {
          alert('비밀번호를 재설정 할 수 없습니다.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('서버와의 통신에 실패했습니다.');
      });
  };

  return (
    <div>
      <LoginLayout>
        <Header type="findpwd" onClickBack={onClickBack} />
        <Input type="id" name="id" value={input.id} onChange={saveInput} />
        <Input
          type="name"
          name="name"
          value={input.name}
          onChange={saveInput}
        />

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
        <S.ButtonOne onClick={onClickCode} disabled={!handleCodeBtn}>
          인증번호 받기
        </S.ButtonOne>
        <S.InputBox
          style={{ width: '204px' }}
          placeholder="인증 번호를 입력해 주세요."
          name="code"
          value={input.code}
          onChange={handleCode}
        />
        <S.ButtonTwo onClick={onCodeBtn} disabled={codeBtnChange}>
          확인
        </S.ButtonTwo>
        {alertMsg === true && <div>인증번호 완료 </div>}
        {alertMsg === false && <div>인증번호 실패 </div>}

        {showTimer && <S.Timer>{formatTime(seconds)}</S.Timer>}

        <S.FindPwdSubmit
          style={{ backgroundColor: alertMsg === true ? 'FF6A21' : '' }}
          onClick={forSetPwd}
        >
          확인
        </S.FindPwdSubmit>
      </LoginLayout>
    </div>
  );
};

export default FindPwd;