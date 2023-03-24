import React, { useState, useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Birth from './SignupComponents/Birth/Birth';
import Terms from '../Components/Terms/Terms';
import Id from './SignupComponents/Id/Id';
import Submit from './SignupComponents/Submit/Submit';
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
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

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

  const onClickTerms = () => setIsTermsOpen(prev => !prev);
  console.log('btn', isTermsOpen);

  const handleId = e => {
    setSignupInfo(prev => ({ ...prev, id: e.target.value }));
  };

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

  // const handleBirth = e => {
  //   setSignupInfo(prev => ({ ...prev, birth: e.target.value }));
  // };

  const handleGender = e => {
    setSignupInfo(prev => ({ ...prev, gender: e.target.value }));
  };

  const handlePhoneNumber = e => {
    setSignupInfo(prev => ({ ...prev, phoneNumber: e.target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    setIsSubmitOpen(prev => !prev);
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
        <button onClick={onClickTerms}>서비스 이용약관 확인</button>
        {isTermsOpen && <Terms onClickTerms={onClickTerms} />}
      </S.TitleBox>
      <S.FormBox>
        <S.InputTitle>
          <label>아이디</label>
        </S.InputTitle>
        <Id />
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
        <Birth />
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
        <S.InputTitle>
          <label>휴대전화</label>
        </S.InputTitle>
        <div>
          <input
            name="phoneNumber"
            value={phoneNumber}
            type="text"
            onChange={handlePhoneNumber}
            placeholder="휴대폰 번호 10자리 또는 11자리 입력하세요"
          />
          <button>인증번호 받기</button>
        </div>
        <div>
          <input placeholder="인증번호 6자리 숫자 입력" />
          <button>확인</button>
        </div>
        <div>
          <button onClick={onSubmit}>회원가입 완료</button>
        </div>
      </S.FormBox>
      {isSubmitOpen && <Submit />}
    </S.SignupBox>
  );
};

export default Signup;
