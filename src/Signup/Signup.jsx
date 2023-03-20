import React, { useState } from 'react';
import DaumPostcode, { useDaumPostcodePopup } from 'react-daum-postcode';
import * as S from './Signup.style';

const Signup = () => {
  const [openPostcode, setOpenPostcode] = useState(false);

  const [signupInfo, setSignupInfo] = useState({
    id: '',
    passwd: '',
    passwdCheck: '',
    phoneNumber: '',
    postalCode: '',
    address: '',
    addressDetail: '',
    birth: '',
    gender: '',
  });

  const {
    id,
    passwd,
    passwdCheck,
    phoneNumber,
    postalCode,
    address,
    addressDetail,
    birth,
  } = signupInfo;

  const handleId = e => {
    setSignupInfo(prev => ({ ...prev, id: e.target.value }));
  };

  const handlePasswd = e => {
    setSignupInfo(prev => ({ ...prev, passwd: e.target.value }));
  };

  const handlePasswdCheck = e => {
    setSignupInfo(prev => ({ ...prev, passwdCheck: e.target.value }));
  };

  const handlePhoneNumber = e => {
    setSignupInfo(prev => ({ ...prev, phoneNumber: e.target.value }));
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
    setSignupInfo(prev => ({ ...prev, postalCode: fullAddress }));
    setSignupInfo(prev => ({ ...prev, address: postalCode }));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleAddressDetail = e => {
    setSignupInfo(prev => ({ ...prev, addressDetail: e.target.value }));
  };

  const handleBirth = e => {
    setSignupInfo(prev => ({ ...prev, birth: e.target.value }));
  };

  const handleGender = e => {
    setSignupInfo(prev => ({ ...prev, gender: e.target.value }));
  };

  return (
    <S.SignupBox>
      {!openPostcode ? (
        <>
          <label>아이디</label>
          <div>
            <input name="id" value={id} type="text" onChange={handleId} />
            <button>중복 확인</button>
          </div>
          <label>비밀번호</label>
          <input
            name="passwd"
            value={passwd}
            type="password"
            onChange={handlePasswd}
          />
          <label>비밀번호 확인</label>
          <input
            name="passwdCheck"
            value={passwdCheck}
            type="password"
            onChange={handlePasswdCheck}
          />
          {passwdCheck !== '' && passwd !== passwdCheck && (
            <div>비밀번호가 다릅니다</div>
          )}
          <label>휴대폰 번호</label>
          <input
            name="phoneNumber"
            value={phoneNumber}
            type="text"
            onChange={handlePhoneNumber}
          />
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
              <input
                name="postalCode"
                value={postalCode}
                onChange={handleComplete}
              />
              <input name="address" value={address} onChange={handleComplete} />
              <input
                name="addressDetail"
                value={addressDetail}
                type="text"
                onChange={handleAddressDetail}
                placeholder="상세 주소"
              />
            </>
          )}
          <label>생년월일</label>
          <input
            name="birth"
            value={birth}
            type="text"
            onChange={handleBirth}
          />
          <label>성별</label>
          <select name="gender" onChange={e => handleGender(e)}>
            <option value="none" hidden>
              성별
            </option>
            {GENDER_OPTIONS.map(({ id, gender }) => (
              <option key={id} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </>
      ) : (
        <DaumPostcode onComplete={handleComplete} autoClose />
      )}
      <button>가입하기</button>
    </S.SignupBox>
  );
};

export default Signup;

const GENDER_OPTIONS = [
  { id: 1, gender: '여성' },
  { id: 2, gender: '남성' },
];
