import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './HomeCarousel.style';
import CarouselContent from './CarouselContent';
import Slider from 'react-slick';
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
  const params = useParams();

  // const handleFavorite = id => {
  //   const newSelectedMartList = selectedMartList.map(mart => {
  //     if (mart.martId === id) {
  //       return {
  //         ...mart,
  //         checked: !mart.checked,
  //         isFavorite: !mart.isFavorite, // 수정된 부분
  //       };
  //     } else {
  //       return mart;
  //     }
  //   });
  //   setSelectedMartList(newSelectedMartList);
  // };

  // const sendFavoriteRequest = (favoriteCheck, successMsg, errorMsg, token) => {
  //   fetch(`https://flyers.qmarket.me/api/favorite/${params.id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: token,
  //     },
  //     body: JSON.stringify({ favoriteCheck }),
  //   }).then(response => {
  //     if (response.ok) {
  //       console.log(successMsg);
  //     } else {
  //       console.error(errorMsg);
  //     }
  //   });
  // };

  // const onClickFavorite = () => {
  //   console.log('클릭', isFavorite);
  //   setIsFavorite(prev => !prev);

  // const selectedMart = selectedMartList.find(mart => mart.martId === id);

  // const newFavoriteCheck = selectedMart.isFavorite ? 0 : 1; // 수정된 부분 없어도될것같은데?
  // const newSelectedMartList = selectedMartList.map(mart => {
  //   if (mart.martId === id) {
  //     return {
  //       ...mart,
  //       isFavorite: !mart.isFavorite,
  //     };
  //   } else {
  //     return mart;
  //   }
  // });
  // setSelectedMartList(newSelectedMartList);
  // sendFavoriteRequest(
  //   newFavoriteCheck,
  //   'favorite updated successfully',
  //   'failed to update favorite',
  //   token
  // );
  // };

  // const afterhandleModal = () => {
  //   navigate(`/detail/${selectedMart.martId}`);
  // };

  console.log('homecarousel');

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
