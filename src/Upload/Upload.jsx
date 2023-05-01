import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Header from '../Components/Header/Header';
import Tutorial from './UploadComponents/Tutorial/Tutorial';
import Photo from './UploadComponents/Photo/Photo';
import Calendar from './UploadComponents/Calendar/Calendar';
import * as S from './Upload.style';

const Upload = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [marts, setMarts] = useState([]);
  const [isTutorialClicked, setIsTutorialClicked] = useState(false);
  const [isCloseClicked, setIsCloseClicked] = useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [uploadInfo, setUploadInfo] = useState({
    martId: 0,
    imageUrl: [],
    startDate: '',
    endDate: '',
  });

  const { martId, imageUrl, startDate, endDate } = uploadInfo;

  const uploadForm = new FormData();
  uploadForm.append('martId', uploadInfo.martId);
  uploadForm.append('phoneNumber', uploadInfo.phoneNumber);
  //FIXME: for (let i = 0; i < 4; i++)
  uploadForm.append('imagesUrl', uploadInfo.imageUrl);
  uploadForm.append('startDate', uploadInfo.startDate);
  uploadForm.append('endDate', uploadInfo.endDate);

  // 전화번호
  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  // 마트 정보 FIXME: api로 수정
  useEffect(() => {
    fetch(
      '/data/MhomeData.json'
      // , {method: 'GET', }
    )
      .then(res => res.json())
      .then(data => setMarts(data.martList));
  }, []);

  const filteredMart =
    phoneNumber && marts.filter(mart => mart.phoneNumber === phoneNumber);

  const filteredMartName =
    filteredMart && filteredMart.length > 0 ? filteredMart[0].name : null;

  const filteredMartAddress =
    filteredMart && filteredMart.length > 0 ? filteredMart[0].address : null;

  // 전화번호 유효성 검사
  const handleAlertMsg = phoneNumber && filteredMart.length === 0;

  const onClickClose = () => setIsCloseClicked(prev => !prev);

  const onClickTutorial = () => {
    setIsTutorialClicked(prev => !prev);
  };

  useEffect(
    prev => {
      phoneNumber &&
        filteredMart.length > 0 &&
        setUploadInfo({ ...prev, martId: filteredMart[0].id });
    },
    [phoneNumber]
  );

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
      imageUrl: [...uploadInfo.imageUrl, files[0]],
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
    filteredMartName &&
    filteredMartAddress &&
    uploadInfo.imageUrl.length === 4 &&
    startDate &&
    endDate &&
    isCheckboxClicked
  );

  const onSubmitFlyers = e => {
    e.preventDefault();

    //TODO: POST하는 api
    // fetch(`${API.POSTS}`, {
    //   method: 'POST',
    //   headers: {
    //     enctype: 'multipart/form-data',
    //     authorization: Token,
    //   },
    //   body: uploadForm,
    // }).then(response => response.json());
    // .then(data => {
    //   if (data.message === 'success') {
    //     navigate('/home-warming-list');
    //   } else {
    //     alert('실패');
    //   }
    // });
  };

  console.log(uploadInfo);

  return (
    <S.UploadForm onSubmit={onSubmitFlyers}>
      <Header type="upload" />
      <S.UplaodLabel>마트 전화 번호</S.UplaodLabel>
      <S.PhoneInput
        type="text"
        value={phoneNumber}
        placeholder='전화번호를 "-"없이 입력해주세요'
        onChange={handlePhoneNumber}
        handleAlertMsg={handleAlertMsg}
      />
      {handleAlertMsg && (
        <S.AlertMsg>마트 전화번호가 올바르지 않습니다.</S.AlertMsg>
      )}
      <S.UplaodLabel>마트 이름</S.UplaodLabel>
      <S.MartInput
        value={filteredMartName}
        placeholder="마트 이름을 입력해주세요."
        readOnly
      />
      <S.UplaodLabel>마트 주소</S.UplaodLabel>
      <S.MartInput
        value={filteredMartAddress}
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
        {imageUrl.length === 4 ? (
          <Slider {...settings}>
            <S.UploadedImg
              alt="flyer1"
              src={`${URL.createObjectURL(imageUrl[0])}`}
            />
            <S.UploadedImg
              alt="flyer2"
              src={`${URL.createObjectURL(imageUrl[1])}`}
            />
            <S.UploadedImg
              alt="flyer3"
              src={`${URL.createObjectURL(imageUrl[2])}`}
            />
            <S.UploadedImg
              alt="flyer4"
              src={`${URL.createObjectURL(imageUrl[3])}`}
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
      <S.SubmitBtn disabled={handelDisabled ? true : false}>
        전단 등록 요청
      </S.SubmitBtn>
    </S.UploadForm>
  );
};
export default Upload;
