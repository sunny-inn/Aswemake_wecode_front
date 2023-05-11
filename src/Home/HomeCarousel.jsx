import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomeCarousel.style';
import CarouselContent from './CarouselContent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeCarousel = ({
  homeMartList,
  selectedMart,
  handleModal,
  onClickDetailPortal,
  changeCenterByCarousel,
  setSelectedMartList,
  handleSecModal,
  currentId,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25px',
    draggable: true,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const smIndex = homeMartList.indexOf(selectedMart);
  const navigate = useNavigate();

  const onClickMartItem = id => e => {
    const selectedMart = homeMartList.find(mart => mart.martId === id);
    if (selectedMart && selectedMart.martFlyerImages === '0') {
      handleModal();
      // afterhandleModal();
    } else {
      // navigate(`/detail/${id}`);
      navigate(`/detail/${selectedMart.martId}`);
    }
  };

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(smIndex);
    }
  }, [smIndex]);

  return (
    <S.CarouselWholeContainer
      {...settings}
      ref={setSlider}
      onSwipe={e => changeCenterByCarousel(currentSlide, e)}
    >
      {homeMartList[0].martId &&
        homeMartList.map(mart => (
          <CarouselContent
            mart={mart}
            key={mart.id}
            onClickMartItem={onClickMartItem}
          />
        ))}
    </S.CarouselWholeContainer>
  );
};

export default HomeCarousel;
