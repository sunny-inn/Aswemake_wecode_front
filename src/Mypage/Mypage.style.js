import styled from 'styled-components';
import { flex } from '../Styles/Mixin';

export const MypageBox = styled.div`
  background: #ffffff;
`;

export const InfoBox = styled.div`
  ${flex('center', null, 'column')}
  padding: 10px;
`;

export const NameBox = styled.div`
  margin-bottom: 20px;
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
