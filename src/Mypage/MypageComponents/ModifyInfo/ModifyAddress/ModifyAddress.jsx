import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyAddress.style';

const ModifyAddress = () => {
  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = data => {
    let postalCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // setSignupInfo(prev => ({
    //   ...prev,
    //   postalCode,
    //   address: fullAddress,
    // }));
  };

  const handleAddressClick = () => {
    open({ onComplete: handleComplete });
  };

  // const handleAddressDetail = e => {
  //   setSignupInfo(prev => ({ ...prev, addressDetail: e.target.value }));
  // };

  return (
    <S.ModifyAddress>
      <Header type="modifyAddress" />
      <S.ModifyAddressBody>
        <S.ModifyAddressTitle>주소</S.ModifyAddressTitle>
        <S.AddressInputWrap>
          <input disabled />
          <button onClick={handleAddressClick}>우편번호 검색</button>
        </S.AddressInputWrap>
        <S.AddressInput placeholder="주소를 입력해주세요." disabled />
        <S.AddressInput placeholder="상세주소를 입력해주세요." />
      </S.ModifyAddressBody>
      <S.ConfirmBtn>확인</S.ConfirmBtn>
    </S.ModifyAddress>
  );
};

export default ModifyAddress;
