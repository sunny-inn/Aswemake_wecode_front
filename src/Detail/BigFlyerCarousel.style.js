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

// export const CloseButtonBox = styled.div`
//   width: max-content; /* CloseButtonBox의 너비를 내부 컨텐츠의 크기만큼으로 지정 */
//   display: flex;
//   justify-content: flex-end; /* 닫기 버튼을 오른쪽으로 정렬 */
// `;

export const ModalCloseImg = styled.img`
  width: 24px;
  height: 24px;
  right: 0;
  position: absolute;
  cursor: pointer;
`;

export const FlyerImage = styled.img`
  width: 100%;
  height: 95%;
`;
// export const BigFlyerImgBox = styled.div`
//   position: absolute;
//   box-sizing: border-box;
//   z-index: 1;
//   width: 100%;
//   height: 95%;
// `;

export const BigFlyerImgBox = styled(Slider)`
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  height: 95%;
`;
