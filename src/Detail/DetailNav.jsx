import * as S from './DetailNav.style';
import React from 'react';

const DetailNav = () => {
  return (
    <S.DetailNavContainer>
      <S.BeforeIcon src="./images/goBefore.png" alt="뒤로가기" />
      <S.DetailNavTitle>마트 정보</S.DetailNavTitle>
    </S.DetailNavContainer>
  );
};

export default DetailNav;
