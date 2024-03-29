import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BigFlyerCarousel from './BigFlyerCarousel';
import * as S from './FlyersCarousel.style';
import Slider from 'react-slick';
import Modal from '../Components/Modal/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FlyersCarousel = ({ list, detailMartList, handleImageClick }) => {
  const [showBigImage, setShowBigImage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  console.log('마트리스트이미지??', list.martFlyerImages);

  const onClickImage = index => {
    if (list.martFlyerImages === '0') {
      setShowModal(true);
    } else {
      setShowBigImage(true);
      setCurrentImageIndex(index);
      console.log('뜬다?', index);
    }
  };

  const onClickClose = prev => {
    setShowBigImage(!prev);
  };

  const handleModal = () => navigate('/upload');

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
  console.log('그냥캐러셀', list);

  return (
    <>
      <S.FlyerCarouselContainer>
        <S.MartSlider {...settings}>
          <S.FlyerImage
            onClick={() => {
              onClickImage(0);
            }}
            src={
              list.martFlyerImages.length <= 1
                ? '/images/flyernone.png'
                : list.martFlyerImages[0].imageUrl
            }
            alt="전단지"
          />
          <S.FlyerImage
            onClick={() => {
              onClickImage(1);
            }}
            src={
              list.martFlyerImages.length < 2
                ? '/images/flyernone.png'
                : list.martFlyerImages[1].imageUrl
            }
            alt="전단지"
          />
          <S.FlyerImage
            onClick={() => {
              onClickImage(2);
            }}
            src={
              list.martFlyerImages.length < 3
                ? '/images/flyernone.png'
                : list.martFlyerImages[2].imageUrl
            }
            alt="전단지"
          />
          <S.FlyerImage
            onClick={() => {
              onClickImage(3);
            }}
            src={
              list.martFlyerImages.length < 4
                ? '/images/flyernone.png'
                : list.martFlyerImages[3].imageUrl
            }
            alt="전단지"
          />
        </S.MartSlider>
      </S.FlyerCarouselContainer>
      {showBigImage && (
        <BigFlyerCarousel
          list={list}
          onClickClose={onClickClose}
          currentImageIndex={currentImageIndex}
        />
      )}
      {showModal && <Modal type="map" handleModal={handleModal} />}
    </>
  );
};

export default FlyersCarousel;
