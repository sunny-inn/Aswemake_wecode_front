import React, { useEffect, useState } from 'react';
import * as S from './CarouselContent.style';

const CarouselContent = ({ mart, onClickMartItem }) => {
  const [isClicked, setIsClicked] = useState(mart.favoriteCheck);
  const token = localStorage.getItem('token');
  console.log(token);

  console.log('ggg', mart);

  useEffect(() => {
    console.log('isClicked');
  }, [isClicked]);

  const onClickFavorite = () => {
    token &&
      fetch(`https://flyers.qmarket.me/api/favorite/${mart.martId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
      }).then(response => {
        if (response.ok) {
          console.log('isClicked', mart.favoriteCheck);
        } else {
          console.error('errorMsg');
        }
      });
  };

  // console.log('carousel', isClicked);

  return (
    <S.CarouselBox>
      {mart && (
        <>
          <div>
            <S.CarouselImg
              src={
                mart.martFlyerImages === '0'
                  ? 'images/flyernone.png'
                  : mart.martFlyerImages[0].imageUrl
              }
              alt="전단지"
              onClick={onClickMartItem(mart.martId)}
            />
          </div>
          <S.CarouselContent>
            <S.MartTitleLi>
              <S.MartTitle onClick={onClickMartItem(mart.martId)}>
                {mart.martName}
              </S.MartTitle>
              <S.StarImg
                src={
                  isClicked === '1'
                    ? 'images/clickedFavorite.png'
                    : 'images/favorite.png'
                }
                onClick={() => onClickFavorite({ id: mart.martId })}
              />
            </S.MartTitleLi>
            <S.MartContentBox>
              <S.AddressAndPhone onClick={onClickMartItem(mart.martId)}>
                {mart.martNumberAddress}
              </S.AddressAndPhone>
              <S.AddressAndPhone>{mart.martPhoneNumber}</S.AddressAndPhone>
            </S.MartContentBox>
          </S.CarouselContent>
        </>
      )}
    </S.CarouselBox>
  );
};

export default CarouselContent;
