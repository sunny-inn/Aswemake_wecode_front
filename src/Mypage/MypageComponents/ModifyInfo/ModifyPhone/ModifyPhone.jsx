import React from 'react';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyPhone.style';

const ModifyPhone = () => {
  return (
    <S.ModifyPhone>
      <Header type="modifyPhone" />
      <S.ModifyPhoneBody>
        <S.ModifyPhoneTitle>휴대전화</S.ModifyPhoneTitle>
        <S.PhoneInputWrap>
          <input placeholder="전화번호를 입력해주세요." />
          <button>인증번호 받기</button>
        </S.PhoneInputWrap>
        <S.PhoneInputWrap>
          <input placeholder="인증번호를 입력해주세요." />
          <button>확인</button>
        </S.PhoneInputWrap>
        <S.PhoneCheckText>인증번호를 다시 확인해주세요.</S.PhoneCheckText>
        {/* <S.PhoneCheckText>번호 인증이 완료되었습니다.</S.PhoneCheckText> */}
      </S.ModifyPhoneBody>
      <S.ConfirmBtn>확인</S.ConfirmBtn>
    </S.ModifyPhone>
  );
};

export default ModifyPhone;
