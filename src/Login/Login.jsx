import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const saveUserId = e => {
    setInputId(e.target.value);
  };
  const saveUserPw = e => {
    setInputPw(e.target.value);
  };
  const goToHome = () => {
    // fetch(`주소`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     id: loginInfo.id,
    //     password: loginInfo.pw,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     localStorage.setItem('token', data.accessToken);
    //     if (localStorage.getItem('token') !== 'undefined') {
    //       return navigate('/');
    //     } else {
    //       alert('아이디 혹은 비밀번호가 일치하지 않습니다');
    //     }
    //   });
  };

  return (
    <div>
      <h1>로그인</h1>
      <input
        name="id"
        type="text"
        placeholder="아이디"
        value={inputId}
        onChange={e => {
          saveUserId(e);
        }}
      />
      <input
        name="pw"
        type="password"
        placeholder="비밀번호"
        value={inputPw}
        onChange={e => {
          saveUserPw(e);
        }}
      />
      <div>
        <input type="checkbox" />
        <label>로그인 상태 유지</label>
      </div>
      {inputId.length > 1 && inputPw.length > 1 ? (
        <button onClick={goToHome} disabled={false}>
          <span>로그인</span>
        </button>
      ) : (
        <button disabled={true}>
          <span>로그인</span>
        </button>
      )}

      <Link to="/signup">
        <p>아직 회원이 아니신가요?</p>
      </Link>
    </div>
  );
};

export default Login;
