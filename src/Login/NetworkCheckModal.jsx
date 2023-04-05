import React from 'react';
import * as S from './NetworkCheckModal.style';

const NetworkCheckModal = ({ handleNetworkModal, handleExit }) => {
  return (
    <S.ModalContainer>
      <S.ModalContentBox>
        <S.ModalTitleBox>
          <S.ModalTitle>연결 끊김</S.ModalTitle>
          <S.Close onClick={handleNetworkModal} />
        </S.ModalTitleBox>
        <S.ModalText>
          문제가 발생했습니다.
          <br />
          네트워크 상태를 확인해주세요.
        </S.ModalText>
        <S.ModalButtonBox>
          <S.ModalUploadButton onClick={handleExit}>확인</S.ModalUploadButton>
        </S.ModalButtonBox>
      </S.ModalContentBox>
    </S.ModalContainer>
  );
};

export default NetworkCheckModal;
