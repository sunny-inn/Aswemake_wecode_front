import React from 'react';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyPassword.style';

const ModifyPassword = () => {
  return (
    <S.ModifyPassword>
      <Header type="modifyPassword" />
      <S.ModifyPasswordBody>
        <S.ModifyPasswordTitle>비밀번호</S.ModifyPasswordTitle>
        <S.PasswordInputWrap>
          <input
            type="password"
            placeholder="문자+숫자 8자리 이상 입력해주세요"
          />
          <img src="/images/passwordIcon.png" alt="password" />
        </S.PasswordInputWrap>
        <S.PasswordCheckText>사용 가능한 비밀번호입니다.</S.PasswordCheckText>
        <S.PasswordInputWrap>
          <input type="password" placeholder="비밀번호를 확인해주세요." />
          <img src="/images/passwordIcon.png" alt="password" />
        </S.PasswordInputWrap>
        <S.PasswordCheckText>비밀번호가 일치합니다.</S.PasswordCheckText>
        {/* <S.PasswordCheckText>비밀번호가 일치하지 않습니다.</S.PasswordCheckText> */}
      </S.ModifyPasswordBody>
      <S.ConfirmBtn>확인</S.ConfirmBtn>
    </S.ModifyPassword>
  );
};

export default ModifyPassword;
