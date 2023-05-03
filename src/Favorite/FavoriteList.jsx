import React, { useState, useEffect } from 'react';
import * as S from './FavoriteList.style';

const FavoriteList = ({ addedFavoriteList }) => {
  const [checked, setChecked] = useState(false);
  console.log('FavoriteList', addedFavoriteList);

  const handleFavorite = martId => {
    setChecked(prevChecked => !prevChecked);
    const token = localStorage.getItem('token');
    fetch('https://flyers.qmarket.me/api/favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({ martId, checked }),
    })
      .then(response => {
        if (response.ok) {
          console.log(response.ok);
        } else {
          console.error(response.err);
        }
      })
      .catch(error => {
        console.error(error);
      });
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
                    onClick={() => handleFavorite(item.martId)}
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
