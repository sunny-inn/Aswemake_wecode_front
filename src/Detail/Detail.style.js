import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 360px;
  height: 616px;
  top: 0;
  left: 0;
  background-color: white;
`;

export const PostersConstainer = styled.div`
  margin-top: 70px;
  border-bottom: 8px solid #ececec;
`;

export const PostersUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: ceneter;
  justify-content: center;
  padding-left: 0;
`;

export const PostersList = styled.li``;

export const FirstImg = styled.img`
  width: 162px;
  height: 162px;
  margin: 1px 5px 0 0;
`;

export const SecImg = styled.img`
  width: 162px;
  height: 80px;
`;
export const ThirdImg = styled.img`
  margin-right: 3px;
  width: 80px;
  height: 80px;
`;

export const MartTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: -20px;
`;

export const MartFavoriteIcon = styled.img`
  width: 19px;
  height: 18px;
  margin-right: 15px;
`;

export const MartTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-left: 15px;
`;

export const MartDetailBox = styled.div`
  margin-left: 15px;
`;
export const MartDetailText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
