import React from 'react';
import { useState } from 'react';
import Header from '../../../Components/Header/Header';
import Modal from '../../../Components/Modal/Modal';
import ModifyInfoDetail from './ModifyInfoDetail';
import * as S from './ModifyInfo.style';

const ModifyInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <S.ModifyInfo>
      {/* 비밀번호 일치하지 않으면 {modalOpen && <Modal handleModal={handleModal} type="modify" />} 띄우고 맞으면 아래 모달 띄우기 */}
      {modalOpen && <ModifyInfoDetail />}
      <Header type="modifyInfo" />
      <S.ModifyInfoBody>
        <p>
          고객님의 정보를 안전하게 보호하기 위해
          <br /> 비밀번호를 다시 한 번 입력해주세요.
        </p>
        <S.PasswordTitle>비밀번호</S.PasswordTitle>
        <S.PasswordInputWrap>
          <input
            type="password"
            placeholder="문자+숫자 8자리 이상 입력해주세요"
          />
          <img src="/images/passwordIcon.png" alt="password" />
        </S.PasswordInputWrap>
      </S.ModifyInfoBody>
      <S.ConfirmBtn onClick={handleModal}>확인</S.ConfirmBtn>
    </S.ModifyInfo>
  );
};

export default ModifyInfo;
