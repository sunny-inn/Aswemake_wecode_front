import React from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './ModifyInfo.style';

const ModifyInfo = () => {
  return (
    <S.ModifyInfoContainer>
      <Header type="modifyInfo" />
      <S.ModifyInfoBody>
        <p>
          고객님의 정보를 안전하게 보호하기 위해
          <br /> 비밀번호를 다시 한 번 입력해주세요.
        </p>
        <S.PasswordTitle>비밀번호</S.PasswordTitle>
        <S.PasswordInputWrap>
          <input
            type="password"
            placeholder="문자+숫자 8자리 이상 입력해주세요"
          />
          <img src="/images/passwordIcon.png" alt="password" />
        </S.PasswordInputWrap>
        <S.ConfirmBtn>확인</S.ConfirmBtn>
      </S.ModifyInfoBody>
    </S.ModifyInfoContainer>
  );
};

export default ModifyInfo;
