import React, { useState } from 'react';
import * as S from './FavoriteList.style';

const FavoriteList = ({ addedFavoriteList }) => {
  const [checked, setChecked] = useState(false);

  const handleFavorite = () => {
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <S.FavoriteListContainer>
      {addedFavoriteList.map(item => (
        <div key={item.id}>
          <S.MartBox>
            <S.CarouselBox>
              <div>
                <S.CarouselImg src={item.martFlyerImage} alt="전단지" />
              </div>
              <S.CarouselContent>
                <S.MartTitleLi>
                  <S.MartTitle>{item.martName}</S.MartTitle>
                  <S.StarImg
                    src={
                      checked
                        ? '/images/favorite.png'
                        : '/images/clickedFavorite.png'
                    }
                    onClick={handleFavorite}
                  />
                </S.MartTitleLi>
                <S.MartContentBox>
                  <li>주소 :{item.martAddress}</li>
                  <li>연락처 : {item.nartPhoneNumber}</li>
                </S.MartContentBox>
              </S.CarouselContent>
            </S.CarouselBox>
          </S.MartBox>
        </div>
      ))}
    </S.FavoriteListContainer>
  );
};

export default FavoriteList;
