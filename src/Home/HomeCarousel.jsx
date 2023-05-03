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
  const [checked, setChecked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const smIndex = homeMartList.indexOf(selectedMart);
  // const selectedMartList = selectedMart ? homeMartList : [];
  const selectedMartList = selectedMart
    ? homeMartList.map(mart => ({
        ...mart,
        checked: false, // 새로운 프로퍼티인 checked를 추가하고, 기본값으로 false를 설정합니다.
      }))
    : [];
  const navigate = useNavigate();
  const params = useParams();

  const handleFavorite = () => {
    const newSelectedMartList = selectedMartList.map(mart => {
      if (mart.martId === currentId) {
        return {
          ...mart,
          checked: !mart.checked, // 현재 마트의 checked 값을 변경합니다.
        };
      } else {
        return mart;
      }
    });
    setSelectedMartList(newSelectedMartList);
    onClickFavorite();
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
    })
      .then(response => {
        if (response.ok) {
          console.log(successMsg);
        } else {
          console.error(errorMsg);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onClickFavorite = () => {
    const newFavoriteCheck = isFavorite ? 0 : 1;
    setIsFavorite(!isFavorite);
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
      handleModal();
    } else {
      navigate(`/detail/${id}`);
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
                      mart.martFlyerImages.length === '0'
                        ? '/images/flyernone.png'
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
                        mart.checked
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
