import React from 'react';
import * as S from './DetailBtn.style';

const DetailBtn = ({ isFavorite, onClickFavorite, type, onClickShare }) => {
  const buttonList = {
    share: SHARE_BUTTON,
    favorite: FAVORITE_BUTTON,
  };
  return (
    <S.FavoriteButton onClick={onClickFavorite}>
      <S.FavoriteContentBox>
        {/* <S.MartFavoriteIcon src="./images/favorite.png" alt="자주가요" />
         */}
        <S.MartFavoriteIcon
          src={
            isFavorite
              ? './images/clickedFavorite.png'
              : buttonList[type].imgSrc
          }
          alt="자주가요"
        />
        <S.FavoriteText>{buttonList[type].title}</S.FavoriteText>
      </S.FavoriteContentBox>
    </S.FavoriteButton>
  );
};

export default DetailBtn;

const SHARE_BUTTON = {
  imgSrc: './images/share.png',
  title: '공유하기',
};

const FAVORITE_BUTTON = {
  imgSrc: './images/favorite.png',
  title: '자주가요',
};
