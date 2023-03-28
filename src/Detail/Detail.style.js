import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 360px;
  height: 616px;
  top: 0;
  left: 0;
  background-color: white;
`;

export const DetailNavContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: white;
  width: 360px;
  height: 56px;
  border-bottom: 1px solid #ececec;
  text-align: center;
  align-items: center;
  top: 0;
`;

export const BeforeIcon = styled.img`
  width: 6px;
  height: 12px;
  color: black;
  left: 10px;
  margin: 0px 10px;
  position: absolute;
  cursor: pointer;
`;

export const DetailNavTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

export const PostersConstainer = styled.div`
  margin-top: 60px;
  border: 1px solid red;
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
`;

export const MartFavoriteIcon = styled.img`
  width: 19px;
  height: 18px;
`;
