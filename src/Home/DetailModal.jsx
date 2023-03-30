import React from 'react';
import * as S from './DetailModal.style';

const DetailModal = ({ handleModal }) => {
  return (
    <S.ModalContainer>
      <S.ModalContentBox>
        <button onClick={handleModal}>X</button>
        <S.ModalText>
          전단 등록이 필요한 마트에요.
          <br />
          전단을 등록하러 가볼까요?
        </S.ModalText>
        <S.ModalButtonBox>
          <S.ModalInfoButton>마트 정보 보기</S.ModalInfoButton>
          <S.ModalUploadButton>전단 등록 하기</S.ModalUploadButton>
        </S.ModalButtonBox>
      </S.ModalContentBox>
    </S.ModalContainer>
  );
};

export default DetailModal;
