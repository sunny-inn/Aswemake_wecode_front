import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const PhotoBox = styled(ReactModal)`
  ${flex('center', 'center', 'column')}
  width: 360px;
  height: 698px;
  gap: 10px;
  background: rgba(0, 0, 0, 0.5);
`;

export const Camera = styled.div`
  width: 321px;
  height: 465px;
  border: 1px solid black;
`;

export const BottomBox = styled.div`
  ${flex('center', 'center', null)}
  gap: 10px;
`;

export const Album = styled.div`
  width: 89px;
  height: 95px;
  border: 1px solid black;
`;

export const ImgBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  div {
    width: 68px;
    height: 68px;
    border: 1px solid black;
  }
`;
