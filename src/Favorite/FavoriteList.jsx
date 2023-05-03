import React, { useState } from 'react';
import * as S from './FavoriteList.style';

const FavoriteList = ({ addedFavoriteList }) => {
  const [checked, setChecked] = useState(false);
  console.log('여기는 자주가요데이터', addedFavoriteList);
  console.log('여기는 자주가요데이터1', addedFavoriteList[0]);
  console.log('여기는 자주가요데이터2', addedFavoriteList.martId);
  console.log('여기는 자주가요데이터3', addedFavoriteList.data);

  const handleFavorite = () => {
    setChecked(prevChecked => !prevChecked);
  };
  return (
    <S.FavoriteListContainer>
      {addedFavoriteList.map(item => (
        <div key={item.martId}>
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
