import React from 'react';
import * as S from './UploadedImg.style';

const UploadedImg = ({ uploadInfo }) => {
  return (
    <div>
      {FLYERS_OPTIONS(({ id }) => {
        <div key={id}>
          <img alt="전단지 이미지" />
          {uploadInfo.imageUrl}
        </div>;
      })}
    </div>
  );
};

export default UploadedImg;

const FLYERS_OPTIONS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
