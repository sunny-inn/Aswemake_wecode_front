import React from 'react';
import * as S from './BigFlyerCarousel.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BigFlyerCarousel = ({
  imageUrls,
  currentImageIndex,
  onClickClose,
  list,
}) => {
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
  console.log('mart리스트!!', list);

  return (
    <S.BigCarouselContainer>
      <S.BigCarouselContentBox>
        <S.CloseButtonBox>
          <S.ModalCloseImg
            src="/images/closeImg.png"
            onClick={onClickClose}
            alt="닫기"
          />
        </S.CloseButtonBox>

        <S.BigFlyerImgBox>
          <Slider {...settings}>
            {list.martFlyerImages &&
              list.martFlyerImages.map((image, index) => (
                <S.FlyerImage key={index} src={image.imageUrl} alt="전단지" />
              ))}
            {!list.martFlyerImages && (
              <S.FlyerImage src="/images/flyernone.png" alt="전단지" />
            )}
          </Slider>
        </S.BigFlyerImgBox>
      </S.BigCarouselContentBox>
    </S.BigCarouselContainer>
  );
};

export default BigFlyerCarousel;
