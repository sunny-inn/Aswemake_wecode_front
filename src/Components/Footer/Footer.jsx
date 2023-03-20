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
    titleImg:
      'https://thenounproject.com/api/private/icons/1560057/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkGDcyjeNZFDnu1oaRKH-NgutpXf_yu-tCAytOq-fDokwgh4l1WpK3iSlYaGOGCD-1r9ilQZBL7ZMLzr9vUXDhp41RUA%3D%3D',
  },
  {
    id: 2,
    title: '자주가요',
    titleImg:
      'https://thenounproject.com/api/private/icons/2026857/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkGDcyjeNZFDnu1oaRKH-NgutpXf_yu-tCAytOq-fDokwgh4l1WpK3iSlYaGOGCD-1r9ilQZBL7ZMLzr9vUXDhp41RUA%3D%3D',
  },
  {
    id: 3,
    title: '전단 등록',
    titleImg:
      'https://thenounproject.com/api/private/icons/3850502/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkGDcyjeNZFDnu1oaRKH-NgutpXf_yu-tCAytOq-fDokwgh4l1WpK3iSlYaGOGCD-1r9ilQZBL7ZMLzr9vUXDhp41RUA%3D%3D',
  },
  {
    id: 4,
    title: '마이페이지',
    titleImg:
      'https://thenounproject.com/api/private/icons/347105/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkGDcyjeNZFDnu1oaRKH-NgutpXf_yu-tCAytOq-fDokwgh4l1WpK3iSlYaGOGCD-1r9ilQZBL7ZMLzr9vUXDhp41RUA%3D%3D',
  },
];
