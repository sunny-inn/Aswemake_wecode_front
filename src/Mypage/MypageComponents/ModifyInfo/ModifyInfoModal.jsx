import React from 'react';
import * as S from './ModifyInfoModal.style';

const ModifyInfoModal = ({ handleModal }) => {
  return (
    <S.ModifyInfoModal>
      <S.ModifyInfoModalContents>
        <S.ModalHeader>
          <S.LogoutTitle>비밀번호 불일치</S.LogoutTitle>
        </S.ModalHeader>
        <S.ModalBody>
          <S.LogoutText>
            비밀번호가 일치하지 않습니다.
            <br />
            다시 확인해주세요.
          </S.LogoutText>
          <S.LogoutButton onClick={handleModal}>확인</S.LogoutButton>
        </S.ModalBody>
      </S.ModifyInfoModalContents>
    </S.ModifyInfoModal>
  );
};

export default ModifyInfoModal;
