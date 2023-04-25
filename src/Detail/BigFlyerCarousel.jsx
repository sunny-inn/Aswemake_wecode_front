import React from 'react';
import * as S from './BigFlyerCarousel.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BigFlyerCarousel = ({ imageUrls, currentImageIndex, onClickClose }) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImageIndex,
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
    <S.BigCarouselContainer>
      <S.BigCarouselContentBox>
        <S.CloseButtonBox>
          <S.ModalCloseImg
            src="./images/closeImg.png"
            onClick={onClickClose}
            alt="닫기"
          />
        </S.CloseButtonBox>

        <Slider {...settings}>
          {imageUrls.map((imageUrls, index) => (
            <S.FlyerImage
              key={index}
              src={imageUrls}
              alt={`전단지 ${index + 1}`}
            />
          ))}
        </Slider>
      </S.BigCarouselContentBox>
    </S.BigCarouselContainer>
  );
};

export default BigFlyerCarousel;