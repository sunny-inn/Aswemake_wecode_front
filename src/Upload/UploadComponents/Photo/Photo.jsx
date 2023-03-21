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
  const imageUrl = uploadInfo.imageUrl;

  console.log('imageUrl', imageUrl);

  return (
    <S.PhotoBox isOpen={true} ariaHideApp={false}>
      <div>
        <button onClick={onClickCamera}>x</button>
        <p>전단지 0면</p>
      </div>
      <S.Camera>
        <img alt="카메라 렌즈로 촬영하는 화면" onClick={onClickImg} />
        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          accept="image/*"
          onChange={handleImg}
        />
      </S.Camera>
      <S.BottomBox>
        <S.Album>
          <img alt="사진첩" onClick={onClickImg} />
          <input
            ref={inputRef}
            type="file"
            multiple
            hidden
            accept="image/*"
            onChange={handleImg}
          />
        </S.Album>
        <S.ImgBox>
          {/* <UploadedImg uploadInfo={uploadInfo} /> */}
          {imageUrl[0] ? (
            <img alt="flyer1" src={`${URL.createObjectURL(imageUrl[0])}`} />
          ) : (
            <div>1면</div>
          )}
          {imageUrl[1] ? (
            <img alt="flyer2" src={`${URL.createObjectURL(imageUrl[1])}`} />
          ) : (
            <div>2면</div>
          )}
          {imageUrl[2] ? (
            <img alt="flyer3" src={`${URL.createObjectURL(imageUrl[2])}`} />
          ) : (
            <div>3면</div>
          )}
          {imageUrl[3] ? (
            <img alt="flyer4" src={`${URL.createObjectURL(imageUrl[3])}`} />
          ) : (
            <div>4면</div>
          )}
        </S.ImgBox>
      </S.BottomBox>
    </S.PhotoBox>
  );
};

export default Photo;
