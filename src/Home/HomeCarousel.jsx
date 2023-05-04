import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const [isFavorite, setIsFavorite] = useState(false);
  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const smIndex = homeMartList.indexOf(selectedMart);
  const selectedMartList = selectedMart
    ? homeMartList.map(mart => ({
        ...mart,
        checked: false,
        isFavorite: false, // 수정된 부분
      }))
    : [];
  const navigate = useNavigate();
  const params = useParams();

  const handleFavorite = id => {
    const newSelectedMartList = selectedMartList.map(mart => {
      if (mart.martId === id) {
        return {
          ...mart,
          checked: !mart.checked,
          isFavorite: !mart.isFavorite, // 수정된 부분
        };
      } else {
        return mart;
      }
    });
    setSelectedMartList(newSelectedMartList);
  };

  const token = localStorage.getItem('token');
  const sendFavoriteRequest = (favoriteCheck, successMsg, errorMsg, token) => {
    fetch(`https://flyers.qmarket.me/api/favorite/${params.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({ favoriteCheck }),
    }).then(response => {
      if (response.ok) {
        console.log(successMsg);
      } else {
        console.error(errorMsg);
      }
    });
  };

  const onClickFavorite = id => {
    const selectedMart = selectedMartList.find(mart => mart.martId === id);
    const newFavoriteCheck = selectedMart.isFavorite ? 0 : 1; // 수정된 부분
    const newSelectedMartList = selectedMartList.map(mart => {
      if (mart.martId === id) {
        return {
          ...mart,
          isFavorite: !mart.isFavorite,
        };
      } else {
        return mart;
      }
    });
    setSelectedMartList(newSelectedMartList);
    sendFavoriteRequest(
      newFavoriteCheck,
      'favorite updated successfully',
      'failed to update favorite',
      token
    );
  };

  const onClickMartItem = id => e => {
    const selectedMart = selectedMartList.find(mart => mart.martId === id);
    if (selectedMart && selectedMart.martFlyerImages === '0') {
      // handleModal();
      navigate(`/detail/${selectedMart.martId}`);
    } else {
      // navigate(`/detail/${id}`);
      // navigate(`/detail/${selectedMart.martId}`);
    }
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
                    src={
                      mart.martFlyerImages === '0'
                        ? './images/flyernone.png'
                        : mart.martFlyerImages[0].imageUrl
                    }
                    alt="전단지"
                    onClick={onClickMartItem(mart.martId)}
                  />
                </div>
                <S.CarouselContent>
                  <S.MartTitleLi>
                    <S.MartTitle>{mart.martName}</S.MartTitle>
                    <S.StarImg
                      src={
                        mart.isFavorite
                          ? './images/clickedFavorite.png'
                          : './images/favorite.png'
                      }
                      onClick={() => onClickFavorite(mart.martId)}
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
