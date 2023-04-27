import React from 'react';
import * as S from './LogoutModal.style';

const LogoutModal = ({ handleModal, handleLogout }) => {
  return (
    <S.LogoutModal>
      <S.LogoutModalContents>
        <S.LogoutHeader>
          <S.LogoutTitle>로그아웃</S.LogoutTitle>
          <S.CloseButton onClick={handleModal}>
            <S.CloseButtonImg src="/images/closeImg.png" alt="close" />
          </S.CloseButton>
        </S.LogoutHeader>
        <S.LogoutBody>
          <S.LogoutText>정말 로그아웃 하시겠어요?</S.LogoutText>
          <S.LogoutButton onClick={handleLogout}>로그아웃 하기</S.LogoutButton>
        </S.LogoutBody>
      </S.LogoutModalContents>
    </S.LogoutModal>
  );
};

export default LogoutModal;
