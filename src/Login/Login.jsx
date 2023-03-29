import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Login.style';

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({ id: '', pw: '', showPw: false });
  const [checked, setChecked] = useState(false);

  const saveInput = e => {
    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));
  };

  const toggleShowPw = () => {
    setInput(prevInput => ({ ...prevInput, showPw: !prevInput.showPw }));
  };

  const handleCheckboxImgClick = () => {
    setChecked(prevChecked => !prevChecked);
  };

  const goToHome = () => {
    fetch('http://172.30.1.41:8000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        identification: input.id,
        password: input.pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data.accessToken);
        if (localStorage.getItem('token') !== 'undefined') {
          return navigate('/');
        } else {
          const message = document.getElementById('message');
          message.innerText = '아이디 혹은 비밀번호가 일치하지 않습니다';
        }
      });
  };

  return (
    <S.LoginContainer>
      <S.LogoImg src="./images/logo.png" alt="로고" />
      <div>
        <S.InputBox
          name="id"
          type="text"
          placeholder=" 아이디를 입력해주세요."
          value={input.id}
          onChange={saveInput}
        />
        <S.InputBox
          name="pw"
          type={input.showPw ? 'text' : 'password'}
          placeholder=" 비밀번호를 입력해주세요."
          value={input.pw}
          onChange={saveInput}
        />
        <S.ShowPwImg
          onClick={toggleShowPw}
          src={
            input.showPw
              ? './images/passwordIconColor.png'
              : './images/passwordIcon.png'
          }
          alt="비밀번호 표시/숨김 아이콘"
        />
        <S.KeepLoginBox>
          <S.CheckboxImg
            src={
              checked ? './images/checkedImg.png' : './images/uncheckedImg.png'
            }
            onClick={handleCheckboxImgClick}
          />
          <S.KeepLoginSpan>로그인 상태 유지</S.KeepLoginSpan>
        </S.KeepLoginBox>
        <S.Button
          onClick={() => goToHome()}
          disabled={input.id.length < 2 || input.pw.length < 2}
        >
          <span>로그인</span>
        </S.Button>
        <S.LineHr />
        <Link to="/signup">
          <S.Button
            disabled={false}
            style={{
              border: '1px solid #ff6a21',
              color: '#ff6a21',
              backgroundColor: '#fff',
            }}
          >
            회원가입
          </S.Button>
        </Link>
      </div>
    </S.LoginContainer>
  );
};

export default Login;
