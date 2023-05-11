import styled from 'styled-components';
import Slider from 'react-slick';

export const FlyerCarouselContainer = styled.div`
  width: 360px;
  padding-bottom: 16px;
  border-bottom: 8px solid #f9f9f9;
  justify-content: center;
  overflow-x: hidden;
  margin-left: 10px;

  .slick-list {
    .slick-track {
      display: flex;
      width: 520px;
    }
  }
  .slick-slide slick-active slick-current {
    margin-right: 5px;
  }
  .slick-slide {
    /* margin-right: 5px; */
  }
`;

export const FlyerImage = styled.img`
  height: 168px;
  width: 120px;
  border: 2px solid #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
`;

export const MartSlider = styled(Slider)`
  /* display: flex;
  gap: 10px; */
`;
