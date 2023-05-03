import React, { useState } from 'react';
import * as S from './FavoriteList.style';

const FavoriteList = ({ addedFavoriteList }) => {
  const [checked, setChecked] = useState(false);

  const handleFavorite = () => {
    setChecked(prevChecked => !prevChecked);
  };
  console.log('favoriteList1', addedFavoriteList);
  console.log('favoriteList2', addedFavoriteList[0]);

  return (
    <S.FavoriteListContainer>
      {addedFavoriteList.map((list, i) => (
        <React.Fragment key={i}>
          {list.map(item => (
            <div key={item.martId}>
              <S.MartBox>
                <S.CarouselBox>
                  <div>
                    <S.CarouselImg
                      src={
                        item.martFlyerImage === '0'
                          ? '/images/flyernone.png'
                          : item.martFlyerImage[0]
                      }
                      alt="전단지"
                    />
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
                      <li>{item.martAddress}</li>
                      <li>{item.martPhoneNumber}</li>
                    </S.MartContentBox>
                  </S.CarouselContent>
                </S.CarouselBox>
              </S.MartBox>
            </div>
          ))}
        </React.Fragment>
      ))}
    </S.FavoriteListContainer>
  );
};

export default FavoriteList;
