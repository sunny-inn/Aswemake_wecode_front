import React, { useState, useRef } from 'react';
import * as S from './Upload.style';
import Period from './UploadComponents/Period/Period';
import Tutorial from './UploadComponents/Tutorial/Tutorial';
import Photo from './UploadComponents/Photo/Photo';

const Upload = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [marts, setMarts] = useState({});
  const [isTutorialClicked, setIsTutorialClicked] = useState(false);
  const [isCameraClicked, setIsCameraClicked] = useState(false);
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  //FIXME: 전화번호 맞는 애를 패치해오기
  // useEffect(() => {
  //   fetch(`${API}`, {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => phoneNumber && (phoneNumber === marts.phoneNumber) ? (
  //       setMarts(data.data));
  // }, [phoneNumber]);

  const onClickCamera = () => setIsCameraClicked(prev => !prev);

  const onClickTutorial = () => {
    setIsTutorialClicked(prev => !prev);
  };

  const inputRef = useRef(null);

  // 이미지 넣기
  const onClickImg = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  // 이미지 변경됐을 때 실제 스테이트에 넣는 함수
  const handleImg = ({ target: { files } }) => {
    setUploadInfo(files[0]);
  };

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

  const [uploadInfo, setUploadInfo] = useState({
    martId: marts.id,
    imageUrl: [],
    endDate,
  });

  const uploadForm = new FormData();
  uploadForm.append('imageUrl', uploadInfo.imageUrl);

  const onSubmitFlyers = e => {
    e.preventDefault();

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

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
      <S.UploadInput value={marts.name} readOnly />
      <label>마트 주소</label>
      <S.UploadInput value={marts.roadNameAddress} readOnly />
      <label>사진 등록</label>
      <button onClick={onClickTutorial}>등록 방법 확인</button>
      {isTutorialClicked && <Tutorial onClickTutorial={onClickTutorial} />}
      <div>
        <S.CameraImg alt="camera" onClick={onClickCamera} />
        <S.ImgCount>{uploadInfo.imageUrl ? '4' : '0'}/4</S.ImgCount>
        {isCameraClicked && (
          <Photo
            onClickCamera={onClickCamera}
            onClickImg={onClickImg}
            inputRef={inputRef}
            handleImg={handleImg}
            uploadInfo={uploadInfo}
          />
        )}
      </div>
      <label>전단 행사 기간</label>
      <Period
        year={year}
        month={month}
        date={date}
        handleMonth={handleMonth}
        handleDate={handleDate}
      />
      <button>등록 요청</button>
    </S.UploadBox>
  );
};
export default Upload;
