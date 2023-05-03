import styled from 'styled-components';

export const FavoriteListContainer = styled.div`
  width: 360px;
  height: 616px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const MartBox = styled.div`
  border: 1px solid #ececec;
  box-shadow: 1px 1px 4px rgba(154, 154, 154, 0.1);
  border-radius: 12px;
  margin-top: 15px;
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
`;

export const CarouselImg = styled.img`
  width: 88px;
  height: 88px;
  left: 51px;
  top: 612px;
  border-radius: 8px;
`;

export const CarouselContent = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  margin-left: 10px;
  padding-top: 5px;
  color: #707070;
  width: 250px;
`;

export const MartTitleLi = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const MartTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: black;
`;

export const StarImg = styled.img`
  width: 19px;
  height: 18px;
  display: inline-block;
`;

export const MartContentBox = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55%;
`;
