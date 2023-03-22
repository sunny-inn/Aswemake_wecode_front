import React, { useState } from 'react';
import * as S from './Upload.style';

const Upload = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [martInfo, setMartInfo] = useState({});

  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  //FIXME: 전화번호 맞는 애를 패치해오기
  // useEffect(() => {
  //   fetch(`${API}`, {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => phoneNumber && (phoneNumber === martInfo.phoneNumber) ? (
  //       setMartInfo(data.data));
  // }, [phoneNumber]);

  const [uploadInfo, setUploadInfo] = useState({
    img1: '',
  });
  const uploadForm = new FormData();
  uploadForm.append('', uploadInfo.img1);

  return (
    <S.UploadBox>
      <label>마트 전화 번호</label>
      <input
        type="text"
        value={phoneNumber}
        placeholder='전화번호를 "-"없이 입력해주세요'
        onChange={handlePhoneNumber}
      />
      <label>마트 이름</label>
      <input readOnly />
      <label>마트 주소</label>
      <input readOnly />
      <label>사진 등록</label>
      <button>등록 방법 확인</button>
      <img alt="camera" />
      <button>등록 요청</button>
    </S.UploadBox>
  );
};
export default Upload;
