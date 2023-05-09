import React from 'react';
import * as S from './Modal.style';

const Modal = ({ handleModal, type, handleSecModal }) => {
  const infoList = {
    map: MAP_MODAL_INFO,
    upload: UPLOAD,
  };

  return (
    <S.Background>
      <S.ModalContainer>
        <S.CloseBox>
          <S.EmptyBox />
          <S.ModalTitle>{infoList[type].title}</S.ModalTitle>
          {infoList[type].close ? (
            <S.CloseImg src="/images/closeImg.png" onClick={handleModal} />
          ) : (
            <S.EmptyBox />
          )}
        </S.CloseBox>
        <S.ModalText>{infoList[type].message1}</S.ModalText>
        <S.ModalButtonBox>
          {infoList[type].button[0] && (
            <S.ModalInfoButton onClick={handleModal}>
              {infoList[type].button[0]}
            </S.ModalInfoButton>
          )}
          {/* {infoList[type].button[1] && (
            <S.ModalUploadButton onClick={handleSecModal}>
              {infoList[type].button[1]}
            </S.ModalUploadButton>
          )} */}
        </S.ModalButtonBox>
      </S.ModalContainer>
    </S.Background>
  );
};

export default Modal;

const MAP_MODAL_INFO = {
  title: '전단 등록',
  close: true,
  message1:
    '전단등록이 필요한 마트에요.                 &nbsp; 전단을 등록하러 가볼까요?',
  button: ['전단 등록하기'],
};

const MODIFY_PASSWORD_MODAL_INFO = {
  title: '비밀번호 불일치',
  close: false,
  message1: '비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
  button: ['확인'],
};

const UPLOAD = {
  title: '전단등록 요청 완료',
  close: false,
  message1: '전단등록 요청이 완료되었습니다.',
  button: ['확인'],
};
