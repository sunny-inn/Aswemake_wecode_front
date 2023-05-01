import styled from 'styled-components';

export const BigCarouselContainer = styled.div`
  width: 360px;
  height: 616px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;
export const BigCarouselContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CloseButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ModalCloseImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  right: 0;
  cursor: pointer;
`;

export const FlyerImage = styled.img`
  width: 100%;
  height: 95%;
`;
