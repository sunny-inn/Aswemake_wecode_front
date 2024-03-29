import React from 'react';
import * as S from './Header.style';

const Header = ({ type, onClickBack, newKeyword, setNewKeyword }) => {
  const headerList = {
    signup: SIGNUP_HEADER,
    terms: TERMS_HEADER,
    submit: SUBMIT_HEADER,
    upload: UPLOAD_HEADER,
    photo: PHOTO_HEADER,
    mypage: MYPAGE_HEADER,
    modifyInfo: MODIFY_INFO_HEADER,
    modifyPassword: MODIFY_PASSWORD_HEADER,
    modifyPwSuccess: MODIFY_PASSWORD_SUCCESS_HEADER,
    modifyAddress: MODIFY_ADDRESS_HEADER,
    modifyPhone: MODIFY_PHONE_HEADER,
    dropOut: DROPOUT_HEADER,
    dropOutSuccess: DROPOUT_SUCCESS_HEADER,
    martInfoStatus: MART_INFO_STATUS_HEADER,
    flyerStatus: FLYER_STATUS_HEADER,
    suggest: SUGGEST_HEADER,
    suggestCompleted: SUGGEST_COMPLET_HEADER,
    withdrawPoint: WITHDRAW_HEADER,
    withdrawPoint2: WITHDRAW_HEADER2,
    accountRegi: ACCOUNTREGI_HEADER,
    accountRegi2: ACCOUNTREGI_HEADER2,
    findid: FINDID_HEADER,
    findid2: FINDID_HEADER2,
    findpwd: FINDPWD_HEADER,
    pwdresetting: PWDRESETTING_HEADER,
    pwdresetting2: PWDRESETTING_HEADER2,
    accountChange: ACCOUNTCHANGE_HEADER,
    accountChange2: ACCOUNTCHANGE_HEADER2,
    martInfo: MART_INFO_HEADER,
    favorite: FAVORITE_HEADER,
  };

  return (
    <S.HeaderBox>
      {headerList[type].button === true ? (
        <S.Back
          alt="arrow"
          src="/images/signup/arrow.png"
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
  button: false,
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

const MODIFY_PASSWORD_SUCCESS_HEADER = {
  title: '비밀번호 변경',
  button: false,
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

const DROPOUT_SUCCESS_HEADER = {
  title: '회원탈퇴 완료',
};

const MART_INFO_STATUS_HEADER = {
  title: '마트 정보 수정 현황',
  button: true,
};

const FLYER_STATUS_HEADER = {
  title: '전단등록 현황',
  button: true,
};

const SUGGEST_HEADER = {
  title: '정보 수정 제안',
  button: true,
};

const SUGGEST_COMPLET_HEADER = {
  title: '정보 수정 제안 완료',
  button: false,
};

const WITHDRAW_HEADER = {
  title: '포인트 인출',
  button: true,
};

const WITHDRAW_HEADER2 = {
  title: '포인트 인출',
  button: false,
};

const ACCOUNTREGI_HEADER = {
  title: '계좌 등록',
  button: true,
};

const ACCOUNTREGI_HEADER2 = {
  title: '계좌 등록',
  button: false,
};

const FINDID_HEADER = {
  title: '아이디 찾기',
  button: true,
};

const FINDID_HEADER2 = {
  title: '아이디 찾기',
  button: false,
};

const FINDPWD_HEADER = {
  title: '비밀번호 찾기',
  button: true,
};

const PWDRESETTING_HEADER = {
  title: '비밀번호 재설정',
  button: true,
};

const PWDRESETTING_HEADER2 = {
  title: '비밀번호 재설정',
  button: false,
};

const ACCOUNTCHANGE_HEADER = {
  title: '계좌 변경',
  button: true,
};

const ACCOUNTCHANGE_HEADER2 = {
  title: '계좌 변경',
  button: false,
};

const MART_INFO_HEADER = {
  title: '마트 정보',
  button: true,
};

const FAVORITE_HEADER = {
  title: '자주가요',
  button: false,
};
