import React, { useState, useEffect } from 'react';
import BigFlyerCarousel from './BigFlyerCarousel';
import * as S from './FlyersCarousel.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FlyersCarousel = ({ detailMartList, handleImageClick }) => {
  const [showBigImage, setShowBigImage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onClickImage = index => {
    setShowBigImage(true);
    setCurrentImageIndex(index);
    console.log('뜬다?', index);
  };

  const onClickClose = prev => {
    setShowBigImage(!prev);
  };
  console.log('flyercarousel', detailMartList);

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
    <>
      <S.FlyerCarouselContainer>
        <Slider {...settings}>
          {detailMartList.map((list, index) => {
            return (
              <div key={list.martId}>
                <S.FlyerImage
                  src={
                    list.martFlyerImages === '0'
                      ? './images/flyernone.png'
                      : list.martFlyerImages
                  }
                  alt="전단지"
                  onClick={() => {
                    onClickImage(index);
                  }}
                />
              </div>
            );
          })}

          {/* <S.FlyerImage
            onClick={() => {
              onClickImage(0);
            }}
            src="./images/flyernone.png"
            alt="전단지"
          />
          <S.FlyerImage
            onClick={() => {
              onClickImage(0);
            }}
            src="./images/flyernone.png"
            alt="전단지"
          />
          <S.FlyerImage
            onClick={() => {
              onClickImage(0);
            }}
            src="./images/flyernone.png"
            alt="전단지"
          />
          <S.FlyerImage
            onClick={() => {
              onClickImage(0);
            }}
            src="./images/flyernone.png"
            alt="전단지"
          /> */}

          {/* 여기는 새로한 로직 
          {detailMartList.map((item, index) => (
            <S.FlyerImage
              key={index}
              onClick={() => {
                onClickImage(index);
              }}
              src={
                    list.martFlyerImages === '0'
                      ? './images/flyernone.png'
                      : list.martFlyerImages[0].imageUrl
                  }
              alt={`전단지 ${index + 1}`}
            />
          ))} */}
        </Slider>
      </S.FlyerCarouselContainer>
      {showBigImage && (
        <BigFlyerCarousel
          onClickClose={onClickClose}
          currentImageIndex={currentImageIndex}
          imageUrls={detailMartList.map(item =>
            item.martFlyerImages === '0'
              ? './images/flyernone.png'
              : item.martFlyerImages.map(item => item.imageUrl)
          )}
        />
      )}
    </>
  );
};

export default FlyersCarousel;
