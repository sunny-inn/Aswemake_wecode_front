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
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const PromoEndDate = styled.span`
  color: #ff6a21;
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
  font-size: 15px;
  line-height: 18px;
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
  margin-top: 50px;
`;
export const ModalContainer = styled.div`
  width: 360px;
  height: 616px;
  z-index: 10;
`;

export const CloseButton = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
export const BigImage = styled.img`
  width: 100%;
  height: 85%;
`;
