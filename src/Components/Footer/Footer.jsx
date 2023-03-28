import React, { useState } from 'react';
import * as S from './Footer.style';

const Footer = () => {
  const [clickedImages, setClickedImages] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const handleClicked = index => {
    setClickedImages({ ...clickedImages, [index]: !clickedImages[index] });
  };

  return (
    <S.FooterContainer>
      <S.FooterUl>
        <div>
          <S.FooterList onClick={() => handleClicked(0)}>
            <S.FooterImg
              src={
                clickedImages[0]
                  ? FOOTER_LIST[0].checkedImg
                  : FOOTER_LIST[0].defaultImg
              }
            />
            {FOOTER_LIST[0].title}
          </S.FooterList>
        </div>
        <div>
          <S.FooterList onClick={() => handleClicked(1)}>
            <S.FooterImg
              src={
                clickedImages[1]
                  ? FOOTER_LIST[1].checkedImg
                  : FOOTER_LIST[1].defaultImg
              }
            />
            {FOOTER_LIST[1].title}
          </S.FooterList>
        </div>
        <div>
          <S.FooterList onClick={() => handleClicked(2)}>
            <S.FooterImg
              src={
                clickedImages[2]
                  ? FOOTER_LIST[2].checkedImg
                  : FOOTER_LIST[2].defaultImg
              }
            />
            {FOOTER_LIST[2].title}
          </S.FooterList>
        </div>
        <div>
          <S.FooterList onClick={() => handleClicked(3)}>
            <S.FooterImg
              src={
                clickedImages[3]
                  ? FOOTER_LIST[3].checkedImg
                  : FOOTER_LIST[3].defaultImg
              }
            />
            {FOOTER_LIST[3].title}
          </S.FooterList>
        </div>
      </S.FooterUl>
    </S.FooterContainer>
  );
};

export default Footer;

const FOOTER_LIST = [
  {
    id: 1,
    title: '홈',
    defaultImg: './images/storefront.png',
    checkedImg: './images/store.png',
  },
  {
    id: 2,
    title: '자주가요',
    defaultImg: './images/favorite.png',
    checkedImg: './images/colorFavorite.png',
  },
  {
    id: 3,
    title: '전단 등록',
    defaultImg: './images/upload.png',
    checkedImg: './images/colorUpload.png',
  },
  {
    id: 4,
    title: '마이페이지',
    defaultImg: './images/mypage.png',
    checkedImg: './images/colorMypage.png',
  },
];
