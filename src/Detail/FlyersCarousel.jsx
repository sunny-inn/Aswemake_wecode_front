import React, { useState, useEffect } from 'react';
import * as S from './FlyersCarousel.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FlyersCarousel = ({ detailMartList }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.FlyerCarouselContainer>
      <Slider {...settings}>
        {/* {detailMartList.map(list => {
          return (
            <div key={list.martId}>
              <S.FlyerImage
                src={
                  list.martFlyerImages === '0'
                    ? './images/flyernone.png'
                    : list.martFlyerImages[0].imageUrl
                }
                alt="전단지"
              />
            </div>
          );
        })} */}
        <S.FlyerImage src="./images/flyernone.png" alt="전단지" />
        <S.FlyerImage src="./images/flyernone.png" alt="전단지" />
        <S.FlyerImage src="./images/flyernone.png" alt="전단지" />
        <S.FlyerImage src="./images/flyernone.png" alt="전단지" />
      </Slider>
    </S.FlyerCarouselContainer>
  );
};

export default FlyersCarousel;
