import React from 'react';
import UploadedImg from '../UploadedImg/UploadedImg';
import * as S from './Photo.style';

const Photo = ({
  onClickCamera,
  onClickImg,
  inputRef,
  handleImg,
  uploadInfo,
}) => {
  return (
    <S.PhotoBox isOpen={true} ariaHideApp={false}>
      <div>
        <button onClick={onClickCamera}>x</button>
        <p>전단지 0면</p>
      </div>
      <img alt="카메라 렌즈로 촬영하는 화면" onClick={onClickImg} />
      <div>
        <img alt="사진첩" onClick={onClickImg} />
        <input
          ref={inputRef}
          type="file"
          hidden
          accept="image/*"
          onChange={handleImg}
        />
        <div>
          <UploadedImg uploadInfo={uploadInfo} />
          {/* <img src={URL.createObjectURL(uploadInfo.imageUrl[0])} alt="flyers" />
          <img src={URL.createObjectURL(uploadInfo.imageUrl[1])} alt="flyers" />
          <img src={URL.createObjectURL(uploadInfo.imageUrl[2])} alt="flyers" />
          <img src={URL.createObjectURL(uploadInfo.imageUrl[3])} alt="flyers" /> */}
        </div>
      </div>
    </S.PhotoBox>
  );
};

export default Photo;
