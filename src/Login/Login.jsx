import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import HomeSplash from './HomeSplash';
import NetworkCheckModal from './NetworkCheckModal';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import * as S from './Login.style';

const Login = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({ id: '', pw: '', showPw: false });
  const [checked, setChecked] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isFailed, setIsFailed] = useState(false);

  const saveInput = e => {
    setInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }));
  };

  const toggleShowPw = () => {
    setInput(prevInput => ({ ...prevInput, showPw: !prevInput.showPw }));
  };

  const handleCheckboxImgClick = () => {
    setChecked(prevChecked => !prevChecked);
  };

  const handleNetworkModal = () => {
    setShowModal(prev => !prev);
  };

  // const root = document.getElementById('root');
  // const rootApi = createRoot(root);

  // const handleExit = () => {
  //   rootApi.unmount();
  // };

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch('https://www.google.com', {
          mode: 'no-cors',
        });
        const status = response && response.status;
        if (status === 200) {
          // 연결 가능한 상태
        } else {
          // 연결 불가능한 상태
          setShowModal(true);
        }
      } catch (error) {
        // 연결 불가능한 상태
        setShowModal(true);
      }
    };

    if (!navigator.onLine) {
      // 연결 불가능한 상태
      setShowModal(true);
    } else {
      // 연결 가능한 상태
      checkConnection();
    }
  }, []);

  const goToHome = () => {
    // cookies.set('my-cookie', `response.cookie`, {
    //   maxAge: 60000000,
    //   secure: true,
    //   httpOnly: false,
    //   sameSite: 'none',
    // });

    //https://flyers.qmarket.me/api/users/login
    //http://172.30.1.41:8000/api/users/login

    fetch('https://flyers.qmarket.me/api/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        identification: input.id,
        password: input.pw,
        auto: checked,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        if (localStorage.getItem('token') !== 'undefined') {
          return navigate('/home');
        } else {
          setIsFailed(true);
          const message = document.getElementById('message');
          message.innerText = '아이디 또는 비밀번호가 맞지 않습니다.';
        }
      });
  };

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     navigate('/home');
  //   }
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, []);

  return (
    <>
      {showSplash && <HomeSplash />}
      {!showSplash && (
        <S.LoginContainer>
          <S.LogoImg src="./images/logo.png" alt="로고" />
          <div>
            <S.InputBox
              name="id"
              type="text"
              placeholder=" 아이디를 입력해주세요."
              value={input.id}
              onChange={saveInput}
              isFailed={isFailed}
            />
            <S.InputBox
              name="pw"
              type={input.showPw ? 'text' : 'password'}
              placeholder=" 비밀번호를 입력해주세요."
              value={input.pw}
              onChange={saveInput}
              isFailed={isFailed}
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
            <S.FailMsg id="message" />
            <S.KeepLoginBox>
              <S.CheckboxImg
                src={
                  checked
                    ? './images/checkedImg.png'
                    : './images/uncheckedImg.png'
                }
                onClick={handleCheckboxImgClick}
              />
              <S.KeepLoginSpan>로그인 상태 유지</S.KeepLoginSpan>
            </S.KeepLoginBox>

            <S.Button
              onClick={() => goToHome()}
              disabled={input.id.length < 5 || input.pw.length < 7}
            >
              <span>로그인</span>
            </S.Button>
            <S.FindBlock>
              <Link to="/findid">
                <S.FindId>아이디 찾기</S.FindId>
              </Link>
              <S.Division>|</S.Division>
              <Link to="findpwd">
                <S.FindPwd>비밀번호 찾기</S.FindPwd>
              </Link>
            </S.FindBlock>
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
          {/* {showModal && (
            <NetworkCheckModal
              handleNetworkModal={handleNetworkModal}
              handleExit={handleExit}
              type="network"
            />
          )} */}
        </S.LoginContainer>
      )}
    </>
  );
};

export default Login;
