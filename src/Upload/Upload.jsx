import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Header from '../Components/Header/Header';
import Tutorial from './UploadComponents/Tutorial/Tutorial';
import Calendar from './UploadComponents/Calendar/Calendar';
import Modal from '../Components/Modal/Modal';
import * as S from './Upload.style';

const Upload = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [martInfo, setMartInfo] = useState({});
  const [alertMsg, setAlertMsg] = useState(false);
  const [isTutorialClicked, setIsTutorialClicked] = useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [uploadInfo, setUploadInfo] = useState({
    martPhoneNumber: '',
    images: [],
    startDate: '',
    endDate: '',
  });
  const [isUploaded, setIsUploaded] = useState(false);

  const { images, startDate, endDate } = uploadInfo;

  // 스크롤 위치 조정
  useEffect(() => {
    document.getElementById('scroller').scroll(0, 0);
  }, []);

  const uploadForm = new FormData();
  for (let i = 0; i < 4; i++) {
    uploadForm.append('images', uploadInfo.images[i]);
  }

  uploadForm.append(
    'data',
    JSON.stringify({
      martPhoneNumber: uploadInfo.martPhoneNumber,
      startDate: uploadInfo.startDate,
      endDate: uploadInfo.endDate,
    })
  );

  // 전화번호
  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  // 전화번호로 마트 정보 받아오기
  const onClickMart = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/flyer/mart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({ martPhoneNumber: phoneNumber }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.mart.length !== 0) {
          setMartInfo(data.mart[0]);
          setUploadInfo(prev => ({
            ...prev,
            martPhoneNumber: phoneNumber,
          }));
          setAlertMsg(false);
        } else {
          setAlertMsg(true);
        }
      });
  };

  const onClickTutorial = () => {
    setIsTutorialClicked(prev => !prev);
  };

  // 이미지 넣기
  const inputRef = useRef(null);

  const onClickImg = e => {
    e.preventDefault();
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  // 이미지 state에 넣기
  const handleImg = e => {
    e.preventDefault();
    const files = e.target.files;

    setUploadInfo(prev => ({
      ...prev,
      images: files,
    }));
  };

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const onClickCheckbox = e => {
    setIsCheckboxClicked(prev => !prev);
  };

  const handelDisabled = !(
    martInfo &&
    alertMsg === false &&
    uploadInfo.images.length === 4 &&
    startDate &&
    endDate &&
    isCheckboxClicked === true
  );

  const token = localStorage.getItem('token');

  // 전단 등록 요청
  const onSubmitFlyers = e => {
    e.preventDefault();

    //TODO: POST하는 api
    fetch('https://flyers.qmarket.me/api/flyer', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        authorization: token,
      },
      body: uploadForm,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'UPLOAD IS SUCCESS') {
          setIsUploaded(true);
        } else {
          alert(data.message);
        }
      });
  };

  return (
    <S.UploadForm onSubmit={onSubmitFlyers} id="scroller">
      <Header type="upload" />
      <S.UplaodLabel>마트 전화 번호</S.UplaodLabel>
      <S.PhoneBox>
        <S.PhoneInput
          type="text"
          value={phoneNumber}
          placeholder="(-) 포함해서 입력해주세요."
          onChange={handlePhoneNumber}
          alertMsg={alertMsg}
        />
        <S.PhoneBtn onClick={onClickMart}>확인</S.PhoneBtn>
      </S.PhoneBox>
      {alertMsg && <S.AlertMsg>마트 전화번호가 올바르지 않습니다.</S.AlertMsg>}
      <S.UplaodLabel>마트 이름</S.UplaodLabel>
      <S.MartInput
        value={martInfo.martName}
        placeholder="마트 이름을 입력해주세요."
        readOnly
      />
      <S.UplaodLabel>마트 주소</S.UplaodLabel>
      <S.MartInput
        value={martInfo.martNumberAddress}
        placeholder="주소를 입력해주세요."
        readOnly
      />
      <S.PhotoBox>
        <S.UplaodLabel>사진 등록</S.UplaodLabel>
        <S.TutorialBtn onClick={onClickTutorial}>
          필독! 사진 등록 방법 확인
        </S.TutorialBtn>
        {isTutorialClicked && (
          <Tutorial
            onClickTutorial={onClickTutorial}
            setIsTutorialClicked={setIsTutorialClicked}
          />
        )}
      </S.PhotoBox>
      <div>
        {images.length === 4 ? (
          <Slider {...settings}>
            <S.UploadedImg
              alt="flyer1"
              src={`${URL.createObjectURL(images[0])}`}
            />
            <S.UploadedImg
              alt="flyer2"
              src={`${URL.createObjectURL(images[1])}`}
            />
            <S.UploadedImg
              alt="flyer3"
              src={`${URL.createObjectURL(images[2])}`}
            />
            <S.UploadedImg
              alt="flyer4"
              src={`${URL.createObjectURL(images[3])}`}
            />
          </Slider>
        ) : (
          <S.CameraBox onClick={onClickImg}>
            <S.CameraImg alt="camera" src="/images/upload/camera.png" />
            <S.ImgCount>4장 필수</S.ImgCount>
          </S.CameraBox>
        )}
        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          accept="image/*"
          onChange={handleImg}
        />
      </div>
      <S.UplaodLabel>전단 행사 기간</S.UplaodLabel>
      <Calendar setUploadInfo={setUploadInfo} />
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
        <S.CheckBoxMsg>
          등록 요청 후, 해당 건의 내용 수정은 불가합니다.
        </S.CheckBoxMsg>
      </S.CheckBox>
      <S.SubmitBtn
        disabled={handelDisabled ? true : false}
        handelDisabled={handelDisabled}
      >
        전단 등록 요청
      </S.SubmitBtn>
      {isUploaded && <Modal type="upload" />}
    </S.UploadForm>
  );
};
export default Upload;
