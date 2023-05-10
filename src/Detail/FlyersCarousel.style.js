import styled from 'styled-components';
import Slider from 'react-slick';

export const FlyerCarouselContainer = styled.div`
  width: 360px;
  height: 230px;
  padding-bottom: 10px;
  border-bottom: 8px solid #f9f9f9;
  justify-content: center;
  overflow-x: hidden;
  margin-left: 10px;

  .slick-slide slick-active slick-current {
    margin-right: 10px;
  }
  .slick-slide {
    margin-right: 10px;
  }
  .slick-track {
    display: flex;
  }
`;

export const FlyerImage = styled.img`
  width: 120px;
  height: 200px;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
`;

export const MartSlider = styled(Slider)`
  /* display: flex;
  gap: 10px; */
`;
https://flyers.qmarket.me/images/flyernone.png