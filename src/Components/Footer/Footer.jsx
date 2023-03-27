import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterUl>
        {FOOTER_LIST.map(footer => {
          return (
            <S.FooterList key={footer.id}>
              <S.FooterImg src={footer.titleImg} alt="img" />
              {footer.title}
            </S.FooterList>
          );
        })}
      </S.FooterUl>
    </S.FooterContainer>
  );
};

export default Footer;

const FOOTER_LIST = [
  {
    id: 1,
    title: '홈',
  },
  {
    id: 2,
    title: '자주가요',
  },
  {
    id: 3,
    title: '전단 등록',
  },
  {
    id: 4,
    title: '마이페이지',
  },
];
