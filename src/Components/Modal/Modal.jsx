import React from 'react';
import * as S from './Modal.style';

const Modal = ({ handleModal, children, type }) => {
  const infoList = {
    map: MAP_MODAL_INFO,
    shop: SHOP_MODAL_INFO,
    logout: LOGOUT,
    modify: MODIFY_PASSWORD_MODAL_INFO,
  };

  return (
    <S.ModalContainer>
      <S.ModalContentBox>
        <span>{infoList[type].title}</span>
        <button onClick={handleModal}>X</button>
        <S.ModalText>{infoList[type].message1}</S.ModalText>
        <S.ModalText>{infoList[type].message2}</S.ModalText>
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
  message1: '전단 등록이 필요한 마트에요.',
  message2: ' 전단을 등록하러 가볼까요?',
  button: ['마트 정보 보기', '전단 등록 하기'],
};

const SHOP_MODAL_INFO = {
  title: '전단 등록',
  message1: '전단 등록이 필요한 마트에요.',
  message2: ' 전단을 등록하러 가볼까요?',
  button: ['전단 등록 하기'],
};

const LOGOUT = {
  title: '로그아웃',
  message: '정말 로그아웃 하시겠어요?',
  button: ['로그아웃 하기'],
};

const MODIFY_PASSWORD_MODAL_INFO = {
  title: '비밀번호 불일치',
  message: '비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
  button: ['확인'],
};
