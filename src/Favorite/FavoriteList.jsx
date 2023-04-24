import React, { useState } from 'react';
import * as S from './FavoriteList.style';

const FavoriteList = () => {
  const [checked, setChecked] = useState(false);

  const handleFavorite = () => {
    setChecked(prevChecked => !prevChecked);
  };
  return (
    <S.FavoriteListContainer>
      <div>
        <S.MartBox>
          <S.CarouselBox>
            <div>
              <S.CarouselImg
                src="./images/thirdRec.png"
                alt="전단지"
                // onClick={}
              />
            </div>
            <S.CarouselContent>
              <S.MartTitleLi>
                <S.MartTitle>이름</S.MartTitle>
                <S.StarImg
                  src={
                    checked
                      ? './images/favorite.png'
                      : './images/clickedFavorite.png'
                  }
                  onClick={handleFavorite}
                />
              </S.MartTitleLi>
              <S.MartContentBox>
                <li>주소 :</li>
                <li>연락처 : </li>
              </S.MartContentBox>
            </S.CarouselContent>
          </S.CarouselBox>
        </S.MartBox>
      </div>
    </S.FavoriteListContainer>
  );
};

export default FavoriteList;
