import React, { useState, useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Modal from '../Components/Modal/Modal';
import * as S from './Signup.style';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    id: '',
    passwd: '',
    passwdCheck: '',
    gender: '',
    name: '',
    birth: '',
    address: '',
    addressDetail: '',
    phoneNumber: '',
    // postalCode: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
    passwd,
    passwdCheck,
    gender,
    name,
    birth,
    address,
    addressDetail,
    phoneNumber,
    // postalCode,
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

  const handleName = e => {
    setSignupInfo(prev => ({ ...prev, name: e.target.value }));
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

  const handlePhoneNumber = e => {
    setSignupInfo(prev => ({ ...prev, phoneNumber: e.target.value }));
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
      <S.FormBox>
        <S.InputTitle>
          <label>아이디</label>
        </S.InputTitle>
        <div>
          <input name="id" value={id} type="text" onChange={handleId} />
          <button onClick={handleModal}>중복 확인</button>
          {isModalOpen && (
            <S.ModalBox>
              사용할 수 있는 아이디입니다, 사용할 수 없는 아이디입니다
            </S.ModalBox>
          )}
        </div>
        <S.InputTitle>
          <label>비밀번호</label>
        </S.InputTitle>
        <input
          name="passwd"
          value={passwd}
          type="password"
          onChange={handlePasswd}
        />
        <S.InputTitle>
          <label>비밀번호 확인</label>
        </S.InputTitle>
        <input
          name="passwdCheck"
          value={passwdCheck}
          type="password"
          onChange={handlePasswdCheck}
        />
        {passwdCheck !== '' && passwd !== passwdCheck && (
          <div>비밀번호가 다릅니다</div>
        )}
        <S.InputTitle>
          <p>성별</p>
        </S.InputTitle>
        <div onChange={handleGender}>
          <input type="radio" value="남자" name="gender" /> 남자
          <input type="radio" value="여자" name="gender" /> 여자
        </div>
        <S.InputTitle>
          <label>이름</label>
        </S.InputTitle>
        <input name="name" value={name} type="text" onChange={handleName} />

        <S.InputTitle>
          <label>생년월일</label>
        </S.InputTitle>
        <input name="birth" value={birth} type="text" onChange={handleBirth} />
        <button onClick={onSubmit}>가입하기</button>
        <S.InputTitle>
          <label>휴대폰 번호</label>
        </S.InputTitle>
        <input
          name="phoneNumber"
          value={phoneNumber}
          type="text"
          onChange={handlePhoneNumber}
        />
        <div>
          <S.InputTitle>
            <label>주소</label>
          </S.InputTitle>
          {!address ? (
            <button type="button" onClick={handleClick}>
              주소 검색
            </button>
          ) : (
            <div>
              {/* <input name="postalCode" value={postalCode} readOnly /> */}
              <input name="address" value={address} readOnly />
              <input
                name="addressDetail"
                value={addressDetail}
                type="text"
                onChange={handleAddressDetail}
                placeholder="상세 주소"
              />
            </div>
          )}
        </div>
      </S.FormBox>
      {isModalOpen && <Modal />}
    </S.SignupBox>
  );
};

export default Signup;
