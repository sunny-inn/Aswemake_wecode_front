import styled from 'styled-components';
import Slider from 'react-slick';

export const StarImg = styled.img`
  width: 19px;
  height: 18px;
  display: inline-block;
`;

export const CarouselWholeContainer = styled(Slider)`
  width: 360px;
  height: 115px;
  z-index: 10;
  position: fixed;
  margin-left: 2px;
  bottom: 69px;
  overflow-x: hidden;

  .slick-list {
    position: relative;
    display: inherit;
    overflow: hidden;
    margin: 0px -12px;
  }
`;

export const CarouselImg = styled.img`
  width: 88px;
  height: 88px;
  left: 51px;
  top: 612px;
  border-radius: 8px;
`;

export const CarouselBox = styled.ul`
  display: flex;
  padding: 10px;
  margin: 0 3px;
  list-style: none;
  background-color: #fff;
  width: 328px;
  height: 112px;
  border-radius: 12px;
  border: 1px solid #f9f9f9;
`;

export const CarouselContent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  margin-left: 10px;
  padding-top: 5px;
  color: #707070;
  width: 250px;
`;

export const MartBox = styled.div`
  cursor: pointer;
`;

export const MartTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -1px;
  color: black;
`;
export const MartTitleLi = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const MartContentBox = styled.div`
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

export const AddressAndPhone = styled.li`
  letter-spacing: -1px;
`;
