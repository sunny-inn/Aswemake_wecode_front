import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomeCarousel.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeCarousel = ({
  homeMartList,
  selectedMart,
  handleModal,
  onClickDetailPortal,
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
  const navigate = useNavigate();

  const handleFavorite = () => {
    setChecked(prevChecked => !prevChecked);
  };

  const onClickMartItem = id => e => {
    onClickDetailPortal(id);
    handleModal();
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
        onSwipe={e => changeCenterByCarousel(currentSlide, e)}
      >
        {selectedMartList &&
          selectedMartList.map(mart => (
            <S.MartBox key={mart.martId}>
              <S.CarouselBox>
                <div>
                  <S.CarouselImg
                    src="./images/thirdRec.png"
                    alt="전단지"
                    onClick={onClickMartItem(mart.martId)}
                  />
                </div>
                <S.CarouselContent>
                  <S.MartTitleLi>
                    <S.MartTitle>{mart.martName}</S.MartTitle>
                    <S.StarImg
                      src={
                        checked
                          ? './images/clickedFavorite.png'
                          : './images/favorite.png'
                      }
                      onClick={() => handleFavorite(mart.martId)}
                    />
                  </S.MartTitleLi>
                  <S.MartContentBox>
                    <li>주소 : {mart.martNumberAddress}</li>
                    <li>연락처 : {mart.martPhoneNumber}</li>
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
