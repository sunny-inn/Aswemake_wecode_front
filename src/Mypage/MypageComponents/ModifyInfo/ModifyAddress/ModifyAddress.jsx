import React from 'react';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyAddress.style';

const ModifyAddress = () => {
  return (
    <S.ModifyAddress>
      <Header type="modifyAddress" />
      <S.ModifyAddressBody>
        <S.ModifyAddressTitle>주소</S.ModifyAddressTitle>
        <S.AddressInputWrap>
          <input disabled />
          <button>우편번호 검색</button>
        </S.AddressInputWrap>
        <S.AddressInput placeholder="주소를 입력해주세요." disabled />
        <S.AddressInput placeholder="상세주소를 입력해주세요." />
      </S.ModifyAddressBody>
      <S.ConfirmBtn>확인</S.ConfirmBtn>
    </S.ModifyAddress>
  );
};

export default ModifyAddress;
