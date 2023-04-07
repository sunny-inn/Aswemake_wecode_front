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
