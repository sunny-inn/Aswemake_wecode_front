import React, { useState, useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Modal from '../Components/Modal/Modal';
import * as S from './Signup.style';

const Signup = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleModal = () => setIsModalOpen(true);

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
    setSignupInfo(prev => ({
      ...prev,
      postalCode,
      address: fullAddress,
    }));
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

  const onSubmit = e => {
    e.preventDefault();
    setIsModalOpen(prev => !prev);
    // if (payments.totalProductPrice && payments.totalDeliveryPrice) {
    //   fetch(`${API.ORDERS}/payment`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //       authorization: Token,
    //     },
    //     body: JSON.stringify({ payments }),
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       if (data.message === '') {
    //         navigate('/');
    //       } else {
    //         alert('실패');
    //       }
    //     });
    // }
  };

  return (
    <S.SignupBox>
      <S.TitleBox>
        <h1>회원가입</h1>
        <button>서비스 이용약관 확인</button>
      </S.TitleBox>
      <label>아이디</label>
      <div>
        <input name="id" value={id} type="text" onChange={handleId} />
        <button onClick={handleModal}>중복 확인</button>
        {isModalOpen && (
          <S.ModalBox>
            사용할 수 있는 아이디입니다, 사용할 수 없는 아이디입니다
          </S.ModalBox>
        )}
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
      <div>
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
            <div>
              <input name="postalCode" value={postalCode} readOnly />
              <input name="address" value={address} readOnly />
              <input
                name="addressDetail"
                value={addressDetail}
                type="text"
                onChange={handleAddressDetail}
                placeholder="상세 주소"
              />
            </div>
          </>
        )}
      </div>

      <label>생년월일</label>
      <input name="birth" value={birth} type="text" onChange={handleBirth} />
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
      <button onClick={onSubmit}>가입하기</button>
      {isModalOpen && <Modal />}
    </S.SignupBox>
  );
};

export default Signup;

const GENDER_OPTIONS = [
  { id: 1, gender: '여성' },
  { id: 2, gender: '남성' },
];
