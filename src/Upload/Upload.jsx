import React, { useState, useRef, useEffect } from 'react';
import * as S from './Upload.style';
import Header from '../Components/Header/Header';
import Tutorial from './UploadComponents/Tutorial/Tutorial';
import Photo from './UploadComponents/Photo/Photo';
import Calendar from './UploadComponents/Calendar/Calendar';

const Upload = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [marts, setMarts] = useState([]);
  const [isTutorialClicked, setIsTutorialClicked] = useState(false);
  const [isCloseClicked, setIsCloseClicked] = useState(false);
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  //FIXME: api로 수정
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

  const onClickClose = () => setIsCloseClicked(prev => !prev);

  const onClickTutorial = () => {
    setIsTutorialClicked(prev => !prev);
  };

  const inputRef = useRef(null);

  // 이미지 넣기
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

  // 전단 행사 기간
  const now = new Date();
  const year = now.getFullYear();

  const handleMonth = e => {
    setMonth(e.target.value);
  };
  const handleDate = e => {
    setDate(e.target.value);
  };

  const endDate =
    month.length === 2 ? year + month + date : year + '0' + month + date;

  // 등록 요청
  const [uploadInfo, setUploadInfo] = useState({
    martId: marts.id,
    imageUrl: [],
    endDate: endDate,
  });

  const uploadForm = new FormData();
  uploadForm.append('phoneNumber', uploadInfo.phoneNumber);
  for (let i = 0; i < 4; i++) {
    uploadForm.append('imagesUrl', uploadInfo.imageUrl[i]);
  }
  // 행사 끝나는 날짜도 보내줘야 함

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

  return (
    <S.UploadForm onSubmit={onSubmitFlyers}>
      <Header type="upload" />
      <S.UplaodLabel>마트 전화 번호</S.UplaodLabel>
      <S.PhoneInput
        type="text"
        value={phoneNumber}
        placeholder='전화번호를 "-"없이 입력해주세요'
        onChange={handlePhoneNumber}
      />
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
        <S.TutorialBtn onClick={onClickTutorial}>등록 방법 확인</S.TutorialBtn>
        {isTutorialClicked && <Tutorial onClickTutorial={onClickTutorial} />}
      </S.PhotoBox>
      <div>
        <S.CameraBox>
          <S.CameraImg
            alt="camera"
            src="/images/upload/camera.png"
            onClick={onClickClose}
          />
          <S.ImgCount>{uploadInfo.imageUrl.length}/4</S.ImgCount>
        </S.CameraBox>
        {isCloseClicked && (
          <Photo
            onClickClose={onClickClose}
            onClickImg={onClickImg}
            inputRef={inputRef}
            handleImg={handleImg}
            uploadInfo={uploadInfo}
          />
        )}
      </div>
      <S.UplaodLabel>전단 행사 기간</S.UplaodLabel>
      <Calendar />
      <S.SubmitBtn>등록 요청</S.SubmitBtn>
    </S.UploadForm>
  );
};
export default Upload;
