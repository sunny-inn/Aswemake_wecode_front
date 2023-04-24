import React from 'react';
import * as S from './FavoriteNav.style';

const FavoriteNav = () => {
  return (
    <S.FavoriteNavContainer>
      <S.BeforeIcon src="./images/goBefore.png" alt="뒤로가기" />
      <S.FavoriteNavTitle>자주가요</S.FavoriteNavTitle>
    </S.FavoriteNavContainer>
  );
};

export default FavoriteNav;
