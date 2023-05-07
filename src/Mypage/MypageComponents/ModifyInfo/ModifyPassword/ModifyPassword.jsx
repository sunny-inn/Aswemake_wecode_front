import React, { useState } from 'react';
import Header from '../../../../Components/Header/Header';
import ModifyPwSuccess from './ModifyPwSuccess';
import * as S from './ModifyPassword.style';

const ModifyPassword = ({ setModalOpen }) => {
  const [isPwEyeClicked1, setIsPwEyeClicked1] = useState(false);
  const [isPwEyeClicked2, setIsPwEyeClicked2] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [successModify, setSuccessModify] = useState(false);
  const [modifyPassword, setModifyPassword] = useState({
    password: '',
    passwordCheck: '',
  });
  const { password, passwordCheck } = modifyPassword;

  const onClickBack = () => {
    setModalOpen(prev => !prev);
  };

  const handlePassword = e => {
    setModifyPassword(prev => ({ ...prev, password: e.target.value }));
  };

  const handlePasswordCheck = e => {
    setModifyPassword(prev => ({ ...prev, passwordCheck: e.target.value }));
  };

  const correctPassword = password !== '' && password === passwordCheck;

  const verifiablePw = e => {
    const availablePw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;

    availablePw.test(e.target.value) ? setIsActive(true) : setIsActive(false);
  };

  // 확인 버튼 눌렀을 때 실행되는 함수
  const toModifyPassword = () => {
    fetch('https://flyers.qmarket.me/api/users/changeUserPw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'CHANGED SUCCESSFULLY') {
          setSuccessModify(true);
        }
      });
  };

  return (
    <S.ModifyPassword>
      {successModify && <ModifyPwSuccess />}
      <Header type="modifyPassword" onClickBack={onClickBack} />
      <S.ModifyPasswordBody>
        <S.ModifyPasswordTitle>비밀번호</S.ModifyPasswordTitle>
        <S.PasswordInputWrap>
          <input
            type={isPwEyeClicked1 ? 'text' : 'password'}
            placeholder="문자+숫자 8자리 이상 입력해주세요"
            onChange={handlePassword}
            onKeyUp={verifiablePw}
            value={password}
          />
          <img
            src={
              isPwEyeClicked1
                ? '/images/passwordIconColor.png'
                : '/images/passwordIcon.png'
            }
            alt="password eye"
            onClick={() => {
              setIsPwEyeClicked1(prev => !prev);
            }}
          />
        </S.PasswordInputWrap>
        {isActive && (
          <S.PasswordCheckText color="#ff6a21">
            사용 가능한 비밀번호입니다.
          </S.PasswordCheckText>
        )}
        {!isActive && password !== '' && password.length >= 8 && (
          <S.PasswordCheckText color="#E40303">
            비밀번호 형식이 올바르지 않습니다.
          </S.PasswordCheckText>
        )}
        {password !== '' && password.length < 8 && (
          <S.PasswordCheckText color="#E40303">
            8자 이상 입력해주세요.
          </S.PasswordCheckText>
        )}
        <S.PasswordInputWrap
          correctPassword={correctPassword}
          passwordCheck={passwordCheck}
        >
          <input
            type={isPwEyeClicked2 ? 'text' : 'password'}
            placeholder="비밀번호를 확인해주세요."
            onChange={handlePasswordCheck}
            value={passwordCheck}
          />
          <img
            src={
              isPwEyeClicked2
                ? '/images/passwordIconColor.png'
                : '/images/passwordIcon.png'
            }
            alt="password eye"
            onClick={() => {
              setIsPwEyeClicked2(prev => !prev);
            }}
          />
        </S.PasswordInputWrap>
        {correctPassword && (
          <S.PasswordCheckText color="#ff6a21">
            비밀번호가 일치합니다.
          </S.PasswordCheckText>
        )}
        {!correctPassword && passwordCheck !== '' && (
          <S.PasswordCheckText color="#E40303">
            비밀번호가 일치하지 않습니다.
          </S.PasswordCheckText>
        )}
      </S.ModifyPasswordBody>
      <S.ConfirmBtn
        disabled={!correctPassword || !isActive}
        onClick={toModifyPassword}
      >
        확인
      </S.ConfirmBtn>
    </S.ModifyPassword>
  );
};

export default ModifyPassword;
