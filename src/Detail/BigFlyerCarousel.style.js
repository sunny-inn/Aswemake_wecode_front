import styled from 'styled-components';

export const BigCarouselContainer = styled.div`
  width: 364px;
  height: 616px;
  background-color: black;
  position: absolute;
  top: -75px;
  left: 0px;
`;
export const BigCarouselContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* CloseButtonBox를 위쪽으로 정렬 */
`;

export const CloseButtonBox = styled.div`
  width: max-content; /* CloseButtonBox의 너비를 내부 컨텐츠의 크기만큼으로 지정 */
  display: flex;
  justify-content: flex-end; /* 닫기 버튼을 오른쪽으로 정렬 */
`;

export const ModalCloseImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

export const FlyerImage = styled.img`
  width: 100%;
  height: 95%;
`;
export const BigFlyerImgBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  height: 95%;
`;
