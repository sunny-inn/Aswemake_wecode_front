import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 360px;
  height: 616px;
  top: 0;
  left: 0;
  background-color: white;
  position: relative;
`;

export const PromoStartDate = styled.p`
  width: 95%;
  color: black;
  margin: 75px 0px 10px 0px;
  padding-left: 10px;
`;

export const PromoEndDate = styled.span`
  color: #ff6a21;
`;

export const PostersUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: ceneter;
  justify-content: center;
  padding-left: 0;
  padding-bottom: 15px;
  border-bottom: 8px solid #f9f9f9;
`;

export const MartTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: -20px;
`;

export const MartTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin: 15px 0px 15px 15px;
`;

export const MartDetailBox = styled.div`
  margin-left: 15px;
`;
export const MartDetailText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 15px;
`;

export const MartDetailContentImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
`;

export const ShareAndFavoriteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
