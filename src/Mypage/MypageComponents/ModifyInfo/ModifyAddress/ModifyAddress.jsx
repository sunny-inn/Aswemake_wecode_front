import React from 'react';
import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyAddress.style';

const ModifyAddress = ({ setModalOpen, userInfo }) => {
  const [modifyAddress, setModifyAddress] = useState({
    postalCode: '',
    address: '',
    addressDetail: '',
  });

  const { postalCode, address, addressDetail } = modifyAddress;

  const onClickBack = () => {
    setModalOpen(prev => !prev);
  };

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

    setModifyAddress(prev => ({
      ...prev,
      postalCode,
      address: fullAddress,
    }));
  };

  const handleAddressClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleAddressDetail = e => {
    setModifyAddress(prev => ({ ...prev, addressDetail: e.target.value }));
  };

  // 확인 버튼 클릭시 적용되는 함수
  const toModifyAddress = () => {
    fetch('https://flyers.qmarket.me/api/users/addressModify', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        zipCode: postalCode,
        address: address,
        detailAddress: addressDetail,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'USER_ADDRESS_MODIFIED') {
          userInfo.zip_code = postalCode;
          userInfo.address = address;
          userInfo.detail_address = addressDetail;
          // localStorage.setItem(
          //   'address',
          //   JSON.stringify({
          //     zipCode: postalCode,
          //     address: address,
          //     detailAddress: addressDetail,
          //   })
          // );
          setModalOpen(prev => !prev);
        }
      });
  };

  return (
    <S.ModifyAddress>
      <Header type="modifyAddress" onClickBack={onClickBack} />
      <S.ModifyAddressBody>
        <S.ModifyAddressTitle>주소</S.ModifyAddressTitle>
        <S.AddressInputWrap>
          <input value={postalCode} readOnly />
          <button onClick={handleAddressClick}>우편번호 검색</button>
        </S.AddressInputWrap>
        <S.AddressInput
          placeholder="주소를 입력해주세요."
          value={address}
          background="#f9f9f9"
          color="#707070"
          readOnly
        />
        <S.AddressInput
          placeholder="상세주소를 입력해주세요."
          value={addressDetail}
          onChange={handleAddressDetail}
          color="#252525"
        />
      </S.ModifyAddressBody>
      <S.ConfirmBtn disabled={addressDetail === ''} onClick={toModifyAddress}>
        확인
      </S.ConfirmBtn>
    </S.ModifyAddress>
  );
};

export default ModifyAddress;
