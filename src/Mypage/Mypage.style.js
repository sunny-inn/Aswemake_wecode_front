import styled from 'styled-components';
import { flex } from '../Styles/Mixin';

export const MypageBox = styled.div`
  background: #ffffff;
`;

export const InfoBox = styled.div`
  ${flex('center', null, 'column')}
  padding: 10px;
  border-bottom: 5px solid #f9f9f9;
`;

export const NameBox = styled.div`
  margin-bottom: 20px;

  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #252525;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 19px;
`;

export const PointBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 328px;
  height: 52px;
  padding: 10px;
  background: #fff8f5;
  border: 1px solid #fff1eb;
  border-radius: 8px;
`;

export const PointTitle = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #707070;
`;

export const Points = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  color: #ff6a21;
`;

export const MenuBox = styled.div`
  ${flex(null, 'flex-start', 'column')}
`;

export const MenuBtn = styled.div`
  width: 360px;
  padding: 20px;
  background: #ffffff;
  border-bottom: 1px solid #f9f9f9;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
`;
