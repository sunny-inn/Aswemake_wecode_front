import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import * as S from './Signup.style';

const Signup = () => {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = data => {
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

    setAddress(fullAddress);
    setPostalCode(data.zone_no);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleDetail = () => {
    setAddressDetail(addressDetail);
  };

  return (
    <S.SignupBox>
      {!openPostcode ? (
        <>
          <label>아이디</label>
          <div>
            <input />
            <button>중복 확인</button>
          </div>
          <label>비밀번호</label>
          <input />
          <label>비밀번호 확인</label>
          <input />
          <label>휴대폰 번호</label>
          <input />
          {!address ? (
            <>
              <label>주소 찾기</label>
              <button type="button" onClick={handleClick}>
                주소 검색
              </button>
            </>
          ) : (
            <>
              <label>주소</label>
              <input value={postalCode} />
              <input value={address} />
              <input value={addressDetail} onChange={handleDetail} />
            </>
          )}
          <label>생년월일</label>
          <input />
          <label>성별</label>
          <select>
            <option>여성</option>
            <option>남성</option>
          </select>
        </>
      ) : (
        <DaumPostcode onComplete={handleComplete} autoClose />
      )}
    </S.SignupBox>
  );
};

export default Signup;
