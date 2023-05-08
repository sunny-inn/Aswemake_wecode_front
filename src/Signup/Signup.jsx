import React, { useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import Birth from './SignupComponents/Birth/Birth';
import Terms from '../Components/Terms/Terms';
import Id from './SignupComponents/Id/Id';
import Submit from './SignupComponents/Submit/Submit';
import Header from '../Components/Header/Header';
import Phone from './SignupComponents/Phone/Phone';
import Passwd from './SignupComponents/Passwd/Passwd';
import * as S from './Signup.style';

const Signup = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  const [signupInfo, setSignupInfo] = useState({
    id: '',
    passwd: '',
    gender: '여자',
    name: '',
    birth: '',
    address: '',
    addressDetail: '',
    phoneNumber: '',
    postalCode: '',
  });
  const [isIdDisabled, setIsIdDisabled] = useState(false);
  const [isValidPasswd, setIsValidPasswd] = useState(false);
  const [passwdCheck, setPasswdCheck] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [code, setCode] = useState('');
  const [verification, setVerification] = useState(false);

  const {
    id,
    passwd,
    gender,
    name,
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

    setIsValidPasswd(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/.test(e.target.value));
  };

  const handlePasswdCheck = e => setPasswdCheck(e.target.value);
  const correctPasswd = passwd !== '' && passwd === passwdCheck;

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

  const formatDay = day => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (numbers.includes(day)) return `0${day}`;
    if (day.length >= 2 && day[0] === '0') return day.substring(1);
  };

  const handleDate = e => {
    const day = e.target.value;
    const formattedDay = formatDay(day);
    setDate(formattedDay);
  };

  useEffect(() => {
    if (year && month && date) {
      setSignupInfo(prev => ({ ...prev, birth: year + month + date }));
    }
  }, [date]);

  // 성별
  const handleGender = e => {
    const { value } = e.target;
    setSignupInfo(prev => ({ ...prev, gender: value }));
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

  // 팝업창
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('/');
  };

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
    isIdDisabled === false &&
    isValidPasswd === true &&
    correctPasswd === true &&
    name !== '' &&
    year !== '' &&
    month !== '' &&
    date !== '' &&
    gender !== '' &&
    postalCode !== '' &&
    addressDetail !== '' &&
    verification === true &&
    isCheckboxClicked === true
  );

  // 회원가입 완료
  const onSubmit = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        identification: id,
        password: passwd,
        name: name,
        birth: year + month + date,
        phoneNumber: phoneNumber,
        gender: gender,
        zipCode: postalCode,
        address: address,
        detailAddress: addressDetail,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SIGNUP_SUCCESS') {
          setIsSubmitOpen(prev => !prev);
        } else {
          alert('실패');
        }
      });
  };

  return (
    <S.SignupBox>
      <Header type="signup" onClickBack={onClickBack} />
      <S.FormBox>
        <S.InputBox>
          <S.InputTitle>아이디</S.InputTitle>
          <Id
            id={id}
            handleId={handleId}
            isFilled={isFilled}
            setIsFilled={setIsFilled}
            isIdDisabled={isIdDisabled}
            setIsIdDisabled={setIsIdDisabled}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>비밀번호</S.InputTitle>
          <Passwd
            passwd={passwd}
            handlePasswd={handlePasswd}
            isValidPasswd={isValidPasswd}
            passwdCheck={passwdCheck}
            handlePasswdCheck={handlePasswdCheck}
            correctPasswd={correctPasswd}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>이름</S.InputTitle>
          <S.SignupInput
            name="name"
            value={name}
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={handleName}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>생년월일</S.InputTitle>
          <Birth
            year={year}
            date={date}
            handleYear={handleYear}
            handleMonth={handleMonth}
            handleDate={handleDate}
          />
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>성별</S.InputTitle>
          <S.GenderBox>
            <S.Gender
              id="male"
              type="radio"
              value="남자"
              name="gender"
              onChange={handleGender}
              checked={gender === '남자'}
            />
            <S.GenderLabel htmlFor="male">남자</S.GenderLabel>
            <S.Gender
              id="female"
              type="radio"
              value="여자"
              name="gender"
              onChange={handleGender}
              checked={gender === '여자'}
            />
            <S.GenderLabel htmlFor="female">여자</S.GenderLabel>
          </S.GenderBox>
        </S.InputBox>
        <S.InputBox>
          <S.AddressBox>
            <S.InputTitle>주소</S.InputTitle>
            <S.BtnBox>
              <input name="postalCode" value={postalCode} readOnly />
              <button type="button" onClick={handleAddressClick}>
                우편번호 검색
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
        </S.InputBox>
        <S.InputBox>
          <S.InputTitle>휴대전화</S.InputTitle>
          <Phone
            phoneNumber={phoneNumber}
            handlePhoneNumber={handlePhoneNumber}
            code={code}
            setCode={setCode}
            verification={verification}
            setVerification={setVerification}
          />
        </S.InputBox>
        <S.InputBox>
          <S.TermsBox>
            <S.InputTitle>이용 약관</S.InputTitle>
            <S.TermsBtn onClick={onClickTerms}>
              서비스 이용 약관 보기
            </S.TermsBtn>
            {isTermsOpen && <Terms setIsTermsOpen={setIsTermsOpen} />}
            <S.CheckBox>
              <img
                alt="checkbox"
                src={
                  isCheckboxClicked
                    ? 'images/signup/checkbox.png'
                    : 'images/signup/checkbox_d.png'
                }
                onClick={onClickCheckbox}
              />
              <S.CheckLabel>서비스 이용 약관에 동의합니다.</S.CheckLabel>
            </S.CheckBox>
          </S.TermsBox>
        </S.InputBox>
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
