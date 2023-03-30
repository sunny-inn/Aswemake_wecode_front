import * as S from './FavoriteBtn.style';

const FavoriteBtn = () => {
  return (
    <S.FavoriteButton>
      <S.FavoriteContentBox>
        <S.MartFavoriteIcon src="./images/favorite.png" alt="자주가요" />
        <S.FavoriteText>자주가요</S.FavoriteText>
      </S.FavoriteContentBox>
    </S.FavoriteButton>
  );
};

export default FavoriteBtn;
