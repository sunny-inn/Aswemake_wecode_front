import React from 'react';
import * as S from './Header.style';

const Header = ({ type, onClickBack }) => {
  const headerList = {
    signup: SIGNUP_HEADER,
    terms: TERMS_HEADER,
    submit: SUBMIT_HEADER,
    upload: UPLOAD_HEADER,
    photo: PHOTO_HEADER,
    mypage: MYPAGE_HEADER,
    modifyInfo: MODIFY_INFO_HEADER,
    modifyPassword: MODIFY_PASSWORD_HEADER,
    modifyAddress: MODIFY_ADDRESS_HEADER,
    modifyPhone: MODIFY_PHONE_HEADER,
    dropOut: DROPOUT_HEADER,
  };

  return (
    <S.HeaderBox>
      {headerList[type].button === true ? (
        <S.Back
          alt="arrow"
          src="images/signup/arrow.png"
          onClick={onClickBack}
        />
      ) : (
        <div />
      )}
      <S.Title>{headerList[type].title}</S.Title>
      <div />
    </S.HeaderBox>
  );
};

export default Header;

const SIGNUP_HEADER = {
  title: '회원가입',
  button: true,
};

const TERMS_HEADER = {
  title: '이용약관',
  button: true,
};

const SUBMIT_HEADER = {
  title: '회원가입 완료',
  button: true,
};

const UPLOAD_HEADER = {
  title: '전단등록',
  button: false,
};

const PHOTO_HEADER = {
  title: '사진 등록 방법 안내',
  button: true,
};

const MYPAGE_HEADER = {
  title: '마이페이지',
  button: false,
};

const MODIFY_INFO_HEADER = {
  title: '내 정보 수정',
  button: true,
};

const MODIFY_PASSWORD_HEADER = {
  title: '비밀번호 변경',
  button: true,
};

const MODIFY_ADDRESS_HEADER = {
  title: '주소 변경',
  button: true,
};

const MODIFY_PHONE_HEADER = {
  title: '휴대전화 변경',
  button: true,
};

const DROPOUT_HEADER = {
  title: '회원탈퇴',
  button: true,
};
