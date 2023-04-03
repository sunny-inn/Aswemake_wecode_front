import styled from 'styled-components';

export const FavoriteNavContainer = styled.div`
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
export const FavoriteNavTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;
