import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Footer.style';

const Footer = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const navigate = useNavigate();

  const goToNav = item => {
    navigate(`${item.goTo}`);
  };

  const handleClicked = index => {
    setClickedIndex(index);
  };

  return (
    <S.FooterContainer>
      <S.FooterUl>
        {FOOTER_LIST.map((item, index) => (
          <div key={index}>
            <S.FooterList
              onClick={() => {
                handleClicked(index);
                goToNav(item);
              }}
              isClicked={index === clickedIndex}
            >
              <S.FooterImg
                onClick={goToNav}
                src={index === clickedIndex ? item.checkedImg : item.defaultImg}
              />
              <S.FooterTitle> {item.title}</S.FooterTitle>
            </S.FooterList>
          </div>
        ))}
      </S.FooterUl>
    </S.FooterContainer>
  );
};

export default Footer;

const FOOTER_LIST = [
  {
    id: 1,
    title: '홈',
    defaultImg: './images/store.png',
    checkedImg: './images/storefront.png',
    goTo: '/home',
  },
  {
    id: 2,
    title: '자주가요',
    defaultImg: './images/favorite.png',
    checkedImg: './images/colorFavorite.png',
    goTo: '/favorite',
  },
  {
    id: 3,
    title: '전단 등록',
    defaultImg: './images/upload.png',
    checkedImg: './images/colorUpload.png',
    goTo: '/upload',
  },
  {
    id: 4,
    title: '마이페이지',
    defaultImg: './images/mypage.png',
    checkedImg: './images/colorMypage.png',
    goTo: '/mypage',
  },
];
