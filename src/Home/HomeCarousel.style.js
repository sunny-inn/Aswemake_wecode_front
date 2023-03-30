import styled from 'styled-components';

export const StarImg = styled.img`
  width: 14px;
  height: 13px;
  display: inline-block;
  position: absolute;
`;

export const RatingSpan = styled.span`
  margin-left: 17px;
`;

export const CarouselWholeContainer = styled.div`
  width: 345px;
  height: 100px;
  z-index: 10;
  position: absolute;
  margin-left: 7px;
  bottom: 0;
`;

export const CarouselImg = styled.img`
  width: 83px;
  height: 83px;
  left: 51px;
  top: 612px;
  background: #d9d9d9;
  mix-blend-mode: overlay;
`;

export const CarouselBox = styled.ul`
  display: flex;
  padding: 5px;
  margin: 0 5px;
  list-style: none;
  background-color: #c6c3c3;
`;

export const CarouselContent = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 17px;
  margin-left: 20px;
  padding-top: 5px;
`;

export const MartBox = styled.div`
  cursor: pointer;
`;
