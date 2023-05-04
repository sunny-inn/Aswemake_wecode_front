import React from 'react';
import * as S from './Modal.style';

const Modal = ({ handleModal, children, type }) => {
  const infoList = {
    map: MAP_MODAL_INFO,
    shop: SHOP_MODAL_INFO,
  };

  return (
    <S.ModalContainer>
      <S.ModalContentBox>
        <span>{infoList[type].title}</span>
        <button onClick={handleModal}>X</button>
        <S.ModalText>{infoList[type].message}</S.ModalText>
        <S.ModalButtonBox>
          {infoList[type].button[1] && (
            <S.ModalInfoButton>{infoList[type].button[1]}</S.ModalInfoButton>
          )}
          <S.ModalUploadButton>{infoList[type].button[0]}</S.ModalUploadButton>
        </S.ModalButtonBox>
      </S.ModalContentBox>
      {/* {children} */}
    </S.ModalContainer>
  );
};

export default Modal;

const MAP_MODAL_INFO = {
  title: '전단 등록',
  message: '전단 등록이 필요한 마트에요. 전단을 등록하러 가볼까요?',
  button: ['전단 등록 하기', '마트 등록 하기'],
};

const SHOP_MODAL_INFO = {
  title: '전단 등록',
  message: '전단 등록이 필요한 마트에요. 전단을 등록하러 가볼까요?',
  button: ['전단 등록 하기'],
};

const MODIFY_PASSWORD_MODAL_INFO = {
  title: '비밀번호 불일치',
  message: '비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
  button: ['확인'],
};

const UPLOAD = {
  title: '전단등록 요청 완료',
  message: '전단등록 요청이 완료되었습니다.',
  button: ['확인'],
};
