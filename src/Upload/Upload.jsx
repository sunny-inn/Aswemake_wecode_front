import React, { useState, useRef, useEffect } from 'react';
import * as S from './Upload.style';
import Period from './UploadComponents/Period/Period';
import Tutorial from './UploadComponents/Tutorial/Tutorial';
import Photo from './UploadComponents/Photo/Photo';
import Datepicker from './UploadComponents/Datepicker/Datepicker';

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
  //FIXME: img가 배열에 쌓이도록 구현해야 함
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
    <S.UploadBox onSubmit={onSubmitFlyers}>
      <label>마트 전화 번호</label>
      <S.UploadInput
        type="text"
        value={phoneNumber}
        placeholder='전화번호를 "-"없이 입력해주세요'
        onChange={handlePhoneNumber}
      />
      <label>마트 이름</label>
      <S.UploadInput
        value={filteredMartName}
        placeholder="마트 이름을 입력해주세요."
        readOnly
      />
      <label>마트 주소</label>
      <S.UploadInput
        value={filteredMartAddress}
        placeholder="주소를 입력해주세요."
        readOnly
      />
      <label>사진 등록</label>
      <button onClick={onClickTutorial}>등록 방법 확인</button>
      {isTutorialClicked && <Tutorial onClickTutorial={onClickTutorial} />}
      <div>
        <S.CameraImg alt="camera" onClick={onClickClose} />
        <S.ImgCount>{uploadInfo.imageUrl ? '4' : '0'}/4</S.ImgCount>
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
      <label>전단 행사 기간</label>
      {/* <Period
        year={year}
        month={month}
        date={date}
        handleMonth={handleMonth}
        handleDate={handleDate}
      /> */}
      <Datepicker />
      <button>등록 요청</button>
    </S.UploadBox>
  );
};
export default Upload;
