import styled from 'styled-components';
import { flex } from '../../../Styles/Mixin';

export const FlyersStatus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 5;
  background: #fff;
`;

export const FlyersStatusBody = styled.section`
  padding: 0 16px;
`;

export const CategoryButtonWrap = styled.div`
  margin-bottom: 12px;

  button {
    width: 109.3px;
    padding: 0 12px 12px 12px;
    border: none;
    border-bottom: 2px solid #f9f9f9;
    background: #fff;
    font-size: 13px;
    font-weight: 700;
    color: #bcbcbc;

    &[aria-selected='true'] {
      border-bottom: 2px solid #ff6a21;
      color: #ff6a21;
    }
  }
`;

export const FlyersStatusLi = styled.li`
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #ececec;
  border-radius: 12px;

  article {
    ${flex('space-between', null, null)}
  }
`;

export const FlyersStatusTitleWrap = styled.h3`
  padding-bottom: 6px;
  margin-bottom: 12px;
  border-bottom: 1px solid #f9f9f9;
`;

export const FlyersStatusTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 17.9px;
  color: #252525;
`;

export const FlyersStatusSubTitle = styled.p`
  margin-top: ${({ marginTop }) => marginTop};
  font-size: 13px;
  font-weight: 500;
  line-height: 15.5px;
  color: #707070;
`;

export const FlyersStatusImgWrap = styled.div`
  width: 88px;
  height: 88px;
  margin-right: 8px;
  object-fit: cover;

  img {
    width: 88px;
    height: 88px;
  }
`;

export const FlyersStatusTextWrap = styled.div`
  width: 208px;
`;

export const FlyersStatusName = styled.h2`
  margin: 2px 0 10px 0;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.4px;
  color: #252525;
`;

export const FlyersStatusEtc = styled.p`
  margin-bottom: ${({ marginBtm }) => marginBtm};
  font-size: 13px;
  font-weight: 500;
  line-height: 15.6px;
  color: #707070;
`;

export const ReRegistBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 12px;
  background: #dbdbdb;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 17px;
  font-weight: 700;
`;
