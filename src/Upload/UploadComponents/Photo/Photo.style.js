import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const PhotoBox = styled(ReactModal)`
  ${flex('center', 'center', 'column')}
  /* position: absolute; */
  width: 360px;
  height: 698px;
  /* left: 0px;
  top: 42px; */
  background: rgba(0, 0, 0, 0.5);
`;
