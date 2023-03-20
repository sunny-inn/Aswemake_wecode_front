import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>로그인</h1>
      <input name="id" type="text" placeholder="아이디" />
      <input name="pw" type="password" placeholder="비밀번호" />
      <div>
        <input type="checkbox" />
        <label>로그인 상태 유지</label>
      </div>
      <button>
        <span>로그인</span>
      </button>
      <p>아직 회원이 아니신가요?</p>
    </div>
  );
};

export default Login;
