import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../Components/Header/Header';
import * as S from './DropOutSuccess.style';

const DropOutSuccess = () => {
  const navigate = useNavigate();

  return (
    <S.DropOutSuccess>
      <Header type="dropOutSuccess" />
      <S.DropOutSuccessBody>
        <h2>회원탈퇴가 완료되었습니다.</h2>
        <p>30일 이내 재 로그인 시,</p>
        <p> 탈퇴가 취소됩니다.</p>
      </S.DropOutSuccessBody>
      <S.ConfirmBtn
        onClick={() => {
          navigate('/');
        }}
      >
        확인
      </S.ConfirmBtn>
    </S.DropOutSuccess>
  );
};

export default DropOutSuccess;
