import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Birth from './SignupComponents/Birth/Birth';
import Terms from '../Components/Terms/Terms';
import Id from './SignupComponents/Id/Id';
import Submit from './SignupComponents/Submit/Submit';
import * as S from './Signup.style';

const Signup = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const birthDate = year && month && date && year + month + date;
  const [signupInfo, setSignupInfo] = useState({
    id: '',
    passwd: '',
    passwdCheck: '',
    gender: '',
    name: '',
    birth: birthDate,
    address: '',
    addressDetail: '',
    phoneNumber: '',
    postalCode: '',
  });

  // 유효성 검사
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswdEyeClicked, setIsPasswdEyeClicked] = useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
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
    postalCode,
  } = signupInfo;

  // 아이디
  const handleId = e => {
    setSignupInfo(prev => ({ ...prev, id: e.target.value }));
    if (id !== '') {
      setIsFilled(true);
    }
  };

  // 비번
  const handlePasswd = e => {
    setSignupInfo(prev => ({ ...prev, passwd: e.target.value }));
  };

  const handlePasswdCheck = e => {
    setSignupInfo(prev => ({ ...prev, passwdCheck: e.target.value }));
  };

  //FIXME: passwd랑 passwdCheck 값 똑같아도 true 처리 안되는 에러
  const correctPasswd = passwd !== '' && passwd === passwdCheck;

  const onClickPasswdEye = () => setIsPasswdEyeClicked(prev => !prev);

  // 이름
  const handleName = e => {
    setSignupInfo(prev => ({ ...prev, name: e.target.value }));
  };

  // 생년월일
  const handleYear = e => {
    setYear(e.target.value);
  };

  const handleMonth = e => {
    setMonth(e.target.value);
  };

  const handleDate = e => {
    setDate(e.target.value);
  };

  // 성별
  const handleGender = e => {
    setSignupInfo(prev => ({ ...prev, gender: e.target.value }));
  };

  // 주소
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

  const handleAddressClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleAddressDetail = e => {
    setSignupInfo(prev => ({ ...prev, addressDetail: e.target.value }));
  };

  // 휴대전화
  const handlePhoneNumber = e => {
    setSignupInfo(prev => ({ ...prev, phoneNumber: e.target.value }));
  };

  // 이용약관
  const onClickTerms = e => {
    e.preventDefault();
    setIsTermsOpen(prev => !prev);
  };

  const onClickCheckbox = e => {
    setIsCheckboxClicked(prev => !prev);
  };

  // 유효성 검사
  const handleDisabled = !(
    isFilled === true &&
    correctPasswd === true &&
    name !== '' &&
    birth !== '' &&
    postalCode !== '' &&
    addressDetail !== '' &&
    phoneNumber !== '' &&
    isCheckboxClicked === true
  );

  console.log(handleDisabled);

  // 회원가입 완료
  const onSubmit = e => {
    fetch('http://172.30.1.41:8000/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        identification: id,
        password: passwd,
        name: name,
        birth: birthDate,
        phoneNumber: phoneNumber,
        gender: gender,
        zipCode: postalCode,
        address: address,
        detailAddress: addressDetail,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'SIGNUP_SUCCESS') {
          setIsSubmitOpen(prev => !prev);
        } else {
          alert('실패');
        }
      });
  };

  return (
    <S.SignupBox>
      <S.TitleBox>
        <img alt="arrow" src="images/signup/arrow.png" />
        <h1>회원가입</h1>
        <div />
      </S.TitleBox>
      <S.FormBox>
        <S.InputTitle>
          <label>아이디</label>
        </S.InputTitle>
        <Id id={id} handleId={handleId} isFilled={isFilled} />
        <S.InputTitle>
          <label>비밀번호</label>
        </S.InputTitle>
        <S.PasswdInput
          name="passwd"
          value={passwd}
          type={isPasswdEyeClicked ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          onChange={handlePasswd}
        />
        <S.PasswdImg
          alt="eye"
          src={
            isPasswdEyeClicked
              ? 'images/signup/showpasswd.png'
              : 'images/signup/passwd.png'
          }
          onClick={onClickPasswdEye}
        />
        <S.InputTitle>
          <label>비밀번호 확인</label>
        </S.InputTitle>
        <div>
          <S.PasswdInput
            name="passwdCheck"
            value={passwdCheck}
            type={isPasswdEyeClicked ? 'text' : 'password'}
            placeholder="비밀번호를 확인해주세요."
            onChange={handlePasswdCheck}
          />
          <S.CheckedImg
            alt="eye"
            src={
              isPasswdEyeClicked
                ? 'images/signup/showpasswd.png'
                : 'images/signup/passwd.png'
            }
            onClick={onClickPasswdEye}
          />
          {!correctPasswd && !passwdCheck && (
            <div>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <S.InputTitle>
          <label>이름</label>
        </S.InputTitle>
        <S.SignupInput
          name="name"
          value={name}
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={handleName}
        />
        <S.InputTitle>
          <label>생년월일</label>
        </S.InputTitle>
        <Birth
          year={year}
          date={date}
          handleYear={handleYear}
          handleMonth={handleMonth}
          handleDate={handleDate}
        />
        <S.InputTitle>
          <p>성별</p>
        </S.InputTitle>
        <S.GenderBox>
          <S.Gender
            id="male"
            type="radio"
            value="남자"
            name="gender"
            checked
            onChange={handleGender}
          />
          <S.GenderLabel htmlFor="male">남자</S.GenderLabel>
          <S.Gender
            id="female"
            type="radio"
            value="여자"
            name="gender"
            onChange={handleGender}
          />
          <S.GenderLabel htmlFor="female">여자</S.GenderLabel>
        </S.GenderBox>
        <S.AddressBox>
          <S.InputTitle>
            <label>주소</label>
          </S.InputTitle>
          <S.BtnBox>
            <input name="postalCode" value={postalCode} readOnly />
            <button type="button" onClick={handleAddressClick}>
              우편번호 찾기
            </button>
          </S.BtnBox>
          <S.AddressInput
            name="address"
            value={address}
            placeholder="주소를 입력해주세요."
            readOnly
          />
          <S.SignupInput
            name="addressDetail"
            value={addressDetail}
            type="text"
            onChange={handleAddressDetail}
            placeholder="상세 주소를 입력해주세요."
          />
        </S.AddressBox>
        <S.InputTitle>
          <label>휴대전화</label>
        </S.InputTitle>
        <S.PhoneBox>
          <S.PhoneBtnBox>
            <input
              name="phoneNumber"
              value={phoneNumber}
              type="text"
              onChange={handlePhoneNumber}
              placeholder="번호를 입력해주세요."
            />
            <button>인증번호 받기</button>
          </S.PhoneBtnBox>
          <S.PhoneBtnBox>
            <input type="text" placeholder="인증번호를 입력해주세요." />
            <button>확인</button>
          </S.PhoneBtnBox>
        </S.PhoneBox>
        <S.TermsBox>
          <S.InputTitle>
            <label>이용 약관</label>
          </S.InputTitle>
          <S.TermsBtn onClick={onClickTerms}>서비스 이용약관 보기</S.TermsBtn>
          {isTermsOpen && <Terms onClickTerms={onClickTerms} />}
          <div>
            {/* <input type="checkbox" /> */}
            <img
              alt="checkbox"
              src={
                isCheckboxClicked
                  ? 'images/signup/checkbox.png'
                  : 'images/signup/checkbox_d.png'
              }
              onClick={onClickCheckbox}
            />
            <label>서비스 이용 약관에 동의합니다.</label>
          </div>
        </S.TermsBox>
        <S.SubmitBtn
          onClick={onSubmit}
          disabled={handleDisabled ? true : false}
          handleDisabled={handleDisabled}
        >
          회원가입 완료
        </S.SubmitBtn>
      </S.FormBox>
      {isSubmitOpen && <Submit setIsSubmitOpen={setIsSubmitOpen} />}
    </S.SignupBox>
  );
};

export default Signup;
