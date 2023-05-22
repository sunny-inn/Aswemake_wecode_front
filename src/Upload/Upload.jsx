import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Tutorial from './UploadComponents/Tutorial/Tutorial';
import Calendar from './UploadComponents/Calendar/Calendar';
import Modal from '../Components/Modal/Modal';
import * as S from './Upload.style';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [martInfo, setMartInfo] = useState({});
  const [alertMsg, setAlertMsg] = useState(false);
  const [isTutorialClicked, setIsTutorialClicked] = useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [uploadInfo, setUploadInfo] = useState({
    martPhoneNumber: '',
    startDate: '',
    endDate: '',
  });
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);

  // 스크롤 위치 조정
  useEffect(() => {
    document.getElementById('scroller').scroll(0, 0);
  }, []);

  // token 확인
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [token]);

  // form data에 data 담기
  const uploadForm = new FormData();
  uploadForm.append('images', img1);
  uploadForm.append('images', img2);
  uploadForm.append('images', img3);
  uploadForm.append('images', img4);
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

  useEffect(() => {
    if (phoneNumber === '') {
      setAlertMsg(false);
    }
  }, [phoneNumber]);

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

  // 이미지 state에 넣기
  const handleImg1 = e => {
    e.preventDefault();
    const files = e.target.files;
    setImg1(files[0]);
  };

  const handleImg2 = e => {
    e.preventDefault();
    const files = e.target.files;
    setImg2(files[0]);
  };

  const handleImg3 = e => {
    e.preventDefault();
    const files = e.target.files;
    setImg3(files[0]);
  };

  const handleImg4 = e => {
    e.preventDefault();
    const files = e.target.files;
    setImg4(files[0]);
  };

  // 이미지 삭제
  const onClickDelete1 = e => {
    e.preventDefault();
    setImg1();
  };

  const onClickDelete2 = e => {
    e.preventDefault();
    setImg2();
  };

  const onClickDelete3 = e => {
    e.preventDefault();
    setImg3();
  };

  const onClickDelete4 = e => {
    e.preventDefault();
    setImg4();
  };

  // 체크박스
  const onClickCheckbox = e => {
    setIsCheckboxClicked(prev => !prev);
  };

  const handelDisabled = !(
    phoneNumber &&
    martInfo &&
    alertMsg === false &&
    img1 &&
    img2 &&
    img3 &&
    img4 &&
    uploadInfo.startDate &&
    uploadInfo.endDate &&
    isCheckboxClicked === true
  );

  // 전단 등록 요청
  const onSubmitFlyers = e => {
    e.preventDefault();

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

  // modal 닫기 && 정보 초기화
  const handleModal = () => {
    setIsUploaded(prev => !prev);
    setPhoneNumber('');
    setMartInfo({
      martName: '',
      martNumberAddress: '',
    });
    setImg1();
    setImg2();
    setImg3();
    setImg4();
    setStartDate('');
    setEndDate('');
    setIsCheckboxClicked(false);
  };

  console.log(martInfo);

  return (
    <S.UplaodForm id="scroller">
      <Header type="upload" />
      <S.UploadBox>
        <S.InputBox>
          <S.UplaodLabel>마트 전화번호</S.UplaodLabel>
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
          {alertMsg && (
            <S.AlertMsg>마트 전화번호가 올바르지 않습니다.</S.AlertMsg>
          )}
        </S.InputBox>
        <S.InputBox>
          <S.UplaodLabel>마트 이름</S.UplaodLabel>
          <S.MartInput
            value={martInfo.martName}
            placeholder="마트 이름을 입력해주세요."
            readOnly
          />
        </S.InputBox>
        <S.InputBox>
          <S.UplaodLabel>마트 주소</S.UplaodLabel>
          <S.MartInput
            value={martInfo.martNumberAddress}
            placeholder="주소를 입력해주세요."
            readOnly
          />
        </S.InputBox>
        <S.InputBox>
          <S.PhotoBox>
            <S.UplaodLabel>사진 등록</S.UplaodLabel>
            <S.TutorialBtn onClick={onClickTutorial}>
              필독! 사진 등록 방법 안내
            </S.TutorialBtn>
            {isTutorialClicked && (
              <Tutorial
                onClickTutorial={onClickTutorial}
                setIsTutorialClicked={setIsTutorialClicked}
              />
            )}
          </S.PhotoBox>
          <S.UploadedBox>
            {img1 ? (
              <S.ImgBox>
                <S.UploadedImg
                  alt="flyer"
                  src={`${URL.createObjectURL(img1)}`}
                />
                <S.DeleteBtn
                  alt="delete"
                  src="images/upload/delete.png"
                  onClick={onClickDelete1}
                />
              </S.ImgBox>
            ) : (
              <S.CameraBox htmlFor="imgFile">
                <input
                  id="imgFile"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImg1}
                />
                <S.CameraImg alt="camera" src="/images/upload/camera.png" />
                <S.ImgCount>1/4</S.ImgCount>
              </S.CameraBox>
            )}
            {img2 ? (
              <S.ImgBox>
                <S.UploadedImg
                  alt="flyer"
                  src={`${URL.createObjectURL(img2)}`}
                />
                <S.DeleteBtn
                  alt="delete"
                  src="images/upload/delete.png"
                  onClick={onClickDelete2}
                />
              </S.ImgBox>
            ) : (
              <S.CameraBox htmlFor="imgFile">
                <input
                  id="imgFile"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImg2}
                />
                <S.CameraImg alt="camera" src="/images/upload/camera.png" />
                <S.ImgCount>2/4</S.ImgCount>
              </S.CameraBox>
            )}
            {img3 ? (
              <S.ImgBox>
                <S.UploadedImg
                  alt="flyer"
                  src={`${URL.createObjectURL(img3)}`}
                />
                <S.DeleteBtn
                  alt="delete"
                  src="images/upload/delete.png"
                  onClick={onClickDelete3}
                />
              </S.ImgBox>
            ) : (
              <S.CameraBox htmlFor="imgFile">
                <input
                  id="imgFile"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImg3}
                />
                <S.CameraImg alt="camera" src="/images/upload/camera.png" />
                <S.ImgCount>3/4</S.ImgCount>
              </S.CameraBox>
            )}
            {img4 ? (
              <S.ImgBox>
                <S.UploadedImg
                  alt="flyer"
                  src={`${URL.createObjectURL(img4)}`}
                />
                <S.DeleteBtn
                  alt="delete"
                  src="images/upload/delete.png"
                  onClick={onClickDelete4}
                />
              </S.ImgBox>
            ) : (
              <S.CameraBox htmlFor="imgFile">
                <input
                  id="imgFile"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImg4}
                />
                <S.CameraImg alt="camera" src="/images/upload/camera.png" />
                <S.ImgCount>4/4</S.ImgCount>
              </S.CameraBox>
            )}
          </S.UploadedBox>
        </S.InputBox>
        <S.InputBox>
          <S.UplaodLabel>전단 행사기간</S.UplaodLabel>
          <Calendar
            setUploadInfo={setUploadInfo}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </S.InputBox>
        <S.InputBox>
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
            onClick={onSubmitFlyers}
          >
            전단등록 요청
          </S.SubmitBtn>
        </S.InputBox>
      </S.UploadBox>
      {isUploaded && <Modal type="upload" handleModal={handleModal} />}
    </S.UplaodForm>
  );
};
export default Upload;
