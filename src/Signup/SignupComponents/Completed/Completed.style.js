import styled from 'styled-components';
import { flex } from '../Styles/Mixin';

export const TitleBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 360px;
  height: 56px;
  background: #ffffff;
  border-bottom: 1px solid #ececec;

  h1 {
    font-weight: 700;
    font-size: 18px;
    color: #252525;
  }
`;
