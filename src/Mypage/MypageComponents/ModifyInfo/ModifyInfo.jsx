import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../Components/Header/Header';
import ModifyInfoDetail from './ModifyInfoDetail';
import ModifyInfoModal from './ModifyInfoModal';
import * as S from './ModifyInfo.style';

const ModifyInfo = ({ setModifyInfo }) => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [isPwEyeClicked, setIsPwEyeClicked] = useState(false);
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [modifyInfoComponent, setModifyInfoComponent] = useState(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(undefined);
  const navigate = useNavigate();

  const onClickBack = () => {
    setModifyInfo(prev => !prev);
  };

  const handleModal = () => {
    setDetailModalOpen(prev => !prev);
  };

  // 확인 버튼 눌렀을 때 적용되는 함수!
  const toVerifyPassword = () => {
    fetch('https://flyers.qmarket.me/api/users/userCheck', {
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
        if (data.message === 'YOU NEED TOKENS, PLEASE LOGIN') {
          return navigate('/');
        } else if (data.message === 'PLEASE CHECK YOUR PASSWORD') {
          setIsPasswordCorrect(false);
          setDetailModalOpen(true);
        } else {
          setUserInfo(data.result[0]);
          setIsPasswordCorrect(true);
          setDetailModalOpen(true);
        }
      });
  };

  if (detailModalOpen && isPasswordCorrect) {
    return setModifyInfoComponent(
      <ModifyInfoDetail
        userInfo={userInfo}
        setDetailModalOpen={setDetailModalOpen}
      />
    );
  } else if (detailModalOpen && !isPasswordCorrect) {
    return setModifyInfoComponent(
      <ModifyInfoModal handleModal={handleModal} />
    );
  }

  return (
    <S.ModifyInfo>
      {modifyInfoComponent}
      {/* {detailModalOpen && (
        <ModifyInfoDetail
          userInfo={userInfo}
          setDetailModalOpen={setDetailModalOpen}
        />
      )} */}
      <Header type="modifyInfo" onClickBack={onClickBack} />
      <S.ModifyInfoBody>
        <p>
          고객님의 정보를 안전하게 보호하기 위해
          <br /> 비밀번호를 다시 한 번 입력해주세요.
        </p>
        <S.PasswordTitle>비밀번호</S.PasswordTitle>
        <S.PasswordInputWrap>
          <input
            type={isPwEyeClicked ? 'text' : 'password'}
            placeholder="문자+숫자 8자리 이상 입력해주세요"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <img
            src={
              isPwEyeClicked
                ? '/images/passwordIconColor.png'
                : '/images/passwordIcon.png'
            }
            alt="password eye"
            onClick={() => {
              setIsPwEyeClicked(prev => !prev);
            }}
          />
        </S.PasswordInputWrap>
      </S.ModifyInfoBody>
      <S.ConfirmBtn onClick={toVerifyPassword} disabled={!password}>
        확인
      </S.ConfirmBtn>
    </S.ModifyInfo>
  );
};

export default ModifyInfo;
