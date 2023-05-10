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
  const [alertMsg, setAlertMsg] = useState(null);
  //만료되었을 때 alert 상태 저장
  const [expired, setExpired] = useState(false);
  //타이머 0s 안돼서 추가
  const [timerId, setTimerId] = useState(null);
  //0s 되면 만료 alert 뜸
  const [codeBtnClicked, setCodeBtnClikced] = useState(false);

  // 인증번호 색깔 변하게..
  const codeBtnChange = input.phoneNumber === '' || input.code === '';

  const handleCode = e => setInput(prev => ({ ...prev, code: e.target.value }));

  useEffect(() => {
    let timer;

    if (codeBtn) {
      setShowTimer(true);
      timer = setInterval(() => {
        setSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      setTimerId(timer);
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

  // //인증번호 전송
  // const onClickCode = e => {
  //   e.preventDefault();
  //   setCodeBtn(true);
  //   setShowTimer(true);
  //   setSeconds(180);
  //   setCodeBtnClikced(true);

  //   fetch('https://flyers.qmarket.me/api/verificationCode/send', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({
  //       phoneNumber: input.phoneNumber,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.message !== 'message sent successfully') {
  //         alert('인증번호 전송 실패');
  //       }
  //     });
  // };

  const onClickCode = e => {
    e.preventDefault();
    setCodeBtn(true);
    setShowTimer(true);
    setSeconds(180);
    setCodeBtnClikced(true);
    setAlertMsg(null); // Reset the alertMsg state
    setInput(prev => ({ ...prev, code: '' })); // Clear the input for the code
    setExpired(false);

    fetch('https://flyers.qmarket.me/api/verificationCode/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
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

  //인증번호 받기
  const onCodeBtn = e => {
    e.preventDefault();
    setCodeBtn(false);
    setAlertMsg(null);
    setShowTimer(true);
    setSeconds(180);
    //타이머 멈춤
    clearInterval(timerId);
    setShowTimer(false);
    setSeconds(180);

    fetch('https://flyers.qmarket.me/api/verificationCode/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        phoneNumber: input.phoneNumber,
        code: input.code,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'verification code matches') {
          setAlertMsg(true);
        } else {
          setAlertMsg(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('서버와의 통신에 실패했습니다.');
      });
  };

  const forSetPwd = e => {
    e.preventDefault();

    if (expired) {
      setExpired(true);
      return;
    }

    fetch('https://flyers.qmarket.me/api/users/checkUserPw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        identification: input.id,
        name: input.name,
        phoneNumber: input.phoneNumber,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'CAN CHANGE PASSWORD') {
          navigate('/pwdresetting', { state: { id: input.id } });
        } else if (data.message === 'INVALID INFORMATION') {
          alert('일치하는 정보가 없어 비밀번호를 재설정 할 수 없습니다.');
        } else if (data.message === 'PLEASE FILL IN ALL BLANKS') {
          alert('입력값을 모두 채워주세요.');
        }
      });
  };

  //만료되었을 때 alert 메시지 띄우기
  useEffect(() => {
    if (seconds === 0) {
      setExpired(true);
    }
  }, [seconds]);

  return (
    <div>
      <Header type="findpwd" onClickBack={onClickBack} />
      <LoginLayout>
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
        <S.ButtonOne
          onClick={onClickCode}
          disabled={!handleCodeBtn || alertMsg === true}
        >
          인증번호 받기
        </S.ButtonOne>
        <S.InputBox
          style={{ width: '204px' }}
          placeholder="인증 번호를 입력해주세요."
          name="code"
          value={input.code}
          onChange={handleCode}
          borderColor={alertMsg === false || expired ? '#e40303' : '#dbdbdb'}
        />
        {showTimer && <S.Timer>{formatTime(seconds)}</S.Timer>}
        <S.ButtonTwo
          onClick={onCodeBtn}
          disabled={codeBtnChange || alertMsg === true}
        >
          확인
        </S.ButtonTwo>
        {alertMsg === true && (
          <S.AlertMsg> 번호 인증이 완료되었습니다. </S.AlertMsg>
        )}
        {alertMsg === false && (
          <S.FailAlertMsg>인증번호를 다시 확인해주세요. </S.FailAlertMsg>
        )}
        {codeBtnClicked && expired && (
          <S.FailAlertMsg>
            만료된 인증번호입니다.다시 시도해주세요.
          </S.FailAlertMsg>
        )}

        <S.FindPwdSubmit
          disabled={alertMsg !== true}
          confirmed={alertMsg === true}
          onClick={forSetPwd}
        >
          확인
        </S.FindPwdSubmit>
      </LoginLayout>
    </div>
  );
};

export default FindPwd;

//타이머 0초 되어도 만료된 인증번호 뜸
