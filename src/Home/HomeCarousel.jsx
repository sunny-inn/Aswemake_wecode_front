import React, { useEffect, useState } from 'react';
import * as S from './HomeCarousel.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeCarousel = ({
  homeMartList,
  selectedMart,
  handleModal,
  changeCenterByCarousel,
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
  const [checked, setChecked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const smIndex = homeMartList.indexOf(selectedMart);
  const selectedMartList = selectedMart ? homeMartList : [];

  const handleFavorite = () => {
    setChecked(prevChecked => !prevChecked);
  };

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(smIndex);
    }
  }, [smIndex]);

  return (
    <S.CarouselWholeContainer>
      <Slider
        {...settings}
        ref={setSlider}
        onSwipe={() => changeCenterByCarousel(currentSlide)}
      >
        {selectedMartList &&
          selectedMartList.map(mart => (
            <S.MartBox key={mart.id}>
              <S.CarouselBox>
                <div>
                  <S.CarouselImg
                    src="./images/thirdRec.png"
                    alt="전단지"
                    onClick={handleModal}
                  />
                </div>
                <S.CarouselContent>
                  <S.MartTitleLi>
                    <S.MartTitle>{mart.name}</S.MartTitle>
                    <S.StarImg
                      src={
                        checked
                          ? './images/clickedFavorite.png'
                          : './images/favorite.png'
                      }
                      onClick={() => handleFavorite(mart.id)}
                    />
                  </S.MartTitleLi>
                  <S.MartContentBox>
                    <li>주소 : {mart.address}</li>
                    <li>연락처 : {mart.phoneNumber}</li>
                  </S.MartContentBox>
                </S.CarouselContent>
              </S.CarouselBox>
            </S.MartBox>
          ))}
      </Slider>
    </S.CarouselWholeContainer>
  );
};

export default HomeCarousel;
