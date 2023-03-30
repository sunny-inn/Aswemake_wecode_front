import React from 'react';
import * as S from './HomeCarousel.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeCarousel = ({ homeMartList, selectedMart, handleModal }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '25px',
    dot: false,
  };

  const smIndex = homeMartList.indexOf(selectedMart);
  const newArray = [
    ...homeMartList.slice(0, 1),
    ...homeMartList.slice(1),
    selectedMart,
  ];

  if (smIndex > -1) {
    const newArray = [
      ...homeMartList.slice(0, smIndex),
      ...homeMartList.slice(smIndex + 1),
      selectedMart,
    ];
  }
  const selectedMartList = selectedMart ? newArray : [];
  return (
    <S.CarouselWholeContainer>
      <Slider {...settings}>
        {selectedMartList.map(martlist => (
          <S.MartBox key={martlist.id} onClick={handleModal}>
            <S.CarouselBox>
              <div>
                <S.CarouselImg alt="전단지" />
              </div>
              <S.CarouselContent>
                <li>{martlist.name}</li>
                <li>
                  <S.StarImg src="./images/starIcon.png" alt="별점" />
                  <S.RatingSpan>{martlist.ratings} ( )</S.RatingSpan>
                </li>
                <li>주소 : {martlist.address}</li>
                <li>연락처 : {martlist.phoneNumber}</li>
              </S.CarouselContent>
            </S.CarouselBox>
          </S.MartBox>
        ))}
      </Slider>
    </S.CarouselWholeContainer>
  );
};

export default HomeCarousel;
