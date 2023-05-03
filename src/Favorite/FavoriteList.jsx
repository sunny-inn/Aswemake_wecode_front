import React, { useState } from 'react';
import * as S from './FavoriteList.style';

const FavoriteList = ({ addedFavoriteList }) => {
  const [checked, setChecked] = useState(false);
  const [imageStates, setImageStates] = useState(
    Array(addedFavoriteList.length).fill(false)
  );

  const handleFavorite = index => {
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <S.FavoriteListContainer>
      {addedFavoriteList.map((list, i) => (
        <React.Fragment key={i}>
          {list.map((item, j) => (
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
                          imageStates[i * list.length + j]
                            ? '/images/favorite.png'
                            : '/images/clickedFavorite.png'
                        }
                        onClick={() => handleFavorite(i * list.length + j)}
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
