import styled from 'styled-components';
import Slider from 'react-slick';

export const BigCarouselContainer = styled.div`
  width: 364px;
  height: 624px;
  background-color: black;
  position: fixed;
  top: 0px;
  left: 0px;
`;
export const BigCarouselContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  -webkit-box-pack: center;
  overflow: hidden;
  justify-content: center;
`;

export const ModalCloseImg = styled.img`
  width: 24px;
  height: 24px;
  right: 0;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  top: 0;
`;

export const FlyerImage = styled.img`
  width: 100%;
  height: 95%;
`;

export const BigFlyerImgBox = styled(Slider)`
  position: absolute;
  z-index: 1;
  width: 100%;
`;
